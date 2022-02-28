import profileAvatar from "../../assets/images/header/Ellipse_73@2x.png";
import editIcon from "../../assets/images/profile/edit_icon.svg";
import Followers from "../followers/followers";
import CityDowndown from "../city-dropdown/cityDowndown";
import StateDropDown from "../state-dropdown/stateDropDown";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import {
    TextField,
    Input,
    Typography,
    Button,
    Fade,
    Modal,
    Box,
    Backdrop,
    Grid,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./index.scss";
import UploadBtn from "../upload-button/uploadBtn";
import validator from "validator";

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

const ProfileCard = (props) => {
    const [open, setOpen] = useState(false);
    const [profileName, setProfileName] = useState("");
    const [profileRole, setProfileRole] = useState("");
    const [profileAbout, setProfileAbout] = useState("");
    const [profileInitialData, setProfileInitialData] = useState({
        'first_name': '',
        'last_name': '',
        'address': '',
        'address2': '',
        'zip_code': '',
        'state': '',
        'about_me': '',

    });

    const [state, setState] = useState("");
    const [followers, setFollowers] = useState([]);
    const [followings, setFollowings] = useState([]);

    const navigate = useNavigate();
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const accessToken = localStorage.getItem("access-token");
    const params = useParams();
    var profileID = null;
    var canEditProfile = true;
    if (params['profile_id']) {
        profileID = params['profile_id'];
        canEditProfile = false;
    } else {
        profileID = localStorage.getItem("profile-id");
    }
    const saveProfile = (event) => {
        event.preventDefault();

        const profileData = {
            'first_name': event.target.first_name.value,
            'last_name': event.target.last_name.value,
            'address': event.target.address.value,
            'address2': event.target.address2.value,
            'zip_code': event.target.zip_code.value,
            'state': event.target.state.value,
            'about_me': event.target.about_me.value,
            'user': localStorage.getItem('user_id')
        };

        var saveProfileOptions = {
            method: "put",
            url: global.config.ROOTURL.prod + "/api/v0/user-profile/" + profileID + "/",
            data: JSON.stringify(profileData),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + accessToken,
            },
            json: true,
        };
        axios(saveProfileOptions)
            .then((response) => { handleClose(); })
            .catch((error) => {});
    };
    useEffect(() => {

        const getProfileDetailsOptions = {
            method: "get",
            url: global.config.ROOTURL.prod + "/api/v0/users/" + profileID + "/",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + accessToken,
            },
            json: true,
        };

        axios(getProfileDetailsOptions)
            .then((response) => {
                setProfileName(response.data['first_name'] + ' ' + response.data['last_name'])
                setProfileAbout(response.data['about_me'])
                setProfileInitialData(response.data);
            })
            .catch((error) => {
                if (error.status == 401) {
                    navigate("/login");
                }
            });
        const getFollowersOptions = {
            method: "get",
            url: global.config.ROOTURL.prod +
                "/api/v0/get-followers/?profile_id=" +
                profileID,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + accessToken,
            },
            json: true,
        };
        axios(getFollowersOptions)
            .then((response) => {
                setFollowers(response.data);
            })
            .catch((error) => {
                if (error.status == 401) {
                    navigate("/login");
                }
            });

        const getFollowingOptions = {
            method: "get",
            url: global.config.ROOTURL.prod +
                "/api/v0/get-following/?profile_id=" +
                profileID,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + accessToken,
            },
            json: true,
        };

        axios(getFollowingOptions)
            .then((response) => {
                setFollowings(response.data);
            })
            .catch((error) => {
                if (error.status == 401) {
                    navigate("/login");
                }
            });
    }, [profileID]);

    return (
        <div className="profile">
      <div className="profile-card-block">
        <div className="profile-info">
          <div
            className="wrapper"
            style={{ backgroundImage: `url(${profileAvatar})` }}
          >
            {canEditProfile &&
              <button
                className="btn edit-btn"
                onClick={() => {
                  handleOpen();
                }}
              >
                <img src={editIcon}></img>
              </button>
            }
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
                  <form onSubmit={saveProfile}>
                  <Typography
                      id="transition-modal-title"
                      variant="h6"
                      // component="h2"
                      sx={{ borderBottom: 1, py: 1 }}
                    >
                      Edit Profile
                    </Typography>
                    
                    <Typography sx={{ mt: 2, fontWeight: 500 }}>
                      First Name
                    </Typography>
                    <Input
                      type="dropdown"
                      sx={{ width: "100%" }}
                      defaultValue={profileInitialData.first_name}
                      id="first_name"
                    />
                    <Typography sx={{ mt: 2, fontWeight: 500 }}>
                      Last Name
                    </Typography>
                    <Input
                      type="dropdown"
                      sx={{ width: "100%" }}
                      defaultValue={profileInitialData.last_name}
                      id="last_name"
                    />
                    <Typography sx={{ mt: 2, fontWeight: 500 }}>
                      Address Line 1
                    </Typography>
                    <Input
                      type="dropdown"
                      sx={{ width: "100%" }}
                      defaultValue={profileInitialData.address}
                      id="address"
                    />
                    <Typography sx={{ mt: 2, fontWeight: 500 }}>
                      Address Line 2
                    </Typography>
                    <Input
                      type="dropdown"
                      sx={{ width: "100%" }}
                      defaultValue={profileInitialData.address2}
                      id="address2"
                    />
                    <Typography sx={{ mt: 2, fontWeight: 500 }}>
                      Zip Code
                    </Typography>
                    <Input
                      type="dropdown"
                      sx={{ width: "100%" }}
                      defaultValue={profileInitialData.zip_code}
                      id="zip_code"
                    />
                    <Typography sx={{ mt: 2, fontWeight: 500 }}>
                      State
                    </Typography>
                    <StateDropDown />
                    <Typography sx={{ mt: 2 }}>
                      Add a photo to better connect with people
                    </Typography>
                    <div style={{ display: "flex", paddingTop: "15px" }}>
                      <UploadBtn />
                      <Button
                        variant="outlined"
                        sx={{
                          borderRadius: 10,
                          my: 4,
                          ml: "auto",
                          width: "150px",
                        }}
                      >
                        Upload
                      </Button>
                    </div>
                    <Typography sx={{ mt: 2, fontWeight: 500 }}>
                      About me
                    </Typography>
                    <Box textAlign="center">
                      <TextField
                        multiline
                        rows={3}
                        id="about_me"
                        variant="outlined"
                        defaultValue={profileInitialData.about_me}
                        sx={{ width: "100%", py: 2 }}
                      />{" "}
                      <Button
                        variant="contained"
                        type="submit"
                        sx={{
                          borderRadius: 50,
                          width: "200px",
                        }}
                      >
                        Save Profile Data
                      </Button>
                    </Box>
                  </form>
                </Box>
              </Fade>
            </Modal>
          </div>
        </div>
        <div>
          <div>
            <p className="name primary">
              <span className="user-name">{profileName}</span>
              <br />
              <span className="role">{profileRole}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="about-me primary">
        <p className="title">About Me</p>
        <p>{profileAbout}</p>
      </div>
      <div className="tabs">
        <Tabs>
          <TabList>
            <Tab>Followers</Tab>
            <Tab>Following</Tab>
          </TabList>
          <TabPanel>
            <Grid container spacing={2}>
              {followers.map((follower, index) => (
                <Followers key={index} {...follower} />
              ))}
            </Grid>
          </TabPanel>
          <TabPanel>
            <Grid container spacing={2}>
              {followings.map((following, index) => (
                <Followers key={index} {...following} />
              ))}
            </Grid>
          </TabPanel>
        </Tabs>
      </div>
    </div>
    );
};

export default ProfileCard;