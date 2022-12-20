import React from 'react';
import {StyledDiv} from './Home';
import {linkStyle} from './Home';
import Menu from '../molecules/Menu'; 

export default function Cadastrar() {
  return (
    <div>
      <Menu />  
      <StyledDiv>
      Cadastrar Produtos 
      <input type="text" placeholder='Nome do Produto' />
      <input type="date" />
      <input type="number" />
    
      </StyledDiv>
        
    </div>
  )
}
