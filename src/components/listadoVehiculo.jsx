//import {useState} from 'react';

import Vehiculo from './Vehiculo';
import React from 'react'
//import Alerta from './Alerta';

const listadoVehiculo = ({bdVehiculo, SetBdVehiculo}) => {

  return (

    <>
        { bdVehiculo.length > 0 ? 
            (
      
                    bdVehiculo.map( vehiculo => (
                                <Vehiculo 
                                    key={vehiculo.id}
                                    vehiculo={vehiculo}
                                    bdVehiculo = {bdVehiculo}
                                    SetBdVehiculo = {SetBdVehiculo}
                                />
                    ))
      
            )
            : 
                <div className="bg-white">
                    <p className="text-center text-3xl text-black my-10 font-bold uppercase">No Hay Resultados</p> 
                </div>
        }
    </>    
    
  )
}

export default listadoVehiculo