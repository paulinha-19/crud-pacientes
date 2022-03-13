import React from 'react'
import styled from 'styled-components'
import Alert from '@mui/material/Alert';

const ListarTotalPaciente = styled.div`
    padding-top: 1rem;
    font-weight: bold;
    p.padding-bottom{
        padding-bottom: 0.5rem;
    }
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
        <div>
            {listarTotalPaciente > 0 ? (
                <ListarTotalPaciente>
                    <p className='padding-bottom'>
                        Total: {listarTotalPaciente} {listarTotalPaciente <= 1 ? "paciente" : "pacientes"}
                    </p>
                    <p className='padding-bottom'>
                        Ativo: {listarStatus}
                    </p>
                    <p>
                        Inativo: {listarTotalPaciente - listarStatus} {listarTotalPaciente - listarStatus <= 1 ? "paciente" : "pacientes"}
                    </p>
                </ListarTotalPaciente>
            ) : (
                <Alert style={{ marginTop: '2rem' }} severity="info">Nenhum usuário para <strong>listar ou filtrar</strong></Alert>
            )}
        </div>
    )
}

export default TotalPacientes