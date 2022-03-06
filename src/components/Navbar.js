import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// adicionar o link no menu usar o componente <NavLink />
const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <nav 
            className="navbar is-primary"
            role="navigation"
            aria-label="main navigation"
        >
            <div className="container">
                <div className="navbar-brand">
                    <a
                        role="button"
                        className={`navbar-burger burger ${isOpen && "is-active"}`}
                        aria-label="menu"
                        aria-expanded="false"
                        onClick={() => setOpen(!isOpen)}
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div className={`navbar-menu ${isOpen && "is-active"}`}>
                    <div className="navbar-start" style={{ display:"flex", justifyContent:"space-evenly", flexWrap:'wrap'}}>
                        <NavLink className="navbar-item" activeClassName="is-active" to="/">
                            Home
                        </NavLink>

                        <NavLink
                            className="navbar-item"
                            activeClassName="is-active"
                            to="/cadastrar"
                        >
                            Cadastrar paciente
                        </NavLink>

                        <NavLink
                            className="navbar-item"
                            activeClassName="is-active"
                            to="/listar"
                        >
                            Listar paciente
                        </NavLink>
                        <NavLink
                            className="navbar-item"
                            activeClassName="is-active"
                            to="/sobre"
                        >
                            Sobre
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar