import Avatar from "../../assets/images/header/avatar.png";
import { Button } from "@mui/material";

import "./index.scss";

const Followers = (props) => {
  const runs = 300;
  const followers = 55;
  const name = "Vishnu Aggarwal";
  const role = "Bowler";

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
        <div className="btn-block">
          <Button
            type="submit"
            variant="outlined"
            className="btn follow"
            sx={{ borderRadius: 2, width: "45%", height: "35px", m: "2.5%" }}
          >
            Follow
          </Button>
          <Button
            type="submit"
            variant="contained"
            className="btn message"
            sx={{ borderRadius: 2, width: "45%", height: "35px", m: "2.5%" }}
          >
            Message
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Followers;
