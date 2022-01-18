import { useEffect, useState } from 'react';

import Input from '../../commons/form/input';
import Select from '../../commons/form/select';
import ChampButton from '../../commons/form/button';

import Upload from '../../assets/images/onboarding/upload.svg';
import Avatar from '../../assets/images/onboarding/avatar.svg';

import './index.scss';

const OnboardingComponent = () => {

    const [options, setOptions] = useState([]);

    useEffect(() => {
        const stateOptions = [
            {id: 1, label: 'Karnataka'},
            {id: 1, label: 'Andhra Pradesh'},
            {id: 1, label: 'Tamil Nadu'},
            {id: 1, label: 'Andhra Pradesh'},
            {id: 1, label: 'Karnataka'},
            {id: 1, label: 'Karnataka'},
            {id: 1, label: 'Karnataka'},
            {id: 1, label: 'Karnataka'},
            {id: 1, label: 'Karnataka'},
            {id: 1, label: 'Karnataka'},
            {id: 1, label: 'Karnataka'},
            {id: 1, label: 'Karnataka'},
            {id: 1, label: 'Karnataka'},
            {id: 1, label: 'Karnataka'},
            {id: 1, label: 'Karnataka'},
            {id: 1, label: 'Karnataka'},
            {id: 1, label: 'Karnataka'},
            {id: 1, label: 'Karnataka'},
            {id: 1, label: 'Karnataka'}
        ];

        setOptions(stateOptions);
    }, []);

    const handleUpload = () => {

    }

    const handleLater = () => {

    }

    const handleNext = () => {

    }

    return <div className="component on-boarding">
        <p className='center primary'>Hello , XYZ.mail.com</p>
        <p className='center primary'>Let others know about you</p>
        <form className='onboarding gtkm form'>
            <Input
                classes='primary gtkm-name'
                placeholder='Type here...'
                label='My friends call me'
                name='name'
            />
            <Select
                options = {options}
                name = 'state'
                titleText = 'I am from'
                label = 'Select'
            />
            <p className='primary'>
                Add a photo to better connect with friends and the like minded ones. People love your smile
            </p>
            <div className='gtkm-upload'>
                <div className='avatar'>
                    <img src={Avatar} alt='Upload your avatar' />
                </div>
                <div className='ctas'>
                    <ChampButton
                        classes='upload primary-button'
                        label='Upload'
                        icon={ Upload }
                        onClick={handleUpload}
                    />
                    <ChampButton
                        label='Do it later'
                        classes='later secondary-button'
                        onClick={handleLater}
                    /> 
                </div>
            </div>
            <div className='gtkm-footer'>
                <ChampButton
                    label='Next'
                    classes='next tertiary-button'
                    onClick={handleNext}
                /> 
            </div>
        </form>

    </div>
}

export default OnboardingComponent;