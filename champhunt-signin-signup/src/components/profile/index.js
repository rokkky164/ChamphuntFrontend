import * as React from "react";
import "./index.scss";

import profileAvatar from "../../assets/images/header/Ellipse_73@2x.png";
import editIcon from "../../assets/images/profile/edit_icon.svg";
import Followers from "../followers/followers";
import Grid from "@mui/material/Grid";
import CityDowndown from "../city-dropdown/cityDowndown";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Input } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#FFFFFF",
  border: "2px solid #000",
  borderRadius: "20px",
  boxShadow: 24,
  py: 1,
  px: 4,
};

const ProfileCard = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="profile">
      <div className="profile-card-block">
        <div className="profile-info">
          <div
            className="wrapper"
            style={{ backgroundImage: `url(${profileAvatar})` }}
          >
            <button
              className="btn edit-btn"
              onClick={() => {
                handleOpen();
              }}
            >
              <img src={editIcon}></img>
            </button>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <Box sx={style}>
                  <Typography
                    id="transition-modal-title"
                    variant="h6"
                    // component="h2"
                    sx={{ borderBottom: 1 }}
                  >
                    Edit Profile
                  </Typography>
                  <Typography sx={{ mt: 2 }}>My friends call me</Typography>
                  <Input type="dropdown" />
                  <Typography sx={{ mt: 2 }}>I am from</Typography>
                  <CityDowndown />
                  <Typography sx={{ mt: 2 }}>
                    Add a photo to better connect with people
                  </Typography>
                  <div style={{ display: "flex" }}>
                    <div>img</div>
                    <Button
                      variant="outlined"
                      sx={{ borderRadius: 50, px: 4, ml: "auto" }}
                    >
                      Upload
                    </Button>
                  </div>
                  <Typography sx={{ mt: 2 }}>About me</Typography>
                </Box>
              </Fade>
            </Modal>
          </div>
        </div>
        <div>
          <div>
            <p className="name primary">
              <span className="user-name">{`Vishnu Aggarwal`}</span>
              <br />
              <span className="role">{`Trade profile 1`}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="about-me primary">
        <p className="title">About Me</p>
        <p>
          About me some statements which people will find interesting to read
          and explore, may be achievements
        </p>
      </div>
      <div className="tabs">
        <Tabs>
          <TabList>
            <Tab>Followers</Tab>
            <Tab>Following</Tab>
          </TabList>
          <TabPanel>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} lg={6}>
                <Followers />
              </Grid>
              <Grid item xs={12} sm={12} lg={6}>
                <Followers />
              </Grid>
              <Grid item xs={12} sm={12} lg={6}>
                <Followers />
              </Grid>
              <Grid item xs={12} sm={12} lg={6}>
                <Followers />
              </Grid>
              <Grid item xs={12} sm={12} lg={6}>
                <Followers />
              </Grid>
            </Grid>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ProfileCard;
