import React from 'react';
import Menu from '../molecules/Menu'; 
import styled from 'styled-components';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ListaCategoria from '../atoms/ListaCategoria';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import {linkStyle} from './Home';

const StyleDivInput = styled.div`

display: flex;
justify-content: space-evenly;
widht: 80%;
margin: 4rem;
border: 2px solid black;

@media screen and (min-width: 281px) and (max-width: 440px){
  flex-direction:column;
  margin: 0rem;
  width: 50%;
  
}
`;


export default function Cadastrar() {
  return (
    <div >
      <Menu /> 
      <h1>Cadastrar Produto</h1> 
      
      
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '20ch' },
      }}
      noValidate
      autoComplete="off"
    >
     <StyleDivInput>
        <TextField
          required
          id="categoria"
          label="Produto"
        />
          <TextField
          id="quantidade"
          label="Quantidade"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <ListaCategoria/>
        
        
        
        </StyleDivInput>
        
        </Box >
        <Link style={linkStyle}><Button variant="contained"  sx={{ marginBottom:0, marginTop:0, width:250}}> Cadastrar</Button></Link>
       
      
    
     
        
    </div>
  )
}
