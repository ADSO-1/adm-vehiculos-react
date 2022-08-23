import { useState } from 'react';
import Alerta from './Alerta';

const Moto = ({bdVehiculo, SetBdVehiculo}) => {

    const [ placa, setPlaca ] = useState("");
    const [ marca, setMarca ] = useState("");
    const [ color, setColor ] = useState("");
    const [ numeroLlantas, setNumeroLlantas ] = useState("");

    const [ alerta, setAlerta ] = useState({});  


  const handletSudmit = (e) => {
    e.preventDefault();

    if([placa,marca,color,numeroLlantas].includes("")){
        setAlerta({
            msg: "Todos los Campos son Obligatorios",
            error: true
        });
        return;
    }

    setAlerta({
        msg: "Enviando Informacion"
    });
  };

  const { msg } = alerta;

  return (
    <>
        <main className="md:w-3/5  xl:w-4/5 px-5 py-10 bg-gray-200 contenedor sombra">
            <form 
            className="formulario" 
            id="formulario"
            onSubmit={handletSudmit}          
            >

                <div id="contenedor-veh">    


                    <div id="index">
                        <div id="vehiculo">
                        <fieldset>
                            <legend> 
                            <h2>Informacion Motocicleta</h2>
                            </legend>  
                            <div className="contenedor-campos" id="tipo">
                            <div className="campos">
                                <label htmlFor="placa">
                                Placa:
                                <input 
                                    className="input-text text-black" 
                                    type="text" 
                                    id="placa" 
                                    placeholder="Tu placa" 
                                    value={placa} 
                                    onChange={ e => setPlaca(e.target.value) } 
                                />
                                </label>
                            </div>
                            <div className="campos">
                                <label htmlFor="marca">
                                Marca:
                                <input 
                                    className="input-text text-black" 
                                    type="text" 
                                    id="marca" 
                                    placeholder="Tu marca" 
                                    value={marca} 
                                    onChange={ e => setMarca(e.target.value) } 

                                />
                                </label>
                            </div>
                            <div className="campos">
                                <label htmlFor="color">
                                Color:
                                <input 
                                    className="input-text text-black" 
                                    type="text" 
                                    id="color" 
                                    placeholder="Tu color" 
                                    value={color} 
                                    onChange={ e => setColor(e.target.value) } 
                                />
                                </label>
                            </div>
                            <div className="campos" id="tipo-vehiculo">
                                <label htmlFor="num-llantas">
                                    Numero llantas:
                                    <input 
                                        className="input-text text-black" 
                                        type="number" 
                                        id="num-llantas" 
                                        placeholder="Numero llantas"
                                        value={numeroLlantas} 
                                        onChange={ e => setNumeroLlantas(e.target.value) } 
                                    />
                                </label> 
                            </div>
                            </div>
                        </fieldset>
                        </div>
                    </div>
                    
                    <div id="resultados">
                        {/* Operador ternario simple*/}
                        { msg &&  <Alerta 
                                    alerta={alerta}
                                    setAlerta={setAlerta}
                                />
                        } 
                    </div>  

                    
                    <div>
                        <input className="boton w-100" type="submit" value="Guardar" id="guardar" />
                    </div> 

                    
                </div>
            </form>
        </main>
    </>
  )
}

export default Moto
