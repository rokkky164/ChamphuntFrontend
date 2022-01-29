
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import Logo from '../../assets/images/header/logo.png';
import Plus from '../../assets/images/header/plus.svg';
import Bell from '../../assets/images/header/bell.svg';
import Coins from '../../assets/images/deals/coins.svg';
import SearchIcon from '../../assets/images/header/search_icon.svg';
import Avatar from '../../assets/images/header/avatar.png';

import Input from '../../commons/form/input';
import HeaderMenu from '../header-menu';

import './index.scss';
import { Tooltip } from 'carbon-components-react';

const Header = ( props ) => {
    
    const { onlyLogo, showAdd, notification = 3 } = props;

    const [showInput, setShowInput] = useState(false);

    const navigate = useNavigate();

    const handleOnChange = () => {

    }

    const handleSearchIconClick = () => {
        navigate('/search');
    }


    const userProfileName = 'Pranay Karwa';
    return <header className="header">
        <div className='header-cnt'>
            <div className="logo-block">
                <NavLink to="/pitch">
                    <img src={Logo} alt='Champhunt' />
                    <span className='logo-text'>
                        CHAMPHUNT
                    </span>
                </NavLink>
            </div>
            { showAdd && <div className='desktop-only add-funds'>
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
                    <Tooltip
                        direction='bottom'
                    >
                        <div className='notification-content'>
                            <div className='heading'>
                                <p className='title' >Notification</p>
                                <p className='sub-title' >You have 2 notification today</p>
                            </div>
                            <div className='notifications'>

                            </div>
                        </div>
                    </Tooltip>
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