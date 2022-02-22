import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import * as React from "react";

const CityDowndown = () => {
  const [city, setCity] = React.useState("");

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <Select value={city} onChange={handleChange}>
        <MenuItem value={"Assam"}>Assam</MenuItem>
        <MenuItem value={"Delhi"}>Delhi</MenuItem>
        <MenuItem value={"Mumbai"}>Mumbai</MenuItem>
      </Select>
    </FormControl>
  );
};

export default CityDowndown;
