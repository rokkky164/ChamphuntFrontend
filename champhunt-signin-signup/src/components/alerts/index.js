import { useEffect, useState } from 'react';

import Button from '../../commons/form/button';
import Avatar from '../../assets/images/header/avatar.png';
import Camera from '../../assets/images/posts/camera.svg';
import CameraWhite from '../../assets/images/posts/camera_white.svg';

import './index.scss';
import ChampButton from '../../commons/form/button';
import PostContext from '../../context/post';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const Alert = () => {

    const [showForm, setShowForm] = useState(false);
    const [formContent, setFormContent] = useState({
        message: '',
        image: '',
        userprofile: ''
    });

    const handleOnClick = () => {
        setShowForm(!showForm);
    }

    const handleCancel = () => {
        setShowForm(false);
    }

    const handleInputChange = (event) => {

        const { name, value } = event.target;

        if (name === 'image') {

            const file = event.target.files[0];

            const reader = new FileReader();
            const url = reader.readAsDataURL(file);
            reader.onloadend = function(e) {
                setFormContent({
                    ...formContent,
                    [name]: [reader.result]
                });
            }
        } else {
            setFormContent({
                ...formContent,
                [name]: value
            });
        }
    }
    const formData = new FormData();
    const handlePostSubmit = (e) => {
        e.preventDefault();
        
        formData.append("message", formContent.message);
        formData.append("image", formContent.image);
        formData.append("userprofile", localStorage.getItem('profile-id'));

        const accessToken = localStorage.getItem('access-token');
        var submitPostOptions = {
            method: 'post',
            url: 'http://champhuntsm-env.eba-zezpix24.us-west-1.elasticbeanstalk.com/api/v0/submit-pitch/',
            headers: {
                'Authorization': 'Bearer ' + accessToken,
            },
            data: formData,
            json: true
        };
        axios(submitPostOptions)
            .then(response => {
                setShowForm(false);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const getFormMarkup = (showForm, Camera, handleCancel) => {
        return <div className={`form ${showForm ? 'visible' : 'hidden'}`}>
        
        <div className='form-heading'>
            Type your post
        </div>
        <div className='post-form'>
            <textarea
                onChange={handleInputChange}
                name='message'
                placeholder='Start typing here'
                id='postContent'
                className='post-content'
                value={formContent.message}
            >
            </textarea>
        </div>
        <div className='attachment-content'>
            { formContent.image && <img className='attch' src={formContent.image} alt='' /> }
        </div>
        <div className='post-footer'>
            <div className='cta-container'>
                <div className='left-cta'>
                    <ChampButton
                        classes='upload primary-button attach'
                        label='Attach image/video'
                        id='image'
                        name='image'
                        icon={Camera}
                        onChange={handleInputChange}
                        type='file'
                    />
                </div>
                <div className='right-cta'>
                    <ChampButton
                        classes='upload primary-button cancel-post'
                        label='Cancel'
                        onClick={handleCancel}
                    />
                    <ChampButton
                        classes='upload primary-button create-post'
                        label='Submit'
                        disabled={formContent.message === ''}
                        onClick={handlePostSubmit}
                    />
                </div>
            </div>
        </div>
    </div>
    }
    const profileEmail = localStorage.getItem('user_email');
    return <div className="component alert">
        
        <div className='alert-container'>
            <div className='left'>
                <img src={Avatar} alt='' />
                <span className='primary'>
                    Hello, {profileEmail}
                </span>
            </div>
            
            <div style={{
                display: showForm ? 'none' : 'block'
            }} className='right'>
                <Button
                    label = 'Submit a post'
                    classes = 'create-post'
                    onClick = { handleOnClick }
                />
            </div>
            <PostContext.Consumer>
                { value => value.showForm && getFormMarkup(value.showForm, CameraWhite, value.toggleShowForm) }
            </PostContext.Consumer>
        </div>
        
        { getFormMarkup(showForm, Camera,handleCancel) } 
    </div>
}

export default Alert;