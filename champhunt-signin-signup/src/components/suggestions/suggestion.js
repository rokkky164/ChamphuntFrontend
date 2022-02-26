import Button from "../../commons/form/button";
import axios from "axios";
import { useState } from 'react';
import Avatar from '../../assets/images/header/avatar.png';

import './index.scss';

const Suggestion = (props) => {
    const { avatar, runs, followers, name, role, following_id } = props;

    const [showSugestionBox, setShowSuggestionBox] = useState(true);
    const [changeTextToFollowing, setchangeTextToFollowing] = useState(false);
    const handleFollow = (following_id) => {
        const accessToken = localStorage.getItem('access-token');
        var followOptions = {
            method: 'post',
            url: global.config.ROOTURL.prod + '/api/v0/follow/',
            headers: {
                'Authorization': 'Bearer ' + accessToken,
            },
            data: {
                'user': localStorage.getItem('profile-id'),
                'following_user': following_id
            },
            json: true
        };

        axios(followOptions)
            .then(response => {
                setchangeTextToFollowing(true);
                const timer = setTimeout(() => {
                    setShowSuggestionBox(false);
                }, 2000);
                return () => clearTimeout(timer);
            })
            .catch(error => {
            })
        
    }
    
    return <div className={`suggestion ${showSugestionBox ? 'visible':'hidden'}`}>
        <div className="left-block">
            <div className="profile-info">
                <img src={Avatar} alt={name} className="avatar" />
                <p className="name primary">
                    { name }
                    <span className="role">
                        { role }
                    </span>
                </p>
            </div>
            <div className="button-block">
                <Button
                    label = {changeTextToFollowing ? 'Following' : 'Follow' }
                    classes = 'follow'
                    onClick = {() => handleFollow(following_id)}
                />
            </div>
        </div>
        <div className="right-block">
            <div className="stats-block">
                <div className="stat">
                    <div className="number followers">
                        {followers}
                    </div>
                    <p className="label primary">Followers</p>
                </div>
                <div className="stat">
                    <div className="number runs">
                        {runs}
                    </div>
                    <p className="label primary">Runs</p>
                </div>
            </div>
        </div>
    </div>
}

export default Suggestion;