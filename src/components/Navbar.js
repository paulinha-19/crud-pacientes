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
                        <NavLink activeClassName="active" to="/">
                            Home
                        </NavLink>

                        <NavLink activeClassName="active" to="/cadastrar">
                            Cadastrar paciente
                        </NavLink>

                        <NavLink activeClassName="active" to="/listar">
                            Listar paciente
                        </NavLink>
                        <NavLink activeClassName="active" to="/sobre">
                            Sobre
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar