import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import RadioBtn from "../radio-button/radioBtn";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: 5,
};

export default function Report(props) {
  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{}}
          >
            Report Answer
          </Typography>

          <RadioBtn>
            <FormControlLabel
              value="Harassment"
              control={<Radio />}
              label="Harassment"
            />
            <p>
              Disparaging or adversarial towards a person or group (Learn more)
            </p>
            <FormControlLabel value="Spam" control={<Radio />} label="Spam" />
            <p>text</p>
            <FormControlLabel
              value="Doesn't answer the question"
              control={<Radio />}
              label="Doesn't answer the question"
            />
            <p>text</p>
            <FormControlLabel
              value="Plagiarism"
              control={<Radio />}
              label="Plagiarism"
            />
            <p>text</p>
            <FormControlLabel
              value="Joke answer"
              control={<Radio />}
              label="Joke answer"
            />
            <p>text</p>
            <FormControlLabel
              value="Poorly Written"
              control={<Radio />}
              label="Poorly Written"
            />
            <p>text</p>
          </RadioBtn>
          <Button>Cancel</Button>
          <Button>Submit</Button>
        </Box>
      </Modal>
    </div>
  );
}
