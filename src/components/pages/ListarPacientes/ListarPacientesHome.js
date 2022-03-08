import React, { useState } from 'react'
import styled from 'styled-components'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import TotalPacientes from '../ListarPacientes/TotalPacientes';
import Alert from '@mui/material/Alert';
import { Container } from 'semantic-ui-react';
import { style } from '@mui/system';

const Table = styled.table`
border-collapse: collapse;
td, th {
  border: 1px solid #bbb;
  text-align: center;
  padding: 1rem;
}
tr:nth-child(even) {
  background-color: #eee;
}
tr.status-paciente{
  text-decoration: line-through solid  #d60e0e;
  opacity: 0.5;
}
`
const Button = styled.button`
border: none;
cursor: pointer;
background-color: transparent;
`

const ListarPacientes = ({ pacientes, setPacientes }) => {
  const [searchInput, setSearchInput] = useState()

  const FilteredPatientsByName =
    !searchInput ? pacientes : pacientes.filter(paciente => paciente.nome.toLowerCase().includes(searchInput.toLowerCase()))

  const handleSearch = (event) => {
    setSearchInput(event.target.value);
  };
  const removePaciente = (idToDelete) => {
    const newPatient = [...pacientes];
    newPatient.splice(idToDelete, 1);
    setPacientes(newPatient);
  };

  const handleDisablePatientClick = (paciente) => {
    setPacientes(
      pacientes.map((item) =>
        item.id === paciente.id ? { ...item, status: !item.status } : item
      )
    );
  }
  return (
    <Container>
      <div style={{ display: "flex", alignItems: "center", flexDirection: 'column' }}>
        <h1>Listar Pacientes</h1>
        <Box style={{ marginBottom: '2rem' }}>
          <TextField value={searchInput} label="Pesquisar paciente" variant="outlined" onChange={handleSearch} name='search' type='text' id='search' />
        </Box>
        <Table style={{ border: '1' }}>
          <thead>
            <tr style={{ padding: '0 1rem' }}>
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
              FilteredPatientsByName.map((paciente, index) => (
                <tr key={paciente.id} className={`${paciente.status ? "" : "status-paciente"}`}>
                  <td>{paciente.nome}</td>
                  <td>{paciente.dataDeNascimento}</td>
                  <td>{paciente.cpf}</td>
                  <td>{paciente.sexo}</td>
                  <td>{paciente.endereco}</td>
                  <td><Button onClick={() => handleDisablePatientClick(paciente)} style={{ backgroundColor: '#16ab14', padding: '5px', fontWeight: '600' }}>{paciente.status === true ? 'Ativo' : 'Inativo'}</Button></td>
                  <td>
                    <Box style={{ display: "flex", justifyContent: "space-between" }}>
                      <Button
                        className="button muted-button"
                        onClick={() => removePaciente(index)}
                      >
                        <i
                          style={{ color: 'red' }}
                          className="fa-solid fa-trash fa-xl"
                        />
                      </Button>
                      <Button className="button muted-button">
                        <i
                          style={{ color: 'orange' }}
                          className="fa-solid fa-pen-to-square fa-xl"
                        />
                      </Button>
                    </Box>
                  </td>
                </tr>
              ))
            ) : (
              console.log("Sem dado")
            )}
          </tbody>
        </Table>
        <Alert style={{ marginTop: '2rem' }} severity="info">Nenhum usuário para <strong>listar ou filtrar</strong></Alert>
        <TotalPacientes
          listarTotalPaciente={pacientes.length}
          listarStatus={pacientes.filter((paciente) => paciente.status).length}>
        </TotalPacientes>
      </div>
    </Container>
  )
}

export default ListarPacientes