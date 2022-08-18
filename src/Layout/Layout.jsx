
import  { Outlet } from 'react-router-dom';

import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';

import Navegacion from '../components/Navegacion';

const Layout = () => {
  return (
    <div classNameName="App">
      <Header />
      <SideBar />

      <main className="md:w-3/5  xl:w-4/5 px-5 py-10 bg-gray-200 contenedor sombra">
        <form 
          className="formulario"
          id="formulario"
          //onSubmit={handletSudmit}          
        >
          <div className="contenedor">
            <div>
              <h1>Datos del Vehiculos</h1>

              <Navegacion/>
              
              <div id="contenedor-veh">

                <Outlet/>
              
              </div>

              <div id="resultados">

              </div>

            </div>
          </div>  
        </form>
      </main>

      <Footer />

    </div>
  )
}

export default Layout