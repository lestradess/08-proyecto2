import { NavLink } from "react-router-dom"

export const HeaderNav = () => {
    return (
        <>
            <header className="header">
                <div className="logo">
                    <span>J</span>
                    <h3>José Luis Domingo</h3>
                </div>
                <nav className="nav">
                    <ul>
                        <li>
                            <NavLink to="Home" className={ ({ isActive }) => isActive ? "active" : "" }>Inicio</NavLink>
                        </li>
                        <li>
                            <NavLink to="Portfolio" className={ ({ isActive }) => isActive ? "active" : "" }>Portafolio</NavLink>
                        </li>
                        <li>
                            <NavLink to="Services" className={ ({ isActive }) => isActive ? "active" : "" }>Servicios</NavLink>
                        </li>
                        <li>
                            <NavLink to="Curriculum" className={ ({ isActive }) => isActive ? "active" : "" }>Curriculum</NavLink>
                        </li>
                        <li>
                            <NavLink to="Contact" className={ ({ isActive }) => isActive ? "active" : "" }>Contacto</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <hr />
        </>
    )
}
