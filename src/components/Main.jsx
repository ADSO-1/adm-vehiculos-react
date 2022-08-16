import { useState } from 'react';

import React from 'react'
import Navegacion from './Navegacion';
import Presentacion from './Presentacion';

const Main = () => {

  // se define el nombre de la variable y el metodo que le cambia el valor ademas se le da un valorn inicial.
  const [ estado, setEstado ] = useState(false);

  

  const handletSudmit = e => {
    e.preventDefault();
    setEstado(!estado);
  };

  return (
    <main className="md:w-3/5  xl:w-4/5 px-5 py-10 bg-gray-200 contenedor sombra">
        <form 
          className="formulario" 
          id="formulario"
          onSubmit={handletSudmit}          
        >
          <div className="contenedor">
            <div>
              <h1>Datos del Vehiculos</h1>

              <Navegacion/>
              
              <div id="contenedor-veh">

              <legend>
                Presione el boton para ver la presentacion
              </legend>

              <button>
                Ver presentacion
              </button>

              <Presentacion
                 estado={estado}   // Prospt          
              />

              </div>
              <div id="resultados">

              </div>
            </div>
          </div>  
        </form>
    </main>
  )
}

export default Main