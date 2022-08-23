import { useState } from 'react';
import Alerta from './Alerta';
// Programacion Orientada a Objetos
import ClaseCamion from '../model/Camion.js';
import generarId from '../helper/funciones.js';

const Camion = ({bdVehiculo, SetBdVehiculo}) => {

    const [ placa, setPlaca ] = useState("");
    const [ marca, setMarca ] = useState("");
    const [ color, setColor ] = useState("");
    const [ capacidadMaxima, setCapacidadMaxima ] = useState("");

    const [ alerta, setAlerta ] = useState({});  

    const [ vehiculo, setVehiculo ] = useState({});  

    const sincronizarStorage = (bdVehiculo) => {
        localStorage.setItem("bd_vehiculo", JSON.stringify(bdVehiculo));
    }

    const addVehiculo = (vehiculo) => {
        bdVehiculo.push(vehiculo);
        console.log(bdVehiculo);
        sincronizarStorage(bdVehiculo);
    } 


  const handletSudmit = (e) => {
    e.preventDefault();

    if([placa,marca,color,capacidadMaxima].includes("")){
        setAlerta({
            msg: "Todos los Campos son Obligatorios",
            error: true
        });
        return;
    }

    setAlerta({
        msg: "Enviando Informacion"
    });

    let id = generarId();
    setVehiculo(addVehiculo(new ClaseCamion(id, capacidadMaxima,placa, marca, color)));

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
                            <h2>Informacion Camion</h2>
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
                                <label htmlFor="cap-max">
                                    Capacidad Maxima:
                                    <input 
                                        className="input-text text-black" 
                                        type="number" 
                                        id="cap-max"
                                        placeholder="Capacidad Maxima"
                                        value={capacidadMaxima} 
                                        onChange={ e => setCapacidadMaxima(e.target.value) } 
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

export default Camion
