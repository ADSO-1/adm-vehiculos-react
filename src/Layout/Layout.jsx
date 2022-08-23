
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

      <Navegacion/>

          <div className="contenedor">

              <h1>Datos del Vehiculos</h1>

              
              
              <div id="contenedor-veh">

                <Outlet/>
              
              </div>

              <div id="resultados">

              </div>


          </div>  

      <Footer />

    </div>
  )
}

export default Layout