import React from 'react'
import { Link } from "react-router-dom";

const Navegacion = () => {
  return (
    <div className="nav-bg">
        <nav className="navegacion-principal contenedor">
            <Link to="inicio" className="boton">Inicio</Link>
            <Link to="auto" className="boton">Auto</Link>
            <Link to="moto" className="boton">Moto</Link>
            <Link to="camion" className="boton">Camion</Link>
        </nav>
    </div>
  )
}

export default Navegacion