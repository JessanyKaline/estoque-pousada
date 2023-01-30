import React from "react";
import Menu from "../molecules/Menu";
import styled from "styled-components";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Autocomplete from "@mui/material/Autocomplete";

import ContentPasteSearchOutlinedIcon from '@mui/icons-material/ContentPasteSearchOutlined';

const StyleDivInput = styled.div`
  display: flex;
  justify-content: center;
  widht: 80%;
  padding-left: 8rem;

  @media screen and (min-width: 281px) and (max-width: 440px) {
    flex-direction: column;
    margin: 0rem;
    padding: 0rem;
    width: 50%;
  }
`;

export default function Cadastrar() {
  return (
    <div>
      <Menu />

      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 2, width: "18ch" },
          marginTop: 8,
          bgColor: "black",
        }}
        noValidate
        autoComplete="off"
      >
        <Typography variant="h4" align="center" gutterBottom>
          Relatórios
        </Typography>
        <StyleDivInput>
          <TextField required id="categoria" label="Produto" />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={categoria}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Categoria" />
            )}
          />
          <ContentPasteSearchOutlinedIcon sx={{ fontSize: 40 }} />
        </StyleDivInput>
      </Box>
    </div>
  );
}
const categoria = [
    { label: 'Snacks'},
    { label: 'Bebidas'},
   
  ];

