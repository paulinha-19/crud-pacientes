import React, { useState } from 'react'
import styled from 'styled-components'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';


const Table = styled.table`
border-collapse: collapse;
td, th {
  border: 1px solid #bbb;
  text-align: center;
  padding: 8px;
}
tr:nth-child(even) {
  background-color: #eee;
}
`
const Button = styled.button`
border: none;
cursor: pointer;
background-color: transparent;
`
const Info = styled.div`
background-color: #E5F6FD;
padding: 1.5rem;
margin-top:2rem;
`
const ListarPacientes = ({ pacientes, setPacientes }) => {
  const [searchInput, setSearchInput] = useState()

  const getFilteredPatients = () => {
    if (!searchInput) return pacientes
    return pacientes.filter(
      paciente => paciente.nome.toLowerCase() === searchInput.toLowerCase()
    )
  }
  const handleSearch = (event) => {
    setSearchInput(event.target.value);
  };
  const removePaciente = (idToDelete) => {
    const newPatient = [...pacientes];
    newPatient.splice(idToDelete, 1);
    setPacientes(newPatient);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", flexDirection: 'column' }}>
      <h1>Listar Pacientes</h1>
      <Box style={{ marginBottom: '2rem' }}>
        <TextField label="Pesquisar" variant="outlined" onChange={handleSearch} name='search' type='text' id='search' />
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
              getFilteredPatients().map((paciente, index) => (
                <tr key={paciente.id}>
                  <td>{paciente.nome}</td>
                  <td>{paciente.dataDeNascimento}</td>
                  <td>{paciente.cpf}</td>
                  <td>{paciente.sexo}</td>
                  <td>{paciente.endereco}</td>
                  <td>{paciente.status}</td>
                  <td>
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
                  </td>
                </tr>
              ))
          ) : (
            <Info>
              <p>Nenhum usuário para <strong>listar ou filtrar</strong></p>
            </Info>
          )}
        </tbody>
      </Table>
    </div>
  )
}

export default ListarPacientes