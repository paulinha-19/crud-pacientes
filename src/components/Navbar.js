import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import '../assets/css/Navbar.css'
const Navbar = () => {
    const [isOpen, setOpen] = useState(false); // para o controle do mobile
    return (
        <nav className="nav-link">
            <div>
                <div className={`navbar-menu ${isOpen && "is-active"}`}>
                    <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: 'center', flexWrap: 'wrap', height: '3rem' }}>
                        <NavLink activeClassName="is-active" to="/">
                            Home
                        </NavLink>

                        <NavLink to="/cadastrar">
                            Cadastrar paciente
                        </NavLink>

                        <NavLink to="/listar">
                            Listar paciente
                        </NavLink>
                        <NavLink to="/sobre">
                            Sobre
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar