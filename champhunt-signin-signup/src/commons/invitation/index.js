import { useState } from 'react';

import Invite from '../../assets/images/home/invite.svg';
import Link from '../../assets/images/home/link.svg';

import './index.scss';

const InviteModal = (props) => {

    const { open, onClose } = props;

    const [email, setEmail] = useState('');

    const handleEmailChange = ( event ) => {
        const { value } = event.target;
        setEmail(value);
    }

    const copyToClipboard = () => {
        const copyText = document.querySelector("#referId");
        copyText.select();
        document.execCommand("copy");
        onClose();
    }

    return <div className={`component invite-modal ${open?'visible':'hidden'}`}>
        <div className="invite-container">
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
                <div className='send-block'>
                    <button className='send'>
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