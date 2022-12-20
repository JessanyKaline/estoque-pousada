import React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Menu from '../molecules/Menu';
import {Link} from 'react-router-dom';


export const StyledDiv = styled.div`
display: flex;
justify-content: center;
height: 70vh;
padding: 4rem;

@media screen and (min-width: 281px) and (max-width: 440px){
    flex-direction:column;
    margin: 0 em;

`

export const linkStyle = {
    textDecoration: "none",
    };


export default function Home() {
  return (
    <div>
    <Menu/>
    <StyledDiv>
    <List>
        
          <ListItem >
           <Link style={linkStyle}> <Button variant="contained" sx={{ marginBottom:3, marginTop:5, width:300}}> Relatórios</Button></Link>
          </ListItem>

          <ListItem>
          <Link style={linkStyle}><Button variant="contained"  sx={{ marginBottom:3, marginTop:3, width:300}}> Cadastrar</Button></Link>
          </ListItem>

          <ListItem>
          <Link style={linkStyle}><Button variant="contained" sx={{ marginBottom:3, marginTop:3, width:300}}> Saídas</Button></Link>
          </ListItem>
        
      </ List>
      
   
    </StyledDiv>
    </div>
  )
}
