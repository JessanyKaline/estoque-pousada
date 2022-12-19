import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import logo from '../pages/style/img/logovila.png'




export default function TemporaryDrawer() {
  const [state, setState] = React.useState({ 
    left: false
    
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        
          <ListItem >
            <img src={logo} alt="logo Pousada Vila Galea"/>
          </ListItem>

          <ListItem >
            <Button variant="contained" sx={{ marginBottom:3, marginTop:5, width:500}}> Relatórios</Button>
          </ListItem>

          <ListItem>
            <Button variant="contained"  sx={{ marginBottom:3, marginTop:3, width:500}}> Cadastrar</Button>
          </ListItem>

          <ListItem>
            <Button variant="contained" sx={{ marginBottom:3, marginTop:3, width:500}}> Saídas</Button>
          </ListItem>
        
        <ListItem>
            <Button  sx={{  width:100}}> Sair</Button>
          </ListItem>

      </ List>
      
    </Box>
  );

  return (
    <div >
      {['MENU'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button variant="contained" size="large" disableElevation onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}