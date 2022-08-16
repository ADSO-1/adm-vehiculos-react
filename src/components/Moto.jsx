
const Moto = () => {
  return (
     <>
        <div id="index">
            <div id="vehiculo"> 
            <fieldset>
                <legend> 
                    <h2>InhtmlFormacion Moto</h2>
                </legend>
            </fieldset>
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
                <label htmlFor="num-llantas">
                        Numero Llantas:
                        <input className="input-text" type="text" id="num-llantas" placeholder="Numero llantas"/>
                </label>
                </div>
            </div>
            
            </div>
        </div>
        <div>
            <input className="boton" type="submit" value="Guardar" id="guardar"/>
        </div>
     
     </>   
  )
}

export default Moto