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


export default function DropdownMenu(props) {
    const post_id = props;
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = (post_id) => {
        if (parseInt(localStorage.getItem('profile-id')) === '') {
            
        }
        const profileID = localStorage.getItem('profile-id');
        setOwnPost(true);
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

    const handleEdit = (event) => {
        handleClose(event);
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

    return (
        <div>
      <div>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? "composition-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={() => handleToggle(post_id)}
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
                        <MenuItem onClick={handleEdit} open={"false"}>
                          Edit
                        </MenuItem>
                        }
                        { ownPost &&
                          <MenuItem onClick={handleDelete}>Delete</MenuItem>
                        }
                        <MenuItem onClick={handleReport}>Report</MenuItem>
                      </>
                    )}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
      <PitchEdit handleOpen={handleOpenPitchEditModal} handleClose={handleClosePitchEditModal} open={openPitchEditModal} />
      <PitchDelete handleOpen={handleOpenPitchDeleteModal} handleClose={handleOpenPitchDeleteModal} open={openPitchDeleteModal} />
      <Report handleOpen={handleOpenModal} handleClose={handleCloseModal} open={openModal} />
    </div>
    );
}