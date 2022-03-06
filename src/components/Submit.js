import React, { useState, useEffect } from 'react'
import { Button, Form } from 'semantic-ui-react'

const Submit = ({ pacientes, setPacientes }) => {
    const initialValues = {
        nome: "",
        dataDeNascimento: "",
        cpf: "",
        sexo: null,
        endereco: ""
    }
    const { nome, dataDeNascimento, cpf, sexo, endereco } = initialValues
    const [state, setState] = useState(initialValues);
    const [editPaciente, setEditPaciente] = useState(null);

    const updatePaciente = (nome, dataDeNascimento, cpf, sexo, endereco, id, status) => {
        const newPaciente = pacientes.map((paciente) =>
            paciente.id === id ? {
                nome,
                dataDeNascimento,
                cpf,
                sexo,
                endereco,
                id,
                status
            } : paciente
        );
        setPacientes(newPaciente);
        setEditPaciente("");
    }
    useEffect(() => {
        if (editPaciente) {
            setState(editPaciente.state.nome);
        } else {
            setState(initialValues);
        }
    }, [setState, editPaciente]);
    const onFormSubmit = (event) => {
        event.preventDefault();
        if (!state.nome.trim() || state.sexo !== undefined) {
            setPacientes([...pacientes, {
                id: Date.now(),
                nome: state.nome.trim(),
                dataDeNascimento: state.dataDeNascimento,
                cpf: state.cpf,
                sexo: state.sexo,
                endereco: state.endereco.trim(),
                status: false
            }]);
            setState(initialValues);
            alert(`Submitting Name ${state.name} ${state.dataDeNascimento} ${state.cpf} ${state.sexo} ${state.endereco}`)
        } else {
            updatePaciente(state.nome, state.dataDeNascimento, state.cpf, state.sexo, state.endereco, state.editPaciente.id, state.editPaciente.status);
        }
    }
    const handleFieldChange = (event) => {
        const { name, value } = event.target;
        setState({
            ...state,
            [name]: value
        });
    }
    // useEffect(() => {
    //     setDisable(todos.some(item => item.nome === input) || (!input.trim()))
    // }, [todos, input]);
    return (
        <Form onSubmit={onFormSubmit} className='attached fluid segment'>
            <Form.Field>
                <label htmlFor='nome'>Nome</label>
                <input onChange={handleFieldChange} value={state.nome} name='nome' type='text' id='nome' placeholder="Insira seu nome" size={35} maxLength='60' required />
                {state.nome}
            </Form.Field>
            <Form.Field>
                <label htmlFor='dataDeNascimento'>Data de Nascimento</label>
                <input onChange={handleFieldChange} value={state.dataDeNascimento} name='dataDeNascimento' type='text' id='dataDeNascimento' placeholder="Formato: dd/mm/aaaa" pattern='(0[1-9]|[12][0-9]|3[01])[/](0[1-9]|1[012])[/](19|20)\d\d' required />
                {state.dataDeNascimento}
            </Form.Field>
            <Form.Field>
                <label htmlFor='cpf'>CPF</label>
                <input onChange={handleFieldChange} value={state.cpf} name='cpf' type='text' id='cpf' placeholder="Formato: xxx.xxx.xxx-xx" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" required />
                {state.cpf}
            </Form.Field>
            <Form.Field>
                <label htmlFor='sexo'>Gênero</label>
                <select onChange={handleFieldChange} value={state.sexo} id='sexo' name='sexo' required>
                    <option disabled>Escolha uma opção...</option>
                    <option value="Femenino">Feminino</option>
                    <option value="Masculino">Masculino</option>
                    <option value="NaoBinario">Não-binário</option>
                    <option value="Outros">Outros</option>
                    <option value="NaoInformar">Prefiro não informar</option>
                </select>
                {state.sexo}
            </Form.Field>
            <Form.Field>
                <label htmlFor='endereco'>Endereço</label>
                <input onChange={handleFieldChange} value={state.endereco} name='endereco' type='text' id='endereco' placeholder='Insira seu endereço' size={35} />
                {state.endereco}
                <Button type='submit' primary>Enviar</Button>
                <Button type='reset' secondary>Limpar</Button>
            </Form.Field>
        </Form>
    )
}

export default Submit


//         <div>
//             <div class="ui blue inverted three item menu">
//                 <a class="item">Registration  Form</a>
//             </div>
//             <Grid centered columns={2}>
//                 <Grid.Column>
//                     <Segment>
//                         <Form size="large">
//                             <Form.Input
//                                 fluid
//                                 icon="user"
//                                 iconPosition="left"
//                                 placeholder="User Name"
//                             />
//                             <Form.Input
//                                 fluid
//                                 icon="user"
//                                 iconPosition="left"
//                                 placeholder="Email address"
//                             />
//                             <Form.Input
//                                 fluid
//                                 icon="lock"
//                                 iconPosition="left"
//                                 placeholder="Password"
//                                 type="password"
//                             />
//                             <Form.Input
//                                 fluid
//                                 icon="home"
//                                 iconPosition="left"
//                                 placeholder="Address"
//                             />
//                             <Button color="blue" fluid size="large">
//                                 Register
//                             </Button>
//                         </Form>
//                     </Segment>
//                     <Message>
//                         <a href="#">Login</a>
//                     </Message>
//                 </Grid.Column>
//             </Grid>
//         </div>
//     );

// }

