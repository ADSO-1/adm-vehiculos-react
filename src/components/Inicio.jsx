import Listado from './Listado';

const Inicio = ({bdVehiculo, SetBdVehiculo}) => {

  console.log(bdVehiculo);

  return (
    <main className="md:w-3/5  xl:w-4/5 px-5 py-10 bg-gray-200 contenedor sombra">
        <div id="resultados">
          <form 
              className="formulario" 
              id="formulario"
          >
                <fieldset>
                    <legend> 
                    <h2>Lista de Vehiculos</h2>
                    </legend>
                </fieldset> 
                
                {/* Components Listado */}
                <Listado
                    bdVehiculo = {bdVehiculo}
                />
          </form>
        </div>
    </main>
  )
}

export default Inicio