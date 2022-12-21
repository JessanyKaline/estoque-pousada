import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={categoria}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Categoria" />}
    />
  );
}


const categoria = [
  { label: 'Snacks'},
  { label: 'Bebidas'},
 
];