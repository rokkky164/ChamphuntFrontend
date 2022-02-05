import { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

import Suggestion from './suggestion';
import InviteModal from '../../commons/invitation';

import Friend from '../../assets/images/home/friend.svg';

import './index.scss';

const Suggestions = () => {

    const navigate = useNavigate();

    const [showModal, setShowModal] = useState(false);
    const [suggestions, setSuggestions] = useState([]);
    
    const accessToken = localStorage.getItem('access-token');
    
    const url = 'http://localhost:8001/api/v0/friends-suggestion/';
    
    const getSuggestionsOptions = {
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
                        followers: element.followers_count,
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

    const handleInviteModal = () => {
        setShowModal(!showModal);
    }

    return <div className="component suggestions">
        <InviteModal
            open={showModal}
            onClose={handleInviteModal}
        />
        <div className='suggest-heading'>
            <p>Suggestions</p>
            <div className='invite'>
                <img src={Friend} alt='' />
                <button className='invite-button' onClick={handleInviteModal} >Invite your friends</button>
            </div>
        </div>
        { suggestions.map( suggestion => <Suggestion key={suggestion.id} {...suggestion} /> ) }
    </div>
}

export default Suggestions;