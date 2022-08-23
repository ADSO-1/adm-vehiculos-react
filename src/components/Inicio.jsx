import Listado from './Listado';

const Inicio = ({bdVehiculo, SetBdVehiculo}) => {

  console.log(bdVehiculo);

  return (
    <>
        <div id="resultados">
            <fieldset>
                <legend> 
                 <h2>Lista de Vehiculos</h2>
                </legend>
            </fieldset> 
            
            {/* Components Listado */}
            <Listado/>

        </div>
    </>
  )
}

export default Inicio