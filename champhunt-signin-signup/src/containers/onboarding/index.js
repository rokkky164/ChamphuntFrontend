import React from 'react';

import BgImage from '../../assets/images/signin-signup/signin-signup-bg-2.png';
import OnboardingComponent from '../../components/onboarding';
import Header from '../../components/header';

import './index.scss';

const Onboarding = () => {
    return <div style={{ backgroundImage: `url(${BgImage})` }} className='page onboarding'>
        <Header onlyLogo={true} />
        <OnboardingComponent />
    </div>
}

export default Onboarding;