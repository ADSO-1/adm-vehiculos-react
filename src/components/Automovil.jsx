import { useState } from 'react';
import Alerta from './Alerta';
// Programacion Orientada a Objetos
import Auto from '../model/Auto.js';
import generarId from '../helper/funciones.js';

const Automovil = ({bdVehiculo, SetBdVehiculo}) => {

    const [ placa, setPlaca ] = useState("");
    const [ marca, setMarca ] = useState("");
    const [ color, setColor ] = useState("");
    const [ numeroPuerta, setNumeroPuerta ] = useState("");

    const [ alerta, setAlerta ] = useState({});  
    
    const [ vehiculo, setVehiculo ] = useState({});  


    const addVehiculo = (vehiculo) => {
        bdVehiculo.push(vehiculo);
        console.log(bdVehiculo);
        //sincronizarStorage(bdVehiculo);
    }  

    const handletSudmit = (e) => {
        e.preventDefault();

        if([placa,marca,color,numeroPuerta].includes("")){
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
        setVehiculo(new Auto(id, numeroPuerta,placa, marca, color));
        console.log(vehiculo);
        addVehiculo(vehiculo);
        
    }    

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
                            <h2>Informacion Automovil</h2>
                            </legend>  
                            <div className="contenedor-campos" id="tipo">
                            <div className="campos">
                                <label htmlFor="placa">
                                Placa:
                                <input 
                                    className="input-text" 
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
                                    className="input-text" 
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
                                    className="input-text" 
                                    type="text" 
                                    id="color" 
                                    placeholder="Tu color" 
                                    value={color} 
                                    onChange={ e => setColor(e.target.value) } 
                                />
                                </label>
                            </div>
                            <div className="campos" id="tipo-vehiculo">
                                <label htmlFor="num-puerta">
                                    Numero puertas:
                                    <input 
                                        className="input-text" 
                                        type="number" 
                                        id="num-puerta" 
                                        placeholder="Numero puertas"
                                        value={numeroPuerta} 
                                        onChange={ e => setNumeroPuerta(e.target.value) } 
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

export default Automovil