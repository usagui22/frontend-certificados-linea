//import axios from 'axios';
import React, { Component } from 'react';
import { Button, Form} from 'react-bootstrap';
import { API } from '../conexiones/Conexion';


export default class Login extends Component {
  

  handleSubmit= async e => {
    e.preventDefault();
    // const form = e.target);
    
    const body={
      correo: this.nombre_rol,
      password: this.pass_usuario
    };
    console.log(body)
    try {
      const res = await API.post("auth/login", body );
      
      if(res.data.status){
        console.log(res.data.msg)
      }
    } catch (error) {
      console.log(error.response.data.msg)
    }
    

    // console.log(data);
    // axios.post('Login',data).then(
    //   res =>{
    //     localStorage.setItem('token', res.data.token);
    //   }
    // ).catch(
    //   err => {
    //     console.log(err);
    //   }
    // )
  };

  render(){
    
    return (
      <Form 
        action='login' 
        method='post'
        onSubmit={this.handleSubmit}>
        
        <Form.Label className='form-title'>LOGIN DE USUARIO</Form.Label>
        
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
        <Button className='mt-3 align-content-lg-center' type="submit">Ingresar</Button>
      </Form>      
      
    )
  }
}

