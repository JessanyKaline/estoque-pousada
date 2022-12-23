import { BrowserRouter, Routes, Route } from "react-router-dom";


import Login from "./pages/Login";
import Home from './pages/Home';
import Cadastrar from './pages/Cadastrar';
import Table from "../src/atoms/TabelaProdutos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cadastrar" element={<Cadastrar />} />
        <Route path="/teste" element={<Table />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
