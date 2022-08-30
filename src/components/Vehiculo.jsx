import React from 'react'

const Vehiculo = ({vehiculo, eliminarVehiculo}) => {

return (
    <>
        <tbody id="listado-vehiculo" className="bg-white">
            <tr>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <p className="text-gray-600 font-bold"> {vehiculo.placa} </p>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                    <p className="text-gray-600">{vehiculo.marca}</p>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-600">    
                    <p className="text-gray-600">{vehiculo.color}</p>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                    <p className="text-gray-600">{vehiculo.color}</p>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                    <button 
                        id="editar" 
                        type="button" 
                        className="text-teal-600 hover:text-teal-900 mr-5">Editar</button>
                    <button 
                        id="eliminar" 
                        type="button" 
                        className="eliminar text-red-600 hover:text-red-900"
                        onClick={() => eliminarVehiculo(vehiculo.id)}>Eliminar</button>
                        
                </td>
            </tr>
        </tbody>
    </>
  )
}

export default Vehiculo