import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const cities = [
  {
    value: "Assam",
  },
  {
    value: "Delhi",
  },
  {
    value: "Mumbai",
  },
];

const CityDowndown = () => {
  const [city, setCity] = React.useState("");
  const handleChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { width: "100%" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="standard-select-city"
        select
        value={city}
        onChange={handleChange}
        helperText="Please select your city"
        variant="standard"
      >
        {cities.map((city) => (
          <MenuItem key={city.value} value={city.value}>
            {city.value}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
};

export default CityDowndown;
