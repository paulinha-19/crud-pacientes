import React, { useState, useEffect } from 'react'
import { Button, Form } from 'semantic-ui-react'

const Cadastrar = ({ pacientes, setPacientes }) => {
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
        if(!pacienteInfo) return;
        setPacientes([...pacientes, {
            id: Date.now(),
            nome: pacienteInfo.nome,
            dataDeNascimento: pacienteInfo.dataDeNascimento,
            cpf: pacienteInfo.cpf,
            sexo: pacienteInfo.sexo,
            endereco: pacienteInfo.endereco.trim(),
            status: false
        }]);
        setPacienteInfo({ nome: '', dataDeNascimento: '', cpf: '', sexo: '', endereco: '' });
    };

    const deletePaciente = (idToDelete) => {
        const filteredPaciente = pacientes.filter((paciente) => paciente.id !== idToDelete);
        setPacienteInfo(filteredPaciente);
      };

    return (
        <div>
            <>
                <h1>Cadastrar paciente</h1>
            </>
            <Form onSubmit={onFormSubmit} className='attached fluid segment'>
                <Form.Field>
                    <label htmlFor='nome'>Nome</label>
                    <input onChange={handleFieldChange} value={pacienteInfo.nome} name='nome' type='text' id='nome' placeholder="Insira seu nome" size={35} maxLength='60' required />
                    {pacienteInfo.nome}
                </Form.Field>
                <Form.Field>
                    <label htmlFor='dataDeNascimento'>Data de Nascimento</label>
                    <input onChange={handleFieldChange} value={pacienteInfo.dataDeNascimento} name='dataDeNascimento' type='text' id='dataDeNascimento' placeholder="Formato: dd/mm/aaaa" pattern='(0[1-9]|[12][0-9]|3[01])[/](0[1-9]|1[012])[/](19|20)\d\d' required />
                    {pacienteInfo.dataDeNascimento}
                </Form.Field>
                <Form.Field>
                    <label htmlFor='cpf'>CPF</label>
                    <input onChange={handleFieldChange} value={pacienteInfo.cpf} name='cpf' type='text' id='cpf' placeholder="Formato: xxx.xxx.xxx-xx" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" required />
                </Form.Field>
                <Form.Field>
                    <label htmlFor='sexo'>Gênero</label>
                    <select onChange={handleFieldChange} value={pacienteInfo.sexo} id='sexo' name='sexo' required>
                        <option disabled>Escolha uma opção...</option>
                        <option value="Femenino">Feminino</option>
                        <option value="Masculino">Masculino</option>
                        <option value="NaoBinario">Não-binário</option>
                        <option value="Outros">Outros</option>
                        <option value="NaoInformar">Prefiro não informar</option>
                    </select>
                </Form.Field>
                <Form.Field>
                    <label htmlFor='endereco'>Endereço</label>
                    <input onChange={handleFieldChange} value={pacienteInfo.endereco} name='endereco' type='text' id='endereco' placeholder='Insira seu endereço' size={35} />
                    <Button type='submit' primary>Enviar</Button>
                    <Button type='reset' secondary>Limpar</Button>
                </Form.Field>
            </Form>
        </div>

    )
}

export default Cadastrar