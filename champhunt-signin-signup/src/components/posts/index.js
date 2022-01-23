import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

import Post from './post';

import './index.scss';

const Posts = (filterPitches) => {
    const navigate = useNavigate();
    const[posts, setPosts] = useState([]);
    const accessToken = localStorage.getItem('access-token');
    let url = 'https://dc4b-2401-4900-3130-a158-f185-ddd3-ff01-421c.ngrok.io/api/v0/pitches/';
    if (filterPitches){
        if (filterPitches.filter == 'my_posts'){
           url = 'https://dc4b-2401-4900-3130-a158-f185-ddd3-ff01-421c.ngrok.io/api/v0/pitches/?filter=user'; 
        }
        else if (filterPitches.filter == 'friends'){
           url = 'https://dc4b-2401-4900-3130-a158-f185-ddd3-ff01-421c.ngrok.io/api/v0/pitches/?filter=friends'; 
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
        axios(getPostOptions)
            .then(response => {
                const pitches = response.data.results;
                let postArray = [];
                for (let i = 0; i < pitches.length; i++) {
                    var postDateObj = new Date(pitches[i].created);
                    var postDate = ''
                    var postTime = '';
                    var x = "AM";
                    if (postDateObj.getHours() > 12){
                        x= "PM"
                    }
                    postDate = postDateObj.getDate() + "."+ parseInt(postDateObj.getMonth()+1) +"."+postDateObj.getFullYear();
                    postTime = postDateObj.getHours() % 12 + ":"+ postDateObj.getMinutes() + ' '+ x;
                    postArray.push({
                    'author': {
                        'name': pitches[i].user_data.first_name + ' '+ pitches[i].user_data.last_name,
                        'url': '',
                        'avatar':  "https://i.pravatar.cc/45"
                    },
                    'post':{
                        'date': postDate,
                        'time': postTime,
                        'content': pitches[i].message,
                        'comments': '',
                        'runs': pitches[i].runs,
                        'image': pitches[i].image
                    }

                  });
                }
                setPosts(postArray);
            })
            .catch(error => {
                if (error.response.status == 400){

                }
                else if (error.response.status == 401){
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