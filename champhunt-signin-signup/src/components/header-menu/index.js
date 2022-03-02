import { NavLink } from 'react-router-dom';

import './index.scss';

const HeaderMenu = () => {
    return <div className="header-menu">
          
    <nav>
      <div className="navbar">
        <div className="container nav-container">
            <input className="checkbox" type="checkbox" name="" id="" />
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>
            <div className="menu-items">
                    <li>
                        <NavLink to='/pitch' className={isActive => `nav-link ${isActive?'active':''}`}>
                                    Pitch
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/news' className={isActive => `nav-link ${isActive?'active':''}`}>
                                News
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/deals' className={isActive => `nav-link ${isActive?'active':''}`}>
                                Deals
                        </NavLink>
                    </li>
                    {/* <li>
                        <NavLink to='/support' className={isActive => `nav-link ${isActive?'active':''}`}>
                                I Support
                        </NavLink>
                    </li> */}
                    <li>
                        <NavLink to='/about-us' className={isActive => `nav-link ${isActive?'active':''}`}>
                                    About Us
                        </NavLink>
                    </li>
            </div>
        </div>
      </div>
    </nav>
    </div>
}

export default HeaderMenu;