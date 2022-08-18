

const Automovil = () => {
  return (
    <>
        <div id="index">
            <div id="vehiculo">
            <fieldset>
                <legend> 
                <h2>Informacion Automovil</h2>
                </legend>  
                <div className="contenedor-campos" id="tipo">
                <div className="campos">
                    <label htmlFor="placa">
                    Placa:
                    <input className="input-text" type="text" id="placa" placeholder="Tu placa" />
                    </label>
                </div>
                <div className="campos">
                    <label htmlFor="marca">
                    Marca:
                    <input className="input-text" type="text" id="marca" placeholder="Tu marca" />
                    </label>
                </div>
                <div className="campos">
                    <label htmlFor="color">
                    Color:
                    <input className="input-text" type="text" id="color" placeholder="Tu color" />
                    </label>
                </div>
                <div className="campos" id="tipo-vehiculo">
                    <label htmlFor="num-puerta">
                        Numero puertas:
                        <input className="input-text" type="text" id="num-puerta" placeholder="Numero puertas"/>
                    </label> 
                </div>
                </div>
            </fieldset>
            </div>
        </div>
        <div>
            <input className="boton w-100" type="submit" value="Guardar" id="guardar" />
        </div>   
    </>
  )
}

export default Automovil