import { BrowserRouter, Routes, Route } from "react-router-dom";


import Login from "./pages/Login";
import Menu from "./molecules/Menu";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Menu />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
