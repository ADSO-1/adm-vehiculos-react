
const Camion = () => {
  return (
      <>
        <div id="index">
            <div id="vehiculo">
            <fieldset>
            <legend> 
                <h2>Informacion Camion</h2>
            </legend>
            <div className="contenedor-campos" id="tipo">
                <div className="campos">
                <label htmlFor="placa">
                    Placa:
                    <input className="input-text" type="text" id="placa" placeholder="Tu placa"/>
                </label>
                </div>
                <div className="campos">
                <label htmlFor="marca">
                    Marca:
                    <input className="input-text" type="text" id="marca" placeholder="Tu marca"/>
                </label>
                </div>
                <div className="campos">
                <label htmlFor="color">
                    Color:
                    <input className="input-text" type="text" id="color" placeholder="Tu color"/>
                </label>
                </div>
                <div className="campos" id="tipo-vehiculo">
                <label htmlFor="capacidad-max">
                    Capacidad Maxima:
                    <input className="input-text" type="text" id="capacidad-max" placeholder="Capacidad maxima"/>
                </label> 
                </div>  
            </div>  
            </fieldset>
            </div>  
        </div>
        <div>
            <input className="boton" type="submit" value="Guardar" id="guardar"/>
        </div>
      </>  
  )
}

export default Camion