import { useEffect, useState } from 'react';
import './index.scss';
import Suggestion from './suggestion';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Suggestions = () => {
    const navigate = useNavigate();
    const [suggestions, setSuggestions] = useState([]);
    const accessToken = localStorage.getItem('access-token');
    let url = 'https://localhost:8001/api/v0/friends-suggestion/';
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
    
    useEffect(()=>{
        axios(getSuggestionsOptions)
            .then(response => {
                const results = response.data.results;
                let suggestionsData = [];
                for (let i = 0; i < results.length; i++) {
                    suggestionsData.push({
                        name: results[i].first_name + ' '+ results[i].last_name,
                        role: results[i].player_profile,
                        avatar: "https://i.pravatar.cc/75",
                        followers: results[i].followers.length,
                        runs: results[i].runs,
                        id: results[i].id
                    });
                }
                setSuggestions(suggestionsData);
            })
            .catch(error => {
                if (error.response.status == 400){

                }
                else if (error.response.status == 401){
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