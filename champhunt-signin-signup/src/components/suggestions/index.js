import { useEffect, useState } from 'react';
import './index.scss';
import Suggestion from './suggestion';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Suggestions = () => {
    const navigate = useNavigate();
    const [suggestions, setSuggestions] = useState([]);
    const accessToken = localStorage.getItem('access-token');
    let url = 'http://127.0.0.1:8001/api/v0/friends-suggestion/';
    var getSuggestionsOptions = {
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
        axios(getSuggestionsOptions)
            .then(response => {
                const results = response.data.results;
                let suggestionsData = [];
                results.forEach(function(element) {
                    suggestionsData.push({
                        name: element.first_name + ' ' + element.last_name,
                        role: element.player_profile,
                        avatar: "https://i.pravatar.cc/75",
                        followers: element.followers.length,
                        runs: element.runs,
                        id: element.id
                    });

                })
                setSuggestions(suggestionsData);
            })
            .catch(error => {
                if (error.status == 400) {

                } else if (error.status == 401) {
                    navigate('/login')
                }
            })



    }, []);

    return <div className="component suggestions">
        <p className='suggest-heading'>
            Suggestions
        </p>
        { suggestions.map( suggestion => <Suggestion key={suggestion.id} {...suggestion} /> ) }
    </div>
}

export default Suggestions;