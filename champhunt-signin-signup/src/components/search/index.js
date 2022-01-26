import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Input from "../../commons/form/input";
import Post from "../posts/post";
import Suggestion from "../suggestions/suggestion";

import './index.scss';

const Search = () => {

    const [searchResults, setSearchResults] = useState({});

    const handleOnChange = () => {
        const searchResults = {
            profiles: [
                {
                    name: "Pranav Karwa",
                    role: "Bowler",
                    avatar: "https://i.pravatar.cc/75",
                    followers: 55,
                    runs: 300,
                    id: 1
                },{
                    name: "Rajatesh Nath",
                    role: "Umpire",
                    avatar: "https://i.pravatar.cc/75",
                    followers: 55,
                    runs: 120,
                    id: 2
                },{
                    name: "Sameer Kanva",
                    role: "Batsmen",
                    avatar: "https://i.pravatar.cc/75",
                    followers: 15,
                    runs: 3000,
                    id: 3
                }
            ],
            posts: [
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
            ],
            news: [],
            deals: []
        };

        setSearchResults(searchResults);
    }

    const searchContent = "Umpire Decisions";

    return <div className="component search">
        <div className="search-holder">
            <Input
                placeholder='Search...'
                name='search'
                classes='search-box'
                onChange={handleOnChange}
            />
            <div className="search-content">Search Results for <span className="bold">"{searchContent}"</span> </div>
        </div>
        { 
        searchResults.profiles && 
            <>
                <div className="related-profiles suggestions">
                    <div className="heading">
                        <p className="title">
                            Related Profiles (10)
                        </p>
                        <p className="view-all">
                            View all
                        </p>
                    </div>
                    <div className="profiles">{
                        searchResults.profiles && searchResults.profiles.map( profile => <Suggestion key={profile.id} {...profile} /> )
                    }</div>
                </div>
                <div className="search-results">

                <Tabs className="tabs" defaultIndex={0} >
                    <TabList>
                        <Tab>Related Posts(10)</Tab>
                        <Tab>News(0)</Tab>
                        <Tab>Deals(0)</Tab>
                    </TabList>
                    <TabPanel>
                        <div className="posts-container">
                            <div className="roles">
                                <button className="role">Batsmen</button>
                                <button className="role">Bowler</button>
                                <button className="role">Wicket Keeper</button>
                                <button className="role active">Umpire</button>
                            </div>
                            <div className="posts">
                                { searchResults.posts.map((post, index) => <Post key={index} {...post} />) }
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        NEWS
                    </TabPanel>
                    <TabPanel>
                        DEALS
                    </TabPanel>
                </Tabs>

                </div>
            </>
        }
    </div>
}

export default Search;