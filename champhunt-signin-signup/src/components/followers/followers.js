import Avatar from "../../assets/images/header/avatar.png";
import { Button } from "@mui/material";

import "./index.scss";

const Followers = (props) => {
  const { runs, followers, name, role } = props;

  return (
    <div className="followers">
      <div className="follower">
        <div style={{ display: "flex" }}>
          <div className="left-block">
            <div className="profile-info">
              <img src={Avatar} alt={name} className="avatar" />
              <p className="name primary">
                {name}
                <span className="role">{role}</span>
              </p>
            </div>
          </div>
          <div className="right-block">
            <div className="stats-block">
              <div className="stat followers-value">
                <div className="number ">{followers}</div>
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
