import { useEffect, useState, useRef, useCallback  } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Post from './post';
import { BallTriangle } from  'react-loader-spinner'
import './index.scss';

const Posts = (filterPitches) => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [prevY, setPrevY] = useState(0);
    const [loading, setLoading] = useState(true);
    const [hasMore, setHasMore] = useState(false);
    const accessToken = localStorage.getItem('access-token');
    let url = global.config.ROOTURL.prod + '/api/v0/pitches/';
    if (filterPitches) {
        if (filterPitches.filter == 'my_posts') {
            url = global.config.ROOTURL.prod + '/api/v0/pitches/?filter=user';
        } else if (filterPitches.filter == 'friends') {
            url = global.config.ROOTURL.prod + '/api/v0/pitches/?filter=friends';
        }
    }
    const postRef = useRef(null)
    let prevYRef = useRef({});
    let pageRef = useRef({});
    prevYRef.current = prevY;

    // set profile id in localStorage
    const getUnique = (array, key) => {
        if (typeof key !== 'function') {
            const property = key;
            key = function(item) { return item[property]; };
        }
        return Array.from(array.reduce(function(map, item) {
            const k = key(item);
            if (!map.has(k)) map.set(k, item);
            return map;
        }, new Map()).values());
    }

    const fetchPitches = () => {
        axios({
            method: 'get',
            url: url,
            params: { offset: pageNumber },
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            },
            json: true
        })
            .then(response => {
                localStorage.setItem('profile_id', response.data['user_email']);
                setPosts(prevPosts => {
                    return [...new Set([...prevPosts, ...response.data.results])]
                })
                // setPosts(prevPosts => {return (Set([...prevPosts, ...response.data.results])});
                setHasMore(response.data.results.length > 0);
            })
            .catch(error => {
                if (error.response.status === 400) {

                } else if (error.response.status === 401) {
                    navigate('/login')
                }
            })
    }
 
    useEffect(() => {
        var getProfileOptions = {
            method: 'get',
            url: global.config.ROOTURL.prod + '/api/v0/logged-in-profile/',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            },
            json: true
        }
        axios(getProfileOptions)
            .then(response => {
                localStorage.setItem('profile-id', response.data['profile_id']);
                localStorage.setItem('profile-runs', response.data['profile_runs']);
                localStorage.setItem('profile-name', response.data['profile_name']);
            })
            .catch(error => {
                if (error.response.status == 401) {}
            })
        fetchPitches();
        let options = {
          root: null,
          rootMargin: "0px",
          threshold: 1.0,
        };
        const observer = new IntersectionObserver(handleObserver, options);
        observer.observe(postRef.current);

     }, [pageNumber]);


    const handleObserver = (entities, observer) => {
        const y = entities[0].boundingClientRect.y;

        if (prevYRef.current > y) {
          fetchPitches();
          setPageNumber(pageNumber => pageNumber + 10);
        }
        console.log("currenty: ", y, "prevY: ", prevY);
        setPrevY(y);
    };

    return (
        <>
        <div className="component posts">
        {

            posts.map((post, index) => {
                debugger;
                if (index === posts.length - 1){
                    return <Post key={index} {...post} />
                }
                else {
                   return <Post key={index} {...post} />
                }
            })
        }
        <div>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
            {loading && <BallTriangle
                height="100"
                width="100"
                color='grey'
                ariaLabel='loading'
            />}
        </div>
        <div
            className="yoHello"
            ref={postRef}>
        </div>
  </div>
    </div>
    </>
    )
}

export default Posts;