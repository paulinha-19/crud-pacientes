import React, { useState, useEffect } from 'react'
import { Form } from 'semantic-ui-react'
import { Button } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import '../css/Cadastrar.css'
import Box from '@mui/material/Box';

const Cadastrar = ({ pacientes, setPacientes }) => {
    const [pacienteInfo, setPacienteInfo] = useState({
        nome: "",
        dataDeNascimento: "",
        cpf: "",
        sexo: "",
        endereco: "",
    });
    const [disable, setDisable] = useState(false);
    const [checkCpf, setCheckCpf] = useState({
        errorMessageCpf: "",
    });
    const handleFieldChange = (event) => {
        const { name, value } = event.target;
        setPacienteInfo({
            ...pacienteInfo,
            [name]: value
        });
    }
    const onFormSubmit = (event) => {
        event.preventDefault();
        if (!pacienteInfo) return;
        setPacientes([...pacientes, {
            id: Date.now(),
            nome: pacienteInfo.nome,
            dataDeNascimento: pacienteInfo.dataDeNascimento,
            cpf: pacienteInfo.cpf,
            sexo: pacienteInfo.sexo,
            endereco: pacienteInfo.endereco.trim(),
            status: true
        }]);
        setPacienteInfo({ nome: '', dataDeNascimento: '', cpf: '', sexo: '', endereco: '' });
    };
    //Desabilita botao enviar se existir cpf duplicado
    useEffect(() => {
        setDisable(pacientes.some(item => item.cpf === pacienteInfo.cpf))
        const ifExistCpf = () => {
            const filterCpf = pacientes.some(item => item.cpf === pacienteInfo.cpf);
            if (filterCpf === true) {
                setCheckCpf({
                    errorMessageCpf: "Esse CPF já existe",
                });
            } else {
                setCheckCpf({
                    errorMessageCpf: '',
                });
            }
        }
        ifExistCpf();
    }, [pacientes, pacienteInfo]);
    return (
        <Container maxWidth="sm" style={{ display: "flex", flexDirection: 'column', alignItems: 'center' }}>
            <>
                <h1>Cadastrar paciente</h1>
            </>
            <Form onSubmit={onFormSubmit} className='attached fluid segment'>
                <Form.Field>
                    <label htmlFor='nome'>Nome</label>
                    <input onChange={handleFieldChange} value={pacienteInfo.nome} name='nome' type='text' id='nome' placeholder="Insira seu nome" maxLength='60' pattern="[a-zA-Z][a-zA-Z\s]*" title='Não é permite espaço em branco' required />
                </Form.Field>
                <Form.Field>
                    <label htmlFor='dataDeNascimento'>Data de Nascimento</label>
                    <input onChange={handleFieldChange} value={pacienteInfo.dataDeNascimento} name='dataDeNascimento' type='text' id='dataDeNascimento' placeholder="Formato: dd/mm/aaaa" pattern='(0[1-9]|[12][0-9]|3[01])[/](0[1-9]|1[012])[/](19|20)\d\d' title='Não é permite espaço em branco ou ano menor que 1900' required />
                </Form.Field>
                <Form.Field>
                    <label htmlFor='cpf'>CPF</label>
                    <input onChange={handleFieldChange} value={pacienteInfo.cpf} name='cpf' type='text' id='cpf' placeholder="Formato: xxx.xxx.xxx-xx" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" required />
                    <small>{checkCpf.errorMessageCpf}</small>
                </Form.Field>
                <Form.Field>
                    <label htmlFor='sexo'>Gênero</label>
                    <select onChange={handleFieldChange} value={pacienteInfo.sexo} id='sexo' name='sexo' required>
                        <option value='' disabled>Escolha uma opção...</option>
                        <option value="Femenino">Feminino</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Não Binario">Não-binário</option>
                        <option value="Outros">Outros</option>
                        <option value="Não Informado">Prefiro não informar</option>
                    </select>
                </Form.Field>
                <Form.Field>
                    <label className="label" htmlFor='endereco'>Endereço</label>
                    <input onChange={handleFieldChange} value={pacienteInfo.endereco} name='endereco' type='text' id='endereco' placeholder='Insira seu endereço'/>
                </Form.Field>
                <Box style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Button type='submit' size="small" variant="contained" color="primary" disabled={disable}>Enviar</Button>
                    <Button type='reset' size="small" variant="outlined">Limpar</Button>
                </Box>
            </Form>
        </Container>

    )
}
export default Cadastrar