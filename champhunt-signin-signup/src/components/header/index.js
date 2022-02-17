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
import { Tooltip } from 'carbon-components-react';

import axios from "axios";

const Header = ( props ) => {
    
    const { onlyLogo, showAdd, notification = 3 } = props;

    const [notifications,setNotifications] = useState([]);

    const [showInput, setShowInput] = useState(false);

    const [userCrickCoins, setUserCrickCoins] = useState(1000);

    const [todayNotificationsCount, setTodayNotificationsCount] = useState(0);

    const navigate = useNavigate();

    const handleOnChange = () => {

    }

    const handleSearchIconClick = () => {
        navigate('/search');
    }

    const handleLogout = () => {
        const accessToken = localStorage.getItem('access-token');
        const refreshToken = localStorage.getItem('refresh-token');
        var logOutOptions = {
            method: 'post',
            url: global.config.ROOTURL.prod + '/api/v0/logout/',
            headers: {
                'Authorization': 'Bearer ' + accessToken,
            },
            data: {'refresh_token': refreshToken}
        };
        axios(logOutOptions)
            .then(response => {
                localStorage.removeItem('access-token');
                localStorage.removeItem('refresh-token');
                navigate('/login');

            })
            .catch(error => {
                console.log(error);
            })
    }
    useEffect(()=>{
        const accessToken = localStorage.getItem('access-token');
        const userprofile = localStorage.getItem('profile-id');
        var notificationsOptions = {
            method: 'get',
            url: global.config.ROOTURL.prod + '/api/v0/get-notifications/' + userprofile + '/',
            headers: {
                'Authorization': 'Bearer ' + accessToken,
            },
        };
        setUserCrickCoins(localStorage.getItem('profile-crickcoins'));
        axios(notificationsOptions)
            .then(response => {
                const nfs = response.data;
                nfs.forEach(function(n){
                    if (n.label === 'Today'){
                        localStorage.setItem('todayNotificationCount', n.items.length);
                        setTodayNotificationsCount(n.items.length);
                    }
                })
                setNotifications( nfs );
            })
            .catch(error => {
                console.log(error);
            })

    },[]);

    
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
                <NavLink to='/news' className={isActive => `nav-link ${isActive?'active':''}`}>
                    News
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
                    {(() => {
                          if (todayNotificationsCount != 0){
                              return (
                                  <span className='not-present'></span>
                              )
                          }
                          
                          return null;
                    })()}
                    
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
                    <Tooltip
                        direction='bottom'
                        className='header-options'
                    >
                        <div className='caret'></div>
                        <div className='options'>
                            <ul>
                                <li onClick={handleLogout}>Sign Out</li>
                            </ul>
                        </div>
                    </Tooltip>
                </p>
            </div>
            }
            <HeaderMenu />
        </div>
    </header>
}

export default Header;