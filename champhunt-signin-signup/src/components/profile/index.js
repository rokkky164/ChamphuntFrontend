import Button from "../../commons/form/button";
import Avatar from '../../assets/images/header/avatar.png';
import profileAvatar from '../../assets/images/header/Ellipse_73@2x.png';

const ProfileCard = () => {

    const handleOnClick = () => {

    }

    return <div className="profile-card-block">
        <div className="profile-info">
            <img src={profileAvatar} className="avatar" />
            <p className="name primary">
                <span className="role">
                </span>
            </p>
        </div>
    </div>
}

export default ProfileCard;