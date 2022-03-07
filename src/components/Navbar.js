import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// adicionar o link no menu usar o componente <NavLink />
const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <nav>
            <div>
                <div className={`navbar-menu ${isOpen && "is-active"}`}>
                    <div className="nav-link" style={{ display: "flex", justifyContent: "space-evenly", alignItems:'center', flexWrap: 'wrap', height: '3rem' }}>
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