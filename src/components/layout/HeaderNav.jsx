import { NavLink } from "react-router-dom"

export const HeaderNav = () => {
    return (
        <header>
            <div className="logo">
                <h3>José Luis Domingo</h3>
            </div>
            <nav className="nav">
                <ul>
                    <li>
                        <NavLink to="Home" className="nav">Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to="Portfolio" className="nav">Portafolio</NavLink>
                    </li>
                    <li>
                        <NavLink to="Services" className="nav">Servicios</NavLink>
                    </li>
                    <li>
                        <NavLink to="Curriculum" className="nav">Curriculum</NavLink>
                    </li>
                    <li>
                        <NavLink to="Contact" className="nav">Contacto</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
