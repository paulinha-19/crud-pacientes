import React, { useState } from 'react'
import styled from 'styled-components'
import Cadastrar from './Cadastrar'

const Button = styled.button`
border: none;
cursor: pointer;
background-color: transparent;
`
const ListarPacientes = ({ pacientes, setPacientes }) => {

  const removePaciente = (idToDelete) => {
    const newTasks = [...pacientes];
    newTasks.splice(idToDelete, 1);
    setPacientes(newTasks);
  };
  const updatePaciente = () => {
  }
  return (
    <div>
      <h1>Listar Pacientes</h1>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Data de nascimento</th>
            <th>CPF</th>
            <th>Gênero</th>
            <th>Endereço</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {pacientes.length > 0 ? (
            pacientes.map((paciente, index) => (
              <tr key={paciente.id}>
                <td>{paciente.nome}</td>
                <td>{paciente.dataDeNascimento}</td>
                <td>{paciente.cpf}</td>
                <td>{paciente.sexo}</td>
                <td>{paciente.endereco}</td>
                <td>{paciente.status}</td>
                <td>
                  <Button className="button muted-button" onClick={() => removePaciente(index)}>
                    <i style={{ color: "red" }} className="fa-solid fa-trash fa-xl"></i>
                  </Button>
                  <Button className="button muted-button">
                    <i style={{ color: "orange" }} className="fa-solid fa-pen-to-square fa-xl"></i>
                  </Button>
                  {/* {condition === true ? <Cadastrar /> : <ListarPacientes />} */}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>Sem pacientes</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default ListarPacientes