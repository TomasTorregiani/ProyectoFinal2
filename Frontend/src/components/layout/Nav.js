import React from "react";
import { NavLink } from "react-router-dom"
import "../../styles/components/layout/Nav.css"

const Nav = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/" className={({isActive}) => isActive ? "activo" : undefined}>Home</NavLink></li>
                <li><NavLink to="/nosotros" className={({isActive}) => isActive ? "activo" : undefined}>Nosotros</NavLink></li>
                <li><NavLink to="/novedades" className={({isActive}) => isActive ? "activo" : undefined}>Novedades</NavLink></li>
                <li><NavLink to="/actividades" className={({isActive}) => isActive ? "activo" : undefined}>Actividades</NavLink></li>
                <li><NavLink to="/productos" className={({isActive}) => isActive ? "activo" : undefined}>Productos</NavLink></li>
                <li><NavLink to="/contacto" className={({isActive}) => isActive ? "activo" : undefined}>Contacto</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav;