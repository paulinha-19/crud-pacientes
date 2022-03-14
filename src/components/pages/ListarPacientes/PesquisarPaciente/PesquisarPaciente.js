import React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const PesquisarPaciente = ({searchInput, setSearchInput}) => {
    const handleSearch = (event) => {
        setSearchInput(event.target.value);
    };
    return (
        <Box style={{ marginBottom: '2rem' }}>
            <TextField value={searchInput} label="Pesquisar paciente" variant="outlined" onChange={handleSearch} name='search' type='text' id='search' />
        </Box>
    );
}

export default PesquisarPaciente