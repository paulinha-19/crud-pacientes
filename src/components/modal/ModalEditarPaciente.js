import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styled from "styled-components";
import Cadastrar from '../pages/Cadastrar/Cadastrar'

const NewBox = styled(Box)(({ theme }) => ({
    width: "50%",
    margin: "auto"
}));
const style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    position: "relative"
};

const buttonClose = {
    position: "absolute",
    right: "0",
    top: "0",
    padding: '1rem 1rem 0 0'
};

const ModalFormulario = ({ pacientes, setPacientes }) => {
    const [open, setOpen] = useState({
        show: false
    });
    const handleOpen = () => {
        setOpen({
            show: true
        });
    };
    const handleClose = () => {
        setOpen({
            show: false
        });
    };
    return (
        <div>
            <Button onClick={handleOpen}
                className="button muted-button"
            >
                <i
                    style={{ color: 'orange' }}
                    className="fa-solid fa-pen-to-square fa-xl"
                />
            </Button>
            <Modal
                open={open.show}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <NewBox sx={style}>
                    <Box sx={buttonClose}>
                        <button
                            style={{
                                border: "none",
                                cursor: "pointer",
                                backgroundColor: "transparent"
                            }}
                            onClick={handleClose}
                        >
                            X
                        </button>
                    </Box>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Editar paciente
                    </Typography>
                    <Cadastrar pacientes={pacientes} setPacientes={setPacientes} />
                </NewBox>
            </Modal>
        </div>
    );
}

export default ModalFormulario