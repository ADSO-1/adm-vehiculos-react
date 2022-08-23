import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Layout
import Layout from './Layout/Layout';
//componentes
import Inicio from './components/Inicio';
import Automovil from './components/Automovil';
import Moto from './components/Moto';
import Camion from './components/Camion';


import './asset/css/normalize.css';
import './asset/css/styles.css';

function App() {

  const [ bdVehiculo, SetBdVehiculo ] = useState([]);

  
  useEffect(() =>{
    const consultarStorage = () => {
      SetBdVehiculo(JSON.parse(localStorage.getItem('bd_vehiculo') ) || []);
    };
    consultarStorage();
  },[]);

  return (
    <>
      <Router>
        <Routes>
            {/* Rutas Publicas */}
            <Route exact path="/" element={<Layout />}>
                <Route path="inicio" element={<Inicio 
                                                  bdVehiculo = {bdVehiculo} 
                                                  SetBdVehiculo = {SetBdVehiculo} 
                                              />} />
                <Route path="auto" element={<Automovil 
                                              bdVehiculo = {bdVehiculo} 
                                              SetBdVehiculo = {SetBdVehiculo} 
                                            />} />
                <Route path="moto" element={<Moto 
                                              bdVehiculo = {bdVehiculo} 
                                              SetBdVehiculo = {SetBdVehiculo} 
                                            />} />
                <Route path="camion" element={<Camion
                                                bdVehiculo = {bdVehiculo} 
                                                SetBdVehiculo = {SetBdVehiculo} 
                                             />} />
            </Route>
        </Routes>  
      </Router>              
    </>
  );
}

export default App;
