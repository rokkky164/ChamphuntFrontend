
import { useEffect, useState } from 'react';

import Button from '../../commons/form/button';
import Avatar from '../../assets/images/header/avatar.png';
import Camera from '../../assets/images/posts/camera.svg';

import './index.scss';
import ChampButton from '../../commons/form/button';

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

        if(name === 'attachment') {

            const file = event.target.files[0];

            const reader = new FileReader();
            const url = reader.readAsDataURL(file);
    
            reader.onloadend = function (e) {
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
        </div>
        <div className={`form ${showForm ? 'visible' : 'hidden'}`}>
        
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
                <img className='attch' src={formContent.attachment} alt='' />
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
                            classes='upload primary-button'
                            label='Cancel'
                            onClick={handleCancel}
                        />
                        <ChampButton
                            classes='upload primary-button create-post'
                            label='Submit'
                            disabled={formContent.text === ''}
                            onClick={handleCancel}
                        />
                    </div>
                </div>
            </div>
        </div>   
    </div>
}

export default Alert;