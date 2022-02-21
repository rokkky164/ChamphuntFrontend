import "./index.scss";
import Batsmen from "../../assets/images/onboarding/batsmen-selected.svg";
import Umpire from "../../assets/images/onboarding/umpire-selected.svg";
import Keeper from "../../assets/images/onboarding/keeper-selected.svg";
import Bowler from "../../assets/images/onboarding/bowler-selected.svg";
import Grid from "@mui/material/Grid";

const Preferences = () => {
  return (
    <div className="component preferences">
      <div className="preferences-heading">
        <p>My Preferences</p>
      </div>
      <div className="btn-block-preferences">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} lg={6}>
            <button className="btn-preferences" onClick={() => {}}>
              <img
                src={Batsmen}
                className="responsive"
                width="167"
                height="auto"
              ></img>
              <div className="preference-option">
                <p class="responsive">#Batsmen</p>
              </div>
            </button>{" "}
          </Grid>
          <Grid item xs={12} sm={12} lg={6} lg={6}>
            <button className="btn-preferences" onClick={() => {}}>
              <img
                src={Keeper}
                className="responsive"
                width="167"
                height="auto"
              ></img>
              <div className="preference-option">
                <p class="responsive">#Keeper</p>
              </div>
            </button>
          </Grid>
          <Grid item xs={12} sm={12} lg={6}>
            <button className="btn-preferences" onClick={() => {}}>
              <img
                src={Bowler}
                className="responsive"
                width="167"
                height="auto"
              ></img>
              <div className="preference-option">
                <p class="responsive">#Bowler</p>
              </div>
            </button>
          </Grid>
          <Grid item xs={12} sm={12} lg={6}>
            <button className="btn-preferences" onClick={() => {}}>
              <img
                src={Umpire}
                className="responsive"
                width="167"
                height="auto"
              ></img>
              <div className="preference-option">
                <p class="responsive">#Umpire</p>
              </div>
            </button>{" "}
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Preferences;
