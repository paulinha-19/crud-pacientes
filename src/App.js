import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home/Home';
import ListarPacientesHome from './components/pages/ListarPacientes/ListarPacientes';
import Sobre from './components/pages/Sobre/Sobre';
import Cadastrar from './components/pages/Cadastrar/Cadastrar'
import React, { useState, useEffect } from 'react'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  const storage = JSON.parse(localStorage.getItem("pacientes")); // pega a string JSON e converte para objeto JavaScript
  const [pacientes, setPacientes] = useState(storage);
  // const [pacienteEdit, setPacienteEdit] = useState(false); // para editar paciente
  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));//converting to string JSON

}, [pacientes]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}>
        </Route>
        <Route exact path="/cadastrar" element={<Cadastrar pacientes={pacientes} setPacientes={setPacientes} />}>
        </Route>
        <Route exact path="/listar" element={<ListarPacientesHome pacientes={pacientes} setPacientes={setPacientes}/>}>
        </Route>
        <Route exact path="/sobre" element={<Sobre />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
