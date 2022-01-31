
import { useEffect, useState } from 'react';
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
import Notification from './notification';

const Header = ( props ) => {
    
    const { onlyLogo, showAdd, notification = 3 } = props;

    const [notifications,setNotifications] = useState([]);

    const [showInput, setShowInput] = useState(false);

    const navigate = useNavigate();

    const handleOnChange = () => {

    }

    const handleSearchIconClick = () => {
        navigate('/search');
    }

    useEffect(()=>{
        const nfs = [
            {
                "label": "Today",
                "items": [
                    {
                        "avatar": "./avatar.png",
                        "content": "Pranay liked your post",
                        "time": "2hrs ago",
                        "postimg": "./postimg.png"
                    },{
                        "avatar": "./avatar.png",
                        "content": "Sikotj liked your post",
                        "time": "2hrs ago",
                        "postimg": "./postimg.png"
                    },{
                        "avatar": "./avatar.png",
                        "content": "Pranay liked your post",
                        "time": "2hrs ago"
                    }
                ]
            },{
                "label": "This week",
                "items": [
                    {
                        "avatar": "./avatar.png",
                        "content": "Rajatesh your post",
                        "time": "20th Dec, 12:35AM",
                        "postimg": "./postimg.png"
                    },{
                        "avatar": "./avatar.png",
                        "content": "Pranay Shared your post",
                        "time": "20th Dec, 12:35AM",
                        "postimg": "./postimg.png"
                    }
                ]
            }
        ];
        setNotifications( nfs );
    },[]);

    const userCrickCoins = 25000;
    const userProfileName = localStorage.getItem('user_name');
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
                <NavLink to='/deals' className={isActive => `nav-link ${isActive?'active':''}`}>
                    Deals
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
                    <Notification notifications={notifications}/>
                </div>
                <div className='coins-block'>
                    <img src={Coins} alt='' className='coins-img' />
                    <span className='coins-hand'>{userCrickCoins}</span>
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