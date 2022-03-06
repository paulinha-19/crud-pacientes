import './App.css';
import Header from './components/Header';
import Submit from './components/Submit'
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import ListarPacientes from './components/pages/ListarPacientes';
import Sobre from './components/pages/Sobre';
import Cadastrar from './components/pages/Cadastrar'
import React, { useState, useEffect } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  const storage = JSON.parse(localStorage.getItem("pacientes")); // Ler item:
  const [pacientes, setPacientes] = useState(storage);
  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes)); // Criar item:
}, [pacientes]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}>
        </Route>
        <Route exact path="/cadastrar" element={<Cadastrar pacientes={pacientes} setPacientes={setPacientes} />}>
        </Route>
        <Route exact path="/listar" element={<ListarPacientes />}>
        </Route>
        <Route exact path="/sobre" element={<Sobre />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
