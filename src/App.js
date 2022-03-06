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
  const [pacientes, setPacientes] = useState([]);

  //Salvando no localStorage
  useEffect(() => {
    const storageSet = JSON.stringify(pacientes);
    localStorage.setItem("pacientes", storageSet);
  }, [pacientes]);

  //Carregando do localStorage
  useEffect(() => {
    const storageGet = localStorage.getItem("pacientes");
    const savedPacientes = JSON.parse(storageGet);
    if (savedPacientes) {
      setPacientes(savedPacientes);
    }
  }, []);
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
