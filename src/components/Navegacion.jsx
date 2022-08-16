import React from 'react'

const Navegacion = () => {
  return (
    <div className="nav-bg">
        <nav className="navegacion-principal contenedor">
            <input className="boton" type="submit" value="Inicio" id="inicio" />
            <input className="boton" type="submit" value="Auto" id="auto" />
            <input className="boton" type="submit" value="Moto" id="moto" />
            <input className="boton" type="submit" value="Camion" id="camion" />
        </nav>
    </div>
  )
}

export default Navegacion