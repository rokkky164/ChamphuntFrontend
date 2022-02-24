import Avatar from "../../assets/images/header/avatar.png";
import { Button } from "@mui/material";

import "./index.scss";

const Followers = (props) => {
  const { runs, followers_count, name,
      player_profile , first_name, last_name,
      profile_pic
    } = props;
  return (
    <div className="followers">
      <div className="follower">
        <div style={{ display: "flex" }}>
          <div className="left-block">
            <div className="profile-info">
              <img src={profile_pic} alt={name} className="avatar" />
              <p className="name primary">
                {first_name} {last_name}
                <span className="role">{player_profile}</span>
              </p>
            </div>
          </div>
          <div className="right-block">
            <div className="stats-block">
              <div className="stat followers-value">
                <div className="number ">{followers_count}</div>
                <p className="label primary">Followers</p>
              </div>
              <div className="stat runs">
                <div className="number">{runs}</div>
                <p className="label primary">Runs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Followers;
