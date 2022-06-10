import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 
import Home from './componentes/Home';
import Ingresar from './componentes/Ingresar';
import Footer from './componentes/Footer';
import Navigation from './componentes/Navigation';
import { BrowserRouter, Route,Routes } from 'react-router-dom';

import Sidenavtor from './componentes/Sidenavtor';
import ListaUnidad from './pages/Unidad/ListaUnidad';
import NotFound from './componentes/NotFound';

import FormUni from './pages/Unidad/FormUni';
import { ListaPlantilla } from './pages/Plantilla/ListaPlantilla';
import FormPlantilla from './pages/Plantilla/FormPlantilla';
import { ListaEvento } from './pages/Evento/ListaEvento';
import { ListaDocumento } from './pages/Documento/ListaDocumento';
import { ListaUsuario } from './pages/Usuario/ListaUsuario';
import { Certificado } from './pages/Documento/Certificado';
import { ListaRol } from './pages/Resposables/ListaResponsables';
import { SeleccionarUsuario } from './pages/Resposables/SeleccionarUsuario';
import { FormUsuario } from './pages/Usuario/FormUsuario';
import { FormEvento } from './pages/Evento/FormEvento';
import { FormDocumento } from './pages/Documento/FormDocumento';
import FormFile2 from './pages/Usuario/FormFile';
// import Certificado2 from './pages/Documento/Certificado2';
//import FormUnidad from './pages/Unidad/FormUnidad';
//import FormFormik from './componentes/FormFormik';

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
              <Route exact path='/Ingresar' element={<Ingresar/>}/>
              <Route exact path='/Unidad' element={<ListaUnidad/>}/>
              <Route exact path='/formUnidad' element={<FormUni/>}/>
              <Route exact path='/Plantilla' element={<ListaPlantilla/>}/>
              <Route exact path='/FormPlantilla' element={<FormPlantilla/>}/>
              <Route exact path='/Evento' element={<ListaEvento/>}/>
              <Route exact path='/FormEvento' element={<FormEvento/>}/>
              <Route exact path='/Documento' element={<ListaDocumento/>}/>
              <Route exact path='/FormDocumento' element={<FormDocumento/>}/>
              <Route exact path='/Usuario' element={<ListaUsuario/>}/>
              <Route exact path='/FormUsuario' element={<FormUsuario/>}/>
              <Route exact path='/FormFile' element={<FormFile2/>}/>
              <Route exact path='/VerCertificado' element={<Certificado/>}/>
              <Route exact path='/Roles' element={<ListaRol/>}/>
              <Route exact path='/Seleccionar' element={<SeleccionarUsuario/>}/>
              <Route path='*' element={<NotFound/>}/>
            </Routes>    
            {/* <FormFormik/>  */}
          </div>
        </div>
        
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
