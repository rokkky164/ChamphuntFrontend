import Header from "../../components/header";
import axios from 'axios';
import { useState, useEffect } from "react";

import { useNavigate, useParams } from 'react-router-dom';
import './index.scss'

const ActivateUserPage = () => {
    const params = useParams();
    const uid= params['uid'];
    const token = params['token'];

    const navigate = useNavigate();
    const callActivateUserAPI = (uidb64, token) => {
        axios({
                method: "post",
                url: global.config.ROOTURL.prod + "/api/v0/activate-user/",
                data: {
                  uid: uid,
                  token: token
                }
            })
            .then((response) => {
                localStorage.setItem('user_id', response.data['user_id']);
                localStorage.setItem('user_email', response.data['user_email']);
                const timer = setTimeout(() => {
                    navigate('/login');
                }, 3000);
                return () => clearTimeout(timer);  
            })
            .catch((error) => {});
    }
    useEffect(() => {
      callActivateUserAPI(uid, token);
    }, [])

    return <div className="page profile">
        <Header showAdd={false} onlyLogo={true}/>
        <main className="profile-main">
            <div className="activation-text">
                Your account has been activated!
            </div>
        </main>
    </div>
}

export default ActivateUserPage;