import ChampButton from '../../commons/form/button';

import Lines from '../../assets/images/posts/lines.svg';
import CreatePost from '../../assets/images/posts/createpost.svg';
import FriendsPost from '../../assets/images/posts/friends.svg';
import ProfilePost from '../../assets/images/posts/postprofile.svg';

import './index.scss';

const Footer = () => {
    return <footer className="footer">
        <div className='footer-cnt'>
            <div className='footer-nav-cnt'>
                <ChampButton
                    label='Pitch'
                    classes='ft-btn'
                    icon={Lines}
                />
            </div>
            <div className='icon-cnt'>
                <img src={CreatePost} className='icon-img' alt='' />
                <span className='icon-text'>
                    POST
                </span>
            </div>

            <div className='icon-cnt'>
                <img src={ProfilePost} className='icon-img' alt='' />
                <span className='icon-text'>
                    PROFILE
                </span>
            </div>
           
            <div className='icon-cnt'>
                <img src={FriendsPost} className='icon-img' alt='' />
                <span className='icon-text'>
                    FRIENDS
                </span>
            </div>

        </div>
    </footer>
}

export default Footer;