import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 
import Home from './componentes/Home';
import Login from './componentes/Login';
import Footer from './componentes/Footer';
import Navigation from './componentes/Navigation';
import { BrowserRouter, Route,Routes } from 'react-router-dom';

import Sidenavtor from './componentes/Sidenavtor';
import ListaUnidad from './pages/Unidad/ListaUnidad';

// import FormFile2 from './componentes/FormFile';
//import Fallas from './componentes/Fallas';
import FormUnidad from './pages/Unidad/FormUnidad';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation/>                        
        <div className='auth-wrapper'>
        <Sidenavtor/>
          <div className='auth-inner'>

            <Routes>
              <Route exact path='/' element={<Home/>}/>
              <Route exact path='/login' element={<Login/>}/>
              <Route exact path='/Unidad' element={<ListaUnidad/>}/>
              <Route exact path='/formUnidad' element={<FormUnidad/>}/>
              
            </Routes>                              
              <FormFile2/>
          </div>
        </div>
        
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
