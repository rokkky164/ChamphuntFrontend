import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

import Post from './post';

import './index.scss';

const Posts = (filterPitches) => {
    const navigate = useNavigate();
    const[posts, setPosts] = useState([]);
    const accessToken = localStorage.getItem('access-token');
    let url = 'http://localhost:8001/api/v0/pitches/';
    if (filterPitches){
        if (filterPitches.filter == 'my_posts'){
           url = 'http://localhost:8001/api/v0/pitches/?filter=user'; 
        }
        else if (filterPitches.filter == 'friends'){
           url = 'http://localhost:8001/api/v0/pitches/?filter=friends'; 
        }
    }
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

    useEffect(()=>{
        const data = [
            {
                author: {
                    name: "Sameer Kanva",
                    url: "/users/chandan",
                    avatar: "https://i.pravatar.cc/45",
                },
                coAuthor: {
                    name: "Navendhu Sinha",
                    url: "/users/navendhu",
                },
                post: {
                    date: "30.12.2021",
                    time: "15:20:45",
                    content: "Hey, Stats of a winner",
                    comments: 4,
                    runs: 123
                }
            },{
                author: {
                    name: "Navendhu Sinha",
                    url: "/users/chandan",
                    avatar: "https://i.pravatar.cc/45",
                },
                post: {
                    date: "30.12.2021",
                    time: "15:20:45",
                    content: "Sachin vs Kohli",
                    comments: 4,
                    runs: 123
                }
            }
        ];

        setPosts(data);
    }, []);

    return <div className="component posts">
        {
            posts.map((post, index) => <Post key={index} {...post} />)
        }
    </div>
}

export default Posts;