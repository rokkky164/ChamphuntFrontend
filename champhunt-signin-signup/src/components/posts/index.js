import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

import Post from './post';

import './index.scss';

const Posts = (filterPitches) => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const accessToken = localStorage.getItem('access-token');
    let url = 'http://localhost:8001/api/v0/pitches/';
    if (filterPitches) {
        if (filterPitches.filter == 'my_posts') {
            url = 'http://localhost:8001/api/v0/pitches/?filter=user';
        } else if (filterPitches.filter == 'friends') {
            url = 'http://localhost:8001/api/v0/pitches/?filter=friends';
        }
    }
    // set profile id in localStorage
    var getProfileOptions = {
        method: 'get',
        url: 'http://localhost:8001/api/v0/logged-in-profile/',
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
        })
        .catch(error => {
            if (error.response.status == 401) {
            }
        })
    //
    var getPostOptions = {
        method: 'get',
        url: url,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + accessToken
        },
        json: true
    };

    useEffect(() => {
        axios(getPostOptions)
            .then(response => {
                const pitches = response.data.results;
                localStorage.setItem('profile_id', response.data['user_email']);
                let postArray = [];
                pitches.forEach(function(pitch) {
                    var postDateObj = new Date(pitch.created);
                    var postDate = ''
                    var postTime = '';
                    var x = "AM";
                    if (postDateObj.getHours() > 12) {
                        x = "PM"
                    }
                    postDate = postDateObj.getDate() + "." + parseInt(postDateObj.getMonth() + 1) + "." + postDateObj.getFullYear();
                    postTime = postDateObj.getHours() % 12 + ":" + postDateObj.getMinutes() + ' ' + x;
                    postArray.push({
                        'author': {
                            'name': pitch.user_data.first_name + ' ' + pitch.user_data.last_name,
                            'url': '',
                            'avatar': "https://i.pravatar.cc/45"
                        },
                        'post': {
                            'post_id': pitch.id,
                            'date': postDate,
                            'time': postTime,
                            'content': pitch.message,
                            'comments': pitch.comments,
                            'runs': pitch.runs,
                            'image': pitch.image
                        }
                    });
                })
                setPosts(postArray);
            })
            .catch(error => {
                if (error.response.status === 400) {

                } else if (error.response.status === 401) {
                    navigate('/login')
                }
            })
    }, []);

    return <div className="component posts">
        {
            posts.map((post, index) => <Post key={index} {...post} />)
        }
    </div>
}

export default Posts;