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
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const OnboardingComponent = () => {
    const profileEmail = localStorage.getItem('user_email');
    const userName = localStorage.getItem('user_name');
    const userID = localStorage.getItem('user_id');
    const accessToken = localStorage.getItem('access-token');
    const profileID = localStorage.getItem('profile-id');
    const navigate = useNavigate();
    if (!accessToken){navigate('/login');}
    if (profileID){navigate('/pitch');}
    const [options, setOptions] = useState([]);
    const [disabled, setDisabled] = useState(true);
    const [userInfo, setUserInfo] = useState({
        first_name: '',
        last_name: '',
        state: '',
        user: '',
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
            {id: 'Andhra Pradesh', label: 'Andhra Pradesh'},
            {id: 'Arunachal Pradesh', label: 'Arunachal Pradesh'},
            {id: 'Assam', label: 'Assam'},
            {id: 'Bihar', label: 'Bihar'},
            {id: 'Chhattisgarh', label: 'Chhattisgarh'},
            {id: 'Goa', label: 'Goa'},
            {id: 'Gujarat', label: 'Gujarat'},
            {id: 'Haryana', label: 'Haryana'},
            {id: 'Himachal Pradesh', label: 'Himachal Pradesh'},
            {id: 'Jammu & Kashmir', label: 'Jammu & Kashmir'},
            {id: 'Karnataka', label: 'Karnataka'},
            {id: 'Kerala', label: 'Kerala'},
            {id: 'Madhya Pradesh', label: 'Madhya Pradesh'},
            {id: 'Maharashtra', label: 'Maharashtra'},
            {id: 'Manipur', label: 'Manipur'},
            {id: 'Meghalaya', label: 'Meghalaya'},
            {id: 'Mizoram', label: 'Mizoram'},
            {id: 'Nagaland', label: 'Nagaland'},
            {id: 'Delhi', label: 'Delhi'},
            {id: 'Odisha', label: 'Odisha'},
            {id: 'Puducherry', label: 'Puducherry'},
            {id: 'Punjab', label: 'Punjab'},
            {id: 'Rajasthan', label: 'Rajasthan'},
            {id: 'Sikkim', label: 'Sikkim'},
            {id: 'Tamil Nadu', label: 'Tamil Nadu'},
            {id: 'Telangana', label: 'Telangana'},
            {id: 'Tripura', label: 'Tripura'},
            {id: 'Uttar Pradesh', label: 'Uttar Pradesh'},
            {id: 'Uttarakhand', label: 'Uttarakhand'},
            {id: 'West Bengal', label: 'West Bengal'}
        ];

        setOptions(stateOptions);
    }, []);

    const handleLater = () => {

        window.location.href = "/pitch";

    }

    const handleNext = (event) => {
        if (step==1){
            userInfo.user = userID;
            var submitUserProfileOptions = {
                    method: 'post',
                    url: 'http://localhost:8001/api/v0/user-profile/',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + accessToken,
                    },
                    data: userInfo,
                    json: true
                };
            axios(submitUserProfileOptions)
                .then(response => {
                    debugger;

                })
                .catch(error => {
                    if (error.status == 401){
                        navigate('/login');
                    }
                })

        }

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
                <p className='center primary'>Hello , {profileEmail}</p>
                <p className='center primary'>Let others know about you</p>
                <div className='onboarding gtkm form'>
                    <Input
                        classes='primary gtkm-name'
                        placeholder='Type here...'
                        label='First Name'
                        id='first_name'
                        name='first_name'
                        onChange={ handleOnChange }
                    />
                    <Input
                        classes='primary gtkm-name'
                        placeholder='Type here...'
                        label='Last Name'
                        id='last_name'
                        name='last_name'
                        onChange={ handleOnChange }
                    />
                    <Select
                        options = {options}
                        onChange={ handleOnChange }
                        id='state'
                        name='state'
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
                                id='profile_pic'
                                name='profile_pic'
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
                <p className='center primary'>Hello , {userName}</p>
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
        if( (userInfo.first_name && userInfo.last_name && userInfo.state) || step === 2 ) {
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