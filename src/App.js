import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 
import Home from './componentes/Home';
import Login from './componentes/Login';
import Footer from './componentes/Footer';
import Navigation from './componentes/Navigation';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
// import Usuario from './componentes/Usuario';
// import Unidad from './elementos/unidad';
import Sidenavtor from './componentes/Sidenavtor';
import Eliminar from './componentes/Eliminar';
import Editar from './componentes/Editar';
import FormFile2 from './componentes/FormFile2';

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
              {/* <Route exact path='/Unidad'element={<Unidad/>}/> */}
              {/* <Route exact path='/Usuario'element={<Usuario/>}/> */}
              <Route exact path='/editar-usuario/:id' render={props=>{
                const id=props.match.params.id;
                return <Editar id={id}/>
              }}/>
              <Route exact path='/eliminar-usuario/:id'render={props=>{
                const id=props.match.params.id;
                return <Eliminar id={id}/>
              }}/>
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
