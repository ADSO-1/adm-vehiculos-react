import './asset/css/normalize.css';
import './asset/css/styles.css';

import Header from './components/Header';
import SideBar from './components/SideBar';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div classNameName="App">
      <Header />
      <SideBar />

      <Main/>

      <Footer />

    </div>
  );
}

export default App;
