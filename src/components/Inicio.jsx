import Listado from './Listado';

const Inicio = ({bdVehiculo, SetBdVehiculo}) => {

  //console.log(bdVehiculo);

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

                { bdVehiculo.length > 0 ?
                 (
                    <Listado
                      bdVehiculo = {bdVehiculo}
                      SetBdVehiculo = {SetBdVehiculo}
                    />

                 )
                 :                

                  <div className="bg-white">
                      <p className="text-center text-3xl text-black my-10 font-bold uppercase">No Hay Resultados</p> 
                  </div>
                }
          </form>
        </div>
    </main>
  )
}

export default Inicio