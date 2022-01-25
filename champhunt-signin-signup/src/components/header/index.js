
import { NavLink } from 'react-router-dom';

import Logo from '../../assets/images/header/logo.png';
import Plus from '../../assets/images/header/plus.svg';
import Bell from '../../assets/images/header/bell.svg';
import Coins from '../../assets/images/deals/coins.svg';
import SearchIcon from '../../assets/images/header/search_icon.svg';
import Avatar from '../../assets/images/header/avatar.png';

import Input from '../../commons/form/input';
import HeaderMenu from '../header-menu';

import './index.scss';
import { useState } from 'react';

const Header = ( props ) => {
    
    const { onlyLogo, showAdd, notification = 0 } = props;

    const [showInput, setShowInput] = useState(false);

    const handleOnChange = () => {

    }

    const handleSearchIconClick = () => {
        setShowInput(!showInput);
    }


    const userProfileName = 'Pranay Karwa';
    return <header className="header">
        <div className='header-cnt'>
            <div className="logo-block">
                <img src={Logo} alt='Champhunt' />
                <span className='logo-text'>
                    CHAMPHUNT
                </span>
            </div>
            { showAdd && <div className='add-funds'>
                    <div className='add-button'>
                        <img src={Plus} alt='' />
                    </div>
                    <p className='money'>0.00</p>
                </div>
            }
            { !onlyLogo && <div className="desktop-only nav-links">
                <NavLink to='/pitch' className={isActive => `nav-link ${isActive?'active':''}`}>
                    Pitch
                </NavLink>
                <NavLink to='/news' className={isActive => `nav-link ${isActive?'active':''}`}>
                    News
                </NavLink>
                <NavLink to='/deals' className={isActive => `nav-link ${isActive?'active':''}`}>
                    Deals
                </NavLink>
                <NavLink to='/support' className={isActive => `nav-link ${isActive?'active':''}`}>
                    I Support
                </NavLink>
                <NavLink to='/about-us' className={isActive => `nav-link ${isActive?'active':''}`}>
                    About Us
                </NavLink>
            </div>
            }
            { !onlyLogo && 
            <div className="search-block">
                <Input
                    placeholder="Search"
                    name="search"
                    classes={`search desktop-only ${showInput?'show':'hide'}`}
                    onChange={handleOnChange}
                />
                <div className='desktop-only search-icon' role="button" onClick={handleSearchIconClick} >
                    <img src={SearchIcon} alt='' />
                </div>
                <div className={`bell-icon ${notification>0 ? 'notification' : ''}`}>
                    <span className='not-present'></span>
                    <img src={Bell} alt='' />
                </div>
                <div className='coins-block'>
                    <img src={Coins} alt='' className='coins-img' />
                    <span className='coins-hand'>25000</span>
                </div>
            </div>
            }
            { !onlyLogo && 
            <div className="desktop-only profile-block">
                <div className='avatar'>
                    <img src={Avatar} alt='' />
                </div>
                <p className='primary'>
                    {userProfileName}
                    <i className='arrow down'></i>
                </p>
            </div>
            }
            <HeaderMenu />
        </div>
    </header>
}

export default Header;