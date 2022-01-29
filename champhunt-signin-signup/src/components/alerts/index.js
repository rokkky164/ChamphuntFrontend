import { useEffect, useState } from 'react';

import Button from '../../commons/form/button';
import Avatar from '../../assets/images/header/avatar.png';
import Camera from '../../assets/images/posts/camera.svg';
import CameraWhite from '../../assets/images/posts/camera_white.svg';

import './index.scss';
import ChampButton from '../../commons/form/button';
import PostContext from '../../context/post';

const Alert = () => {

    const [showForm, setShowForm] = useState(false);
    const [formContent, setFormContent] = useState({
        text: '',
        attachment: ''
    });

    const handleOnClick = () => {
        setShowForm(!showForm);
    }

    const handleCancel = () => {
        setShowForm(false);
    }

    const handleInputChange = (event) => {

        const { name, value } = event.target;

        if (name === 'attachment') {

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

    const handlePostSubmit = () => {

    }

    const getFormMarkup = (showForm, Camera, handleCancel) => {
        return <div className={`form ${showForm ? 'visible' : 'hidden'}`}>
        
        <div className='form-heading'>
            Type your post
        </div>
        <div className='post-form'>
            <textarea
                onChange={handleInputChange}
                name='text'
                placeholder='Start typing here'
                className='post-content'
                value={formContent.text}
            >
            </textarea>
        </div>
        <div className='attachment-content'>
            { formContent.attachment && <img className='attch' src={formContent.attachment} alt='' /> }
        </div>
        <div className='post-footer'>
            <div className='cta-container'>
                <div className='left-cta'>
                    <ChampButton
                        classes='upload primary-button attach'
                        label='Attach image/video'
                        name='attachment'
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
                        disabled={formContent.text === ''}
                        onClick={handlePostSubmit}
                    />
                </div>
            </div>
        </div>
    </div>
    }
    const profileEmail = localStorage.getItem('user_email');
    debugger;
    return <div className="component alert">
        
        <div className='alert-container'>
            <div className='left'>
                <img src={Avatar} alt='' />
                <span className='primary'>
                    Hello, test@customer.com
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