import React, { useState } from "react";
import editAvatar from "../../assets/images/onboarding/avatar.svg";

const UploadBtn = () => {
  const handleChange = () => {};


  return (
    <div>
      <label htmlFor="upload-button">
        <span>
          <img src={editAvatar}></img>
        </span>
      </label>
      <input
        type="file"
        id="upload-button"
        style={{ display: "none" }}
        onChange={handleChange}
      />
      <br />
    </div>
  );
};

export default UploadBtn;
