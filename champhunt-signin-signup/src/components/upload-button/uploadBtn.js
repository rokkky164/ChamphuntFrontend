import React, { useState } from "react";
import editAvatar from "../../assets/images/onboarding/avatar.svg";
import { Button } from "@mui/material";

const UploadBtn = () => {
  const [profilePic, setProfilePic] = useState(undefined);

  const handleChange = () => {
    if (document.getElementById("upload-button").value != "") {
      console.log(
        "you have a file",
        document.getElementById("upload-button").value
      );
      console.log(document.getElementById("upload-button").files[0]);

      const image = document.getElementById("upload-button").files[0];
      setProfilePic(image); // sets profilPic to {image}
      console.log(URL.createObjectURL(image));
    }
  };

  const handleClick = () => {
    console.log("Upload click.")
  }

  return (
    <div style={{ display: "flex", paddingTop: "15px" }}>
      <div>
        <label htmlFor="upload-button">
          <span>
            {/* <img src={profilePic ? profilePic : editAvatar} style={{maxHeight:"88", maxWidth:"88", borderRadius:"50"}}></img> */}
            <img src={editAvatar}></img>
          </span>
        </label>
        <input
          accept="image/*"
          type="file"
          id="upload-button"
          style={{ display: "none" }}
          onChange={handleChange}
        />
      </div>

      <Button
        variant="outlined"
        sx={{
          borderRadius: 10,
          my: 4,
          ml: "auto",
          width: "150px",
        }}
        onClick={() => {handleClick()}}
      >
        Upload
      </Button>
    </div>
  );
};

export default UploadBtn;
