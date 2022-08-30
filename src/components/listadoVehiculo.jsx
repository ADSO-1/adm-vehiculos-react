//import {useState} from 'react';

import Vehiculo from './Vehiculo';
import React from 'react'
//import Alerta from './Alerta';

const listadoVehiculo = ({bdVehiculo,eliminarVehiculo}) => {

  return (

    <>
        {       
            bdVehiculo.map( vehiculo => (
                        <Vehiculo 
                            key={vehiculo.id}
                            vehiculo={vehiculo}
                            eliminarVehiculo = {eliminarVehiculo}
                        />
            ))
        }
    </>    
    
  )
}

export default listadoVehiculo