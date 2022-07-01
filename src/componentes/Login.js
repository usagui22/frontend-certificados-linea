//import axios from 'axios';
import React, { Component } from 'react';
import { Button, Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default class Login extends Component {

  state ={
    user:[],
    status:false
  }
  

  // handleSubmit= e => {
  //   e.preventDefault();
  //   const form = $(e.target);
  //   console.log(form)
  //   const data={
  //     rol_usuario: this.nombre_rol,
  //     password_usuario: this.pass_usuario
  //   };
  //   // console.log(data);
  //   axios.post('Login',data).then(
  //     res =>{
  //       localStorage.setItem('token', res.data.token);
  //     }
  //   ).catch(
  //     err => {
  //       console.log(err);
  //     }
  //   )
  // };

  render(){
    
    return (
      <Form 
        action='login' 
        method='post'
        onSubmit={this.handleSubmit}>
        
        <Form.Label className='form-title'>LOGIN DE ROL / USUARIO</Form.Label>
        
        <Form.Group >
          <Form.Label htmlFor="disabledTextInput">Nombre de Usuario: </Form.Label>
            <Form.Control 
              type={"text"} 
              placeholder="Ingrese Nombre Usuario" 
              id="login__user"
              onChange={(e) => (this.nombre_rol = e.target.value)}
              />
        </Form.Group>                    

        <Form.Group >
          <Form.Label htmlFor="disabledTextInput">Contraseña: </Form.Label>
            <Form.Control 
              type={"password"} 
              id="login__pass"    
              onChange={(e)=>(this.pass_usuario = e.target.value)}                                              
              />                                                
            </Form.Group>                                        
        <div>
          <Button className='mt-3 align-content-lg-center' type="submit">Ingresar</Button>
          <Button className='mt-3 align-content-lg-center' type="submit">
            <Link to={"/FormUsuario"}>Registrarse</Link>            
            </Button>      
            
        </div>
      </Form>      
      
    )
  }
}

