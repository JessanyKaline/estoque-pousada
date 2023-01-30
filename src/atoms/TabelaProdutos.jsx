import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

function createData(Nome, Categoria, Quantidade) {
  return { Nome, Categoria, Quantidade};
}

const produtos = [
  createData('Heineken', 'Bebidas', 50),
  createData('Rufles', 'Snacks', 15),
  createData('Doritos', 'Snacks', 25),
];

export default function BasicTable() {
  return (
    <TableContainer  component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >Produtos</TableCell>
            <TableCell align="right">Categoria</TableCell>
            <TableCell align="right">Quantidade</TableCell>
            <TableCell align="right">Ação</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {produtos.map((produto) => (
            <TableRow
              key={produto.Nome}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="produto">
                {produto.Nome}
              </TableCell>
              <TableCell align="right">{produto.Categoria}</TableCell>
              <TableCell align="right">{produto.Quantidade}</TableCell>
              <TableCell align="right">
              <DeleteOutlinedIcon />
              <AddCircleOutlineOutlinedIcon/>
              <EditOutlinedIcon/>
              </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
