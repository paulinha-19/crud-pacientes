import React, { useState, useEffect } from 'react'
import './Cadastrar.css'
import { Form } from 'semantic-ui-react'
import { Button } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

const Cadastrar = ({ pacientes, setPacientes, pacienteEdit, setPacienteEdit }) => {
    const [pacienteInfo, setPacienteInfo] = useState({
        nome: "",
        dataDeNascimento: "",
        cpf: "",
        sexo: "",
        endereco: "",
    });
    const [disable, setDisable] = useState(false);
    const [mensage, setMensage] = useState({
        messageCpf: "",
        mensageSubmit: ''
    });
    const handleFieldChange = (event) => {
        const { name, value } = event.target;
        setPacienteInfo({
            ...pacienteInfo,
            [name]: value
        });
    }
    const submitEdits = (nome, dataDeNascimento, cpf, sexo, endereco, id, status) => {
        const updatePaciente = pacientes.map((paciente) =>
            paciente.id === id ? {
                nome,
                dataDeNascimento,
                cpf,
                sexo,
                endereco,
                id,
                status
            } :
                paciente
        );
        setPacientes(updatePaciente);
        setPacienteEdit("");
    }
    let navigate = useNavigate();
    const onFormSubmit = (event) => {
        event.preventDefault();
        if (pacienteInfo) {
            setPacientes([...pacientes, {
                id: Date.now(),
                nome: pacienteInfo.nome.trim(),
                dataDeNascimento: pacienteInfo.dataDeNascimento,
                cpf: pacienteInfo.cpf,
                sexo: pacienteInfo.sexo,
                endereco: pacienteInfo.endereco.trim(),
                status: true
            }]);
            setPacienteInfo({ nome: '', dataDeNascimento: '', cpf: '', sexo: '', endereco: '' });
            setTimeout(() => navigate("/listar"), 1000);
        } else {
            submitEdits(pacienteInfo.nome, pacienteInfo.dataDeNascimento, pacienteInfo.cpf, pacienteInfo.sexo, pacienteInfo.endereco, pacienteEdit.id, pacienteEdit.status);
        }
    };
    //Desabilita botao enviar se existir cpf duplicado
    useEffect(() => {
        setDisable(pacientes.some(item => item.cpf === pacienteInfo.cpf))
        const ifExistCpf = () => {
            const filterCpf = pacientes.some(item => item.cpf === pacienteInfo.cpf);
            if (filterCpf === true) {
                setMensage({
                    messageCpf: "Esse CPF j?? existe",
                });
            } else {
                setMensage({
                    messageCpf: '',
                });
            }
        }
        ifExistCpf();
    }, [pacientes, pacienteInfo]);
    return (
        <Container maxWidth="sm" style={{ display: "flex", flexDirection: 'column', alignItems: 'center', paddingTop: '4rem' }}>
            {/* <Box>
                <h1>Cadastrar paciente</h1>
            </Box> */}
            <Form onSubmit={onFormSubmit} className='attached fluid segment'>
                <Form.Field>
                    <label htmlFor='nome'>Nome</label>
                    <input onChange={handleFieldChange} value={pacienteInfo.nome} name='nome' type='text' id='nome' placeholder="Insira seu nome" maxLength='60' pattern="[a-zA-Z][a-zA-Z\s]*" title='N??o ?? permite espa??o em branco' required />
                </Form.Field>
                <Form.Field>
                    <label className="margin-top" htmlFor='dataDeNascimento'>Data de Nascimento</label>
                    <input onChange={handleFieldChange} value={pacienteInfo.dataDeNascimento} name='dataDeNascimento' type='text' id='dataDeNascimento' placeholder="Formato: dd/mm/aaaa" pattern='(0[1-9]|[12][0-9]|3[01])[/](0[1-9]|1[012])[/](19|20)\d\d' title='?? permitido ano entre 1900 e 2099' required />
                </Form.Field>
                <Form.Field>
                    <label className="margin-top" htmlFor='cpf'>CPF</label>
                    <input onChange={handleFieldChange} value={pacienteInfo.cpf} name='cpf' type='text' id='cpf' placeholder="Formato: xxx.xxx.xxx-xx" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" required />
                    <small>{mensage.messageCpf}</small>
                </Form.Field>
                <Form.Field>
                    <label className="margin-top" htmlFor='sexo'>G??nero</label>
                    <select onChange={handleFieldChange} value={pacienteInfo.sexo} id='sexo' name='sexo' required>
                        <option value='' disabled>Escolha uma op????o...</option>
                        <option value="Femenino">Feminino</option>
                        <option value="Masculino">Masculino</option>
                        <option value="N??o Binario">N??o-bin??rio</option>
                        <option value="Outros">Outros</option>
                        <option value="N??o Informado">Prefiro n??o informar</option>
                    </select>
                </Form.Field>
                <Form.Field>
                    <label className="label" htmlFor='endereco'>Endere??o</label>
                    <input onChange={handleFieldChange} value={pacienteInfo.endereco} name='endereco' type='text' id='endereco' placeholder='Insira seu endere??o' />
                </Form.Field>
                <Box className="margin-top" style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Button type='submit' size="small" variant="contained" color="primary" disabled={disable}>Enviar</Button>
                    <Button type='reset' size="small" variant="outlined">Limpar</Button>
                </Box>
            </Form>
        </Container>

    )
}
export default Cadastrar