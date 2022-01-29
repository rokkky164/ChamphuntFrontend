import Button from "../../commons/form/button";

import './index.scss';

const Suggestion = (props) => {

    const handleFollow = () => {

    }

    const { avatar, runs, followers, name, role } = props;

    return <div className="suggestion">
        <div className="left-block">
            <div className="profile-info">
                <img src={avatar} alt={name} className="avatar" />
                <p className="name primary">
                    { name }
                    <span className="role">
                        { role }
                    </span>
                </p>
            </div>
            <div className="button-block">
                <Button
                    label = 'Follow'
                    classes = 'follow'
                    onClick = { handleFollow }
                />
            </div>
        </div>
        <div className="right-block">
            <div className="stats-block">
                <div className="stat">
                    <div className="number followers">
                        {followers}
                    </div>
                    <p className="label primary">Followers</p>
                </div>
                <div className="stat">
                    <div className="number runs">
                        {runs}
                    </div>
                    <p className="label primary">Runs</p>
                </div>
            </div>
            <div className="button-block">
            <Button
                    label = 'Message'
                    classes = 'message'
                    onClick = { handleFollow }
                />
            </div>
        </div>
    </div>
}

export default Suggestion;