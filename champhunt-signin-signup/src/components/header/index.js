
import { NavLink } from 'react-router-dom';

import Logo from '../../assets/images/header/logo.png';
import Bell from '../../assets/images/header/bell.svg';
import Avatar from '../../assets/images/header/avatar.png';

import Input from '../../commons/form/input';

import './index.scss';
import HeaderMenu from '../header-menu';

const Header = ( props ) => {

    const handleOnChange = () => {

    }

    const { onlyLogo } = props;

    const userProfileName = '';
    return <header className="header">
        <div className='header-cnt'>
            <div className="logo-block">
                <img src={Logo} alt='Champhunt' />
                <span className='logo-text'>
                    CHAMPHUNT
                </span>
            </div>
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
            <div className="desktop-only search-block">
                <Input
                    placeholder="Search"
                    name="search"
                    classes="search"
                    onChange={handleOnChange}
                />
                <div className='bell-icon'>
                    <img src={Bell} alt='' />
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