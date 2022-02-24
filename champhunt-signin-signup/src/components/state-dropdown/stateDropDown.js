import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const stateOptions = [
    {'value': 'Andhra Pradesh'},
    {'value': 'Arunachal Pradesh'},
    {'value': 'Assam'},
    {'value': 'Bihar'},
    {'value': 'Chhattisgarh'},
    {'value': 'Goa'},
    {'value': 'Gujarat'},
    {'value': 'Haryana'},
    {'value': 'Himachal Pradesh'},
    {'value': 'Jammu & Kashmir'},
    {'value': 'Karnataka'},
    {'value': 'Kerala'},
    {'value': 'Madhya Pradesh'},
    {'value': 'Maharashtra'},
    {'value': 'Manipur'},
    {'value': 'Meghalaya'},
    {'value': 'Mizoram'},
    {'value': 'Nagaland'},
    {'value': 'Delhi'},
    {'value': 'Odisha'},
    {'value': 'Puducherry'},
    {'value': 'Punjab'},
    {'value': 'Rajasthan'},
    {'value': 'Sikkim'},
    {'value': 'Tamil Nadu'},
    {'value': 'Telangana'},
    {'value': 'Tripura'},
    {'value': 'Uttar Pradesh'},
    {'value': 'Uttarakhand'},
    {'value': 'West Bengal'}
];

const StateDropDown = () => {
  const [state, setState] = React.useState("");

  const handleChange = (event) => {
    setState(event.target.value);
  };

  return (
      <TextField
        select
        defaultValue={state}
        value={state}
        onChange={handleChange}
        helperText="Please select your state"
        variant="standard"
        sx={{ width: "100%" }}
        name="state"
      >
        {stateOptions.map((state) => (
          <MenuItem key={state.value} value={state.value}>
            {state.value}
          </MenuItem>
        ))}
      </TextField>
  );
};

export default StateDropDown;
