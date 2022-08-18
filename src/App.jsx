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
  return (
    <>
      <Router>
        <Routes>
            {/* Rutas Publicas */}
            <Route exact path="/" element={<Layout />}>
                <Route path="inicio" element={<Inicio />} />
                <Route path="auto" element={<Automovil />} />
                <Route path="moto" element={<Moto />} />
                <Route path="camion" element={<Camion />} />
            </Route>
        </Routes>  
      </Router>              
    </>
  );
}

export default App;
