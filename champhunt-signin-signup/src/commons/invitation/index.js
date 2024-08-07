import { useState } from 'react';

import Invite from '../../assets/images/home/invite.svg';
import Link from '../../assets/images/home/link.svg';
import axios from "axios";
import { Button } from 'carbon-components-react';
import './index.scss';

const InviteModal = (props) => {

    const { open, onClose } = props;

    const [email, setEmail] = useState('');
    const [inviteEmailErrorMsg, setInviteEmailErrorMsg] = useState('');
    const [inviteEmailSuccessMsg, setInviteEmailSuccessMsg] = useState('');
    const handleEmailChange = ( event ) => {
        const { value } = event.target;
        setEmail(value);
        setInviteEmailErrorMsg('');
    }

    const copyToClipboard = () => {
        const copyText = document.querySelector("#referId");
        copyText.select();
        document.execCommand("copy");
        onClose();
    }

    const handleSendInvitation = () => {
        const accessToken = localStorage.getItem('access-token');
        var sendInvitationOptions = {
            method: 'post',
            url: global.config.ROOTURL.prod + '/api/v0/invite-friends/',
            headers: {
                'Authorization': 'Bearer ' + accessToken,
            },
            data: {
                "email": email,
                "mobile": null,
                "source": "Invitiation from friend",
            },
            json: true
        };
        axios(sendInvitationOptions)
            .then(response => {
                setInviteEmailSuccessMsg('Mail has been sent!');
                const timer = setTimeout(() => {
                    onClose();
                }, 2000);
                return () => clearTimeout(timer);
            })
            .catch(error => {
                if ('email' in error.response.data){
                    setInviteEmailErrorMsg(error.response.data['email'].join(', '))
                }
            })
    }
    const closeModal = () => {
        onClose();
    }
    return <div className={`component invite-modal ${open?'visible':'hidden'}`}>
        <div className="invite-container" >
            <div style={{position: 'absolute', right: 0}}>
                <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={closeModal}
                  >X</button>
            </div>
            <div className="image-block">
                <img className='invite-image' src={Invite} alt='' />
            </div>
            <div className="invite-block">
                <p className='info'>
                    Invite your friends by email
                </p>
                <div className='input-block'>
                    <input onChange={handleEmailChange} name='email' className='email-input' placeholder='' value={email} />
                </div>
                {inviteEmailSuccessMsg && (
                      <p style={{ color: 'green' }}> {inviteEmailSuccessMsg} </p>
                )}
                {inviteEmailErrorMsg && (
                      <p style={{ color: 'red' }}> {inviteEmailErrorMsg} </p>
                )}
                <div className='send-block'>
                    <button className='send' onClick={handleSendInvitation}>
                        Send
                    </button>
                </div>
            </div>
            <div className="link-block">
                <p className='info'>
                 More ways to invite your friends
                </p>
                <div className='copy-link-cnt'>
                    <div className='copy-btn-cnt'>
                        <img className='link' src={Link} alt='' />
                        <button onClick={copyToClipboard} className='copy'>
                            Copy link
                        </button>
                    </div>
                    <div className='copy-text-cnt'>
                        <input className='refer-id' id='referId' value='https://ch.tt/LC9652T' readOnly={true} />
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default InviteModal;