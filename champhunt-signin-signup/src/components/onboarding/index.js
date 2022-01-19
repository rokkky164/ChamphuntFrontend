import { useEffect, useState } from 'react';

import Input from '../../commons/form/input';
import Select from '../../commons/form/select';
import ChampButton from '../../commons/form/button';

import Upload from '../../assets/images/onboarding/upload.svg';
import Avatar from '../../assets/images/onboarding/avatar.svg';

import Batsmen from '../../assets/images/onboarding/batsmen.svg';
import Keeper from '../../assets/images/onboarding/keeper.svg';
import Umpire from '../../assets/images/onboarding/umpire.svg';
import Bowler from '../../assets/images/onboarding/bowler.svg';

import BatsmenSelected from '../../assets/images/onboarding/batsmen-selected.svg';
import KeeperSelected from '../../assets/images/onboarding/keeper-selected.svg';
import UmpireSelected from '../../assets/images/onboarding/umpire-selected.svg';
import BowlerSelected from '../../assets/images/onboarding/bowler-selected.svg';

import './index.scss';

const OnboardingComponent = () => {

    const [options, setOptions] = useState([]);
    const [disabled, setDisabled] = useState(true);
    const [userInfo, setUserInfo] = useState({
        name: '',
        place: '',
        interests: {
            batsmen: false,
            bowler: false,
            keeper: false,
            umpire: false
        }
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

    const handleLater = () => {

        window.location.href = "/pitch";

    }

    const handleNext = () => {
        if( step === 2 ) {
            handleLater();
        } else {
            setStep(2);
        }
    }

    const handleOnChange = ( event ) => {
        const { name, value } = event.target;
        
        setUserInfo({
            ...userInfo,
            [name]: value
        });
    }

    const updateInterests = (key) => {
        const interests = { ...userInfo.interests, [key]: !userInfo.interests[key] };

        setUserInfo({
            ...userInfo,
            interests 
        });

    }

    const getGtkmMarkup = () => {
        let markup;

        switch(step) {
            case 1:
                markup = <>
                <p className='center primary'>Hello , XYZ.mail.com</p>
                <p className='center primary'>Let others know about you</p>
                <div className='onboarding gtkm form'>
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
                                type='file'
                            />
                            <ChampButton
                                label='Do it later'
                                classes='later secondary-button'
                                onClick={handleLater}
                            /> 
                        </div>
                    </div>
                </div>
                </>
                break;
            default:

                const {
                    batsmen,
                    bowler,
                    keeper,
                    umpire
                } = userInfo.interests;

                markup = <>
                <p className='center primary'>Hello , Itachi</p>
                <span className='center limit primary'>Meet new people {'&'} discover activities , news and much more of your interest. What are you interested in ?</span>
                <form className='onboarding gtkm form'>
                    <div className='interests'>
                        <div className='interest'>
                            <img src={ batsmen ? BatsmenSelected : Batsmen } onClick={()=>{updateInterests('batsmen')}} />
                        </div>
                        <div className='interest'>
                            <img src={ keeper ? KeeperSelected : Keeper} onClick={()=>{updateInterests('keeper')}} />
                        </div>
                        <div className='interest'>
                            <img src={ bowler ? BowlerSelected : Bowler } onClick={()=>{updateInterests('bowler')}} />
                        </div>
                        <div className='interest'>
                            <img src={ umpire ? UmpireSelected : Umpire } onClick={()=>{updateInterests('umpire')}} />
                        </div>
                    </div>
                </form>
            </>
        }
        return markup;
    }

    useEffect(()=>{
        if( (userInfo.name && userInfo.place) || step === 2 ) {
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