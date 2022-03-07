import React, { useState, useEffect } from 'react'
import { Form } from 'semantic-ui-react'
import { Button } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import '../css/Cadastrar.css'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

const Cadastrar = ({ pacientes, setPacientes, classes }) => {
    const [pacienteInfo, setPacienteInfo] = useState({
        nome: "",
        dataDeNascimento: "",
        cpf: "",
        sexo: "",
        endereco: ""
    });
    //função para cuidar da atualização dos campos de entrada
    const handleFieldChange = (event) => {
        const { name, value } = event.target;
        setPacienteInfo({
            ...pacienteInfo, //os dados anteriores não são perdidos enquanto atualizamos o estado de entrada.
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
    return (
        <Container maxWidth="sm" style={{ display: "flex", flexDirection: 'column', alignItems: 'center' }}>
            <>
                <h1>Cadastrar paciente</h1>
            </>
            <Box component="form" sx={{
                '& > :not(style)': { m: 2, width: '25ch' },
            }} onSubmit={onFormSubmit} className='attached fluid segment' >
                <Form.Field>
                    <TextField inputProps={{ inputMode: 'text', pattern:"[^' ']+"}}
                        label="Nome" variant="outlined" onChange={handleFieldChange} value={pacienteInfo.nome} name='nome' type='text' id='nome' title='Não é permite espaço em branco' required />
                    {pacienteInfo.nome}
                </Form.Field>
                <Form.Field>
                    <TextField helperText="Formato xx/xx/xxxx" label="Data de nascimento" variant="outlined" onChange={handleFieldChange} value={pacienteInfo.dataDeNascimento} name='dataDeNascimento' type='text' id='dataDeNascimento' title='Não é permite espaço em branco ou ano menor que 1900' required />
                    {pacienteInfo.dataDeNascimento}
                </Form.Field>
                <Form.Field>
                    <TextField helperText="Formato xxx.xxx.xxx-xx" label="CPF" variant="outlined" onChange={handleFieldChange} value={pacienteInfo.cpf} name='cpf' type='text' id='cpf' pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" required />
                </Form.Field>
                <Form.Field>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="label-sexo">Gênero</InputLabel>
                            <Select
                                labelId="sexo"
                                id="sexo"
                                value={pacienteInfo.sexo}
                                label="sexo"
                                onChange={handleFieldChange}
                                name='sexo'
                                required
                            >
                                <MenuItem value='feminino'>Feminino</MenuItem>
                                <MenuItem value='masculino'>Masculino</MenuItem>
                                <MenuItem value='naoBinario'>Não-binário</MenuItem>
                                <MenuItem value='naoInformar'>Prefiro não informar</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Form.Field>
                <Form.Field>
                    <TextField label="Endereço" variant="outlined" onChange={handleFieldChange} value={pacienteInfo.endereco} name='endereco' type='text' id='endereco' />
                </Form.Field>
                <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button type='submit' size="small" variant="contained" color="primary">Enviar</Button>
                    <Button type='reset' size="small" variant="outlined">Limpar</Button>
                </Box>
            </Box>
        </Container>

    )
}

export default Cadastrar