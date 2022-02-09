import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Input from "../../commons/form/input";
import Post from "../posts/post";
import Suggestion from "../suggestions/suggestion";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import './index.scss';

const Search = () => {
    const navigate = useNavigate();
    const [searchResults, setSearchResults] = useState({});
    const accessToken = localStorage.getItem('access-token');
    const [searchTerm, setSearchTerm] = useState('');
    const [profilesCount, setProfilesCount] = useState(0);
    const [pitchesCount, setPitchesCount] = useState(0);

    const handleOnChange = (event) => {
        const searchTerm = event.target.value;
        setSearchTerm(searchTerm);
        let url = global.config.ROOTURL.prod + '/api/v0/search/?search_term=' + searchTerm;
        var getSearchOptions = {
            method: 'get',
            url: url,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            },
            json: true
        };
        axios(getSearchOptions)
            .then(response => {
                const pitches = response.data.pitches;
                const profiles = response.data.profiles;
                const pitchesCount = pitches.length;
                const profilesCount = profiles.length;
                setPitchesCount(pitchesCount);
                setProfilesCount(profilesCount);
                const searchResults = {
                    profiles: [],
                    pitches: [],
                    news: [],
                    deals: []
                }
                // populate profiles
                profiles.forEach(function(profile) {
                    searchResults.profiles.push({
                        'name': profile.first_name + ' ' + profile.last_name,
                        'avatar': "https://i.pravatar.cc/45",
                        'role': '',
                        'followers': profile.followers_count,
                        'runs': profile.runs,
                        'id': profile.id
                    })

                })
                // populate pitches 
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
                    searchResults.pitches.push({
                        'author': {
                            'name': pitch.user_data.first_name + ' ' + pitch.user_data.last_name,
                            'url': '',
                            'avatar': 'https://i.pravatar.cc/45'
                        },
                        'post': {
                            'date': postDate,
                            'time': postTime,
                            'content': pitch.message,
                            'comments': [],
                            'runs': pitch.runs,
                            'image': pitch.image
                        }
                    })
                })
                setSearchResults(searchResults);
            })
            .catch(error => {
                if (error.response.status === 400) {

                } else if (error.response.status === 401) {
                    navigate('/login')
                }
            })
    }

    return <div className="component search">
        <div className="search-holder">
            <Input
                placeholder='Search...profiles/pitches'
                name='search'
                classes='search-box'
                onChange={handleOnChange}
            />
            <div className="search-content">Search Results for <span className="bold">"{searchTerm}"</span> </div>
        </div>
        { 
        searchResults.profiles && 
            <>
                <div className="related-profiles suggestions">
                    <div className="heading">
                        <p className="title">
                            Related Profiles ({profilesCount})
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
                        <Tab>Related Posts ({pitchesCount})</Tab>
                    </TabList>
                    <TabPanel>
                        <div className="posts-container">
                            <div className="roles hidden">
                                <button className="role">Batsmen</button>
                                <button className="role">Bowler</button>
                                <button className="role">Wicket Keeper</button>
                                <button className="role active">Umpire</button>
                            </div>
                            <div className="posts">
                                { searchResults.pitches.map((post, index) => <Post key={index} {...post} />) }
                            </div>
                        </div>
                    </TabPanel>
                </Tabs>

                </div>
            </>
        }
    </div>
}

export default Search;