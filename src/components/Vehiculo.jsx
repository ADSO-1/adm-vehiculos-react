import React from 'react'

const Vehiculo = ({vehiculo}) => {
  return (
    <>
        <tbody id="listado-vehiculo" class="bg-white">
            <tr>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <p class="text-gray-600 font-bold"> {vehiculo.placa} </p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                    <p class="text-gray-600">{vehiculo.marca}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-600">    
                    <p class="text-gray-600">{vehiculo.color}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                    <p class="text-gray-600">{vehiculo.color}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                    <a id="editar" href="editar-contacto.html?id=${vehiculo.id}" data-vehiculo="${vehiculo.id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                    <a id="eliminar" href="#" data-vehiculo="${vehiculo.id}" class="eliminar text-red-600 hover:text-red-900">Eliminar</a>
                </td>
            </tr>
        </tbody>
    </>
  )
}

export default Vehiculo