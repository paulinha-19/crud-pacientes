import React from 'react'
import styled from 'styled-components'

const ListarTotalPaciente = styled.div`
    display: flex;
    justify-content: center;
    padding: 1rem;
    font-weight: bold;
    @media (min-width: 426px) and (max-width: 550px){
        p{
            font-size: 0.8rem;
            font-weight: 500;
        }
    }
    @media (min-width: 320px) and (max-width: 426px){
        p{
            font-size: 0.6rem;
            font-weight: 500;
        }
    }
`
const TotalPacientes = ({ listarTotalPaciente, listarStatus }) => {
    return (
        <ListarTotalPaciente>
            <p className='total-paciente'>
                Total: {listarTotalPaciente} {listarTotalPaciente <= 1 ? "paciente" : "pacientes"}
            </p>
            <p>
                Ativo: {listarStatus}
            </p>
            <p>
                Inativo: {listarTotalPaciente - listarStatus} {listarTotalPaciente - listarStatus <= 1 ? "paciente" : "Pacientes"}
            </p>
        </ListarTotalPaciente>
    )
}

export default TotalPacientes