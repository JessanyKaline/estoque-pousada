import { BrowserRouter, Routes, Route } from "react-router-dom";


import Login from "./pages/Login";
import Home from './pages/Home';
import Cadastrar from './pages/Cadastrar';
import Saida from './pages/Saida';
import Relatorios from "./pages/Relatorios";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cadastrar" element={<Cadastrar />} />
        <Route path="/saida" element={<Saida />} />
        <Route path="/relatorios" element={<Relatorios />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
