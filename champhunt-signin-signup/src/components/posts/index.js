import { useEffect, useState } from "react";

import Post from './post';

import './index.scss';

const Posts = () => {

    const[posts, setPosts] = useState([]);

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