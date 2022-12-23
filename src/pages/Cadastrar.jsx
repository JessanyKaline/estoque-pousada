import React from "react";
import Menu from "../molecules/Menu";
import styled from "styled-components";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ListaCategoria from "../atoms/ListaCategoria";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { linkStyle } from "./Home";
import Typography from "@mui/material/Typography";
import TabelaProdutos from "../atoms/TabelaProdutos";

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

const StyleDivButton = styled.div`
display: flex;
justify-content:center;
widht: 80%;
margin: 1rem;
padding-bottom: 2rem;
border-bottom: 2px solid #d3d3d3;


@media screen and (min-width: 281px) and (max-width: 440px){
  flex-direction:column;
  margin: 0rem;
  padding: 0rem;
  width: 50%;

`;
const StyleDivLista = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 3rem;
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
          Cadastrar Produtos
        </Typography>
        <StyleDivInput>
          <TextField required id="categoria" label="Produto" />
          <TextField
            id="quantidade"
            label="Quantidade"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <ListaCategoria />
        </StyleDivInput>

        <StyleDivButton>
          <Link style={linkStyle}>
            <Button variant="contained" sx={{ width: 250 }}>
              {" "}
              Cadastrar
            </Button>
          </Link>
        </StyleDivButton>
      </Box>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 0, width: "15ch" },
          marginTop: 5,
        }}
        noValidate
        autoComplete="off"
      >
        <Typography variant="h5" align="center" gutterBottom>
          Lista de Produtos
        </Typography>
        <StyleDivLista>
          <ListaCategoria />

          <Link style={linkStyle}>
            <Button variant="outlined" sx={{ width: 150 }}>
              {" "}
              Pesquisar
            </Button>
          </Link>
        </StyleDivLista>
        <TabelaProdutos/>
      </Box>
      
    </div>
  );
}
