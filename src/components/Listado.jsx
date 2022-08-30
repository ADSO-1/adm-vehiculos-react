import { useState, useEffect} from 'react';
import ListadoVehiculo from './listadoVehiculo';

const Listado = ({bdVehiculo, SetBdVehiculo}) => {

    const [confirmar, setConfirmar  ] = useState(false);    

    const eliminarVehiculo = (id) => {
        // eslint-disable-next-line no-restricted-globals
        setConfirmar(confirm('¿Confirmas que deseas eliminar?'));
        if(confirmar) {
            SetBdVehiculo(bdVehiculo.filter( vehiculo => vehiculo.id !== id ));
        }
    }; 

    useEffect(() =>{
        localStorage.removeItem("bd_vehiculo");
        localStorage.setItem("bd_vehiculo", JSON.stringify(bdVehiculo));
        console.log(bdVehiculo);
    },[bdVehiculo]);

  return (
    <div className="formulario">
        {/* <!-- Listado Vehiculo  --> */}
        <main className="md:w-3/5  xl:w-4/5 px-5 py-10 bg-gray-200">
            <div className="flex flex-col mt-100">
                <div className="py-2 overflow-x-auto">
                    <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                        <table className="min-w-full">
                            <thead className="bg-gray-100 ">
                                <tr>
                                    <th id="nombre" className="px-6 py-3 border-b border-gray-200  text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                            Placa
                                    </th>
                                    <th id="marca" className="px-6 py-3 border-b border-gray-200  text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                            Marca
                                    </th>
                                    <th id="color" className="px-6 py-3 border-b border-gray-200  text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                            Color
                                    </th>
                                    <th id="informacion" className="px-6 py-3 border-b border-gray-200  text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                            Informacion
                                    </th>

                                    <th id="acciones" className="px-6 py-3 border-b border-gray-200  text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                        Acciones
                                    </th>
                                </tr>
                            </thead>
                            {/* Listado Individual de los vehiculos */}

                            <ListadoVehiculo 
                                bdVehiculo={bdVehiculo}
                                eliminarVehiculo = {eliminarVehiculo}
                            />

                        </table>
                    </div>
                </div>
            </div>
        </main>  
        
    </div>
    
  )
}

export default Listado