import { Button } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/styles";
import { styled } from "@mui/system";
import "./index.scss";


const Activities = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#131639",
        contrastText: "#FFFFFF",
      },
    },
  });

  const StyledButton = styled(Button)(({ theme, color = "primary" }) => ({
    color: "white",
    outline: "white",
  }));

  return (
    <ThemeProvider theme={theme}>
      <div className="component activities">
        <div className="activities-heading">
          <p>Activities</p>
        </div>
        <div className="btn-block">
          <Button
            type="submit"
            variant="outlined"
            className="btn new-post"
            sx={{ borderRadius: 28, width: "45%", height: "35px", m: "2.5%" }}
          >
            New Post
          </Button>
          <Button
            type="submit"
            variant="contained"
            className="btn my-pitch"
            sx={{ borderRadius: 28, width: "45%", height: "35px", m: "2.5%" }}
          >
            My Pitch
          </Button>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Activities;
