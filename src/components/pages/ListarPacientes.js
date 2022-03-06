import React from 'react'

const ListarPacientes = () => {
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
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name data</td>
            <td>Username data</td>
            <td>
              <button className="button muted-button">Editar</button>
              <button className="button muted-button">Deletar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ListarPacientes