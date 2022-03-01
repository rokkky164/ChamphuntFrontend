import * as React from "react";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PitchEdit from "../pitch-edit-modal/index";
import PitchDelete from "../pitch-delete-modal/index";
import Report from "../report-modal/index";

import axios from "axios";

export default function DropdownMenu(props) {
    const {type, post_id, userprofile} = props;
    const [open, setOpen] = React.useState(false);
    const [content, setContent] = React.useState('');
    const [image, setImage] = React.useState('');

    const anchorRef = React.useRef(null);
    const [ownPost, setOwnPost] = React.useState(false);
    const [openModal, setOpenModal] = React.useState(false);
    const [openPitchEditModal, setOpenPitchEditModal] = React.useState(false);
    const [openPitchDeleteModal, setOpenPitchDeleteModal] = React.useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);
    const handleOpenPitchEditModal = () => setOpenModal(true);
    const handleClosePitchEditModal = () => setOpenPitchEditModal(false);
    const handleOpenPitchDeleteModal = () => setOpenModal(true);
    const handleClosePitchDeleteModal = () => setOpenPitchDeleteModal(false);

    const handleToggle = (userprofile) => {
        setOwnPost(parseInt(localStorage.getItem('profile-id')) === userprofile);
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === "Tab") {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === "Escape") {
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    const callPitchDetailsAPI = (post_id) => {
        const accessToken = localStorage.getItem("access-token");
        var getPostDetailsOptions = {
            method: "get",
            url: global.config.ROOTURL.prod + "/api/v0/pitches/" + post_id ,
            headers: {
                Authorization: "Bearer " + accessToken,
            },
        };

        axios(getPostDetailsOptions)
            .then((response) => {
                setContent(response.data.message);
                setImage(response.data.image);
            })
            .catch((error) => {
            });

    }

    const handleUpdatePost = (post_id, content) => {
        const accessToken = localStorage.getItem("access-token");
        var updatePostDetailsOptions = {
            method: "put",
            url: global.config.ROOTURL.prod + "/api/v0/submit-pitch/" + post_id + '/',
            headers: {
                Authorization: "Bearer " + accessToken,
                'content-type': 'multipart/form-data; boundary=----WebKitFormBoundaryjNQUpOmsBhVXIEE7',
                'Accept': 'application/json'
            },
            data: {
              'message': content
            },
            json: true
        };

        axios(updatePostDetailsOptions)
            .then((response) => {setOpen(false);})
            .catch((error) => {});

    }

    const handleDeletePost = (post_id) => {
        const accessToken = localStorage.getItem("access-token");
        var deletePostOptions = {
            method: "put",
            url: global.config.ROOTURL.prod + "/api/v0/submit-pitch/" + post_id + '/',
            headers: {
                Authorization: "Bearer " + accessToken,
                'content-type': 'multipart/form-data; boundary=----WebKitFormBoundaryjNQUpOmsBhVXIEE7',
                'Accept': 'application/json'
            },
            data: {
              'can_be_shown': false
            },
            json: true
        };

        axios(deletePostOptions)
            .then((response) => {setOpen(false);})
            .catch((error) => {});

    }

    const handleReportPost = (post_id, report_type) => {
        const accessToken = localStorage.getItem("access-token");
        const profileID = localStorage.getItem("profile-id");
        var reportOptions = {
            method: "post",
            url: global.config.ROOTURL.prod + "/api/v0/report-pitch/" + post_id + '/',
            headers: {
                Authorization: "Bearer " + accessToken,
                'content-type': 'application/json',
                'Accept': 'application/json'
            },
            data: {
                "report_message": report_type,
                "pitch": post_id,
                "userprofile": profileID
            },
            json: true
        };

        axios(reportOptions)
            .then((response) => {setOpen(false);})
            .catch((error) => {});
    }
    const handleEdit = (post_id) => {
        callPitchDetailsAPI(post_id);
        setOpenPitchEditModal(true);
    };

    const handleDelete = (event) => {
        handleClose(event);
        setOpenPitchDeleteModal(true);
    };

    const handleReport = (event) => {
        handleClose(event);
        setOpenModal(true);

    };


    return (
        <div>
      <div>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? "composition-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={() => handleToggle(userprofile)}
          disableRipple="true"
        >
          <MoreVertIcon style={{ color: "black" }} />
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom-start" ? "left top" : "left bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    {props.type === "post-menu" && (
                      <>
                        { ownPost &&
                        <MenuItem onClick={() => handleEdit(post_id)} open={"false"}>
                          Edit
                        </MenuItem>
                        }
                        { ownPost &&
                          <MenuItem onClick={handleDelete}>Delete</MenuItem>
                        }
                        { !ownPost &&
                        <MenuItem onClick={handleReport}>Report</MenuItem>
                        }
                      </>
                    )}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
      <PitchEdit
          handleOpen={handleOpenPitchEditModal}
          handleClose={handleClosePitchEditModal}
          handleUpdatePost={handleUpdatePost}
          open={openPitchEditModal} 
          content={content}
          image={image}
          post_id={post_id}
          />
      <PitchDelete handleOpen={handleOpenPitchDeleteModal}
            handleClose={handleOpenPitchDeleteModal}
            open={openPitchDeleteModal}
            handleDeletePost={handleDeletePost}
            post_id={post_id}
            />
      <Report handleOpen={handleOpenModal}
            handleClose={handleCloseModal}
            open={openModal}
            handleReportPost={handleReportPost}
            post_id={post_id}
             />
    </div>
    );
}