import { useEffect, useState } from 'react';

import Input from '../../commons/form/input';
import Select from '../../commons/form/select';
import ChampButton from '../../commons/form/button';

import Upload from '../../assets/images/onboarding/upload.svg';
import Avatar from '../../assets/images/onboarding/avatar.svg';

import './index.scss';

const OnboardingComponent = () => {

    const [options, setOptions] = useState([]);
    const [disabled, setDisabled] = useState(true);
    const [userInfo, setUserInfo] = useState({
        name: '',
        place: '',
        interests: []
    });
    const [step, setStep] = useState(1);

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

        window.location.href = "/pitch";

    }

    const handleNext = () => {
        setStep(2);
    }

    const handleOnChange = ( event ) => {
        const { name, value } = event.target;
        
        setUserInfo({
            ...userInfo,
            [name]: value
        });
    }

    const getGtkmMarkup = () => {
        let markup;

        switch(step) {
            case 1:
                markup = <>
                <p className='center primary'>Hello , XYZ.mail.com</p>
                <p className='center primary'>Let others know about you</p>
                <form className='onboarding gtkm form'>
                    <Input
                        classes='primary gtkm-name'
                        placeholder='Type here...'
                        label='My friends call me'
                        name='name'
                        onChange={ handleOnChange }
                    />
                    <Select
                        options = {options}
                        onChange={ handleOnChange }
                        name = 'place'
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
                </form>
                </>
                break;
            default:
                markup = <>
                <p className='center primary'>Hello , Itachi</p>
                <p className='center limit primary'>Meet new people {'&'} discover activities , news and much more of your interest. What are you interested in ?</p>
                <form className='onboarding gtkm form'>
                <Input
                    classes='primary gtkm-name'
                    placeholder='Type here...'
                    label='My friends call me'
                    name='name'
                    onChange={ handleOnChange }
                />
                <Select
                    options = {options}
                    onChange={ handleOnChange }
                    name = 'place'
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
            </form>
            </>
        }
        return markup;
    }

    useEffect(()=>{
        if( userInfo.name && userInfo.place ) {
            setDisabled(false);
        }
    },[userInfo]);

    return <div className="component on-boarding">
        
        { getGtkmMarkup() }
        <div className='gtkm-footer'>
                <ChampButton
                    label='Next'
                    classes='next tertiary-button'
                    onClick={handleNext}
                    disabled={disabled}
                /> 
            </div>

    </div>
}

export default OnboardingComponent;