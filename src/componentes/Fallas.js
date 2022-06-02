import React, { Component } from 'react';

import TextField from './TextField';
import { Form, Button } from 'react-bootstrap';


export default class Fallas extends Component{    

 render(){
    return (
         
         <>
         <span>Formulario Unidad</span>         
            
                <div>                
                <h3>Nueva Unidad</h3>                       
                <Form>
                    <TextField label="Nombre" type="text" name="nombre"/>
                    <TextField label="Abreviatura" type="text" name="abreviatura"/>
                    <TextField label="Telefono" type="text" name="telefono"/>
                    <TextField label="Pagina de Referencia" type="text" name="pagina"/>
                    <TextField label="Correo Contacto" type="email" name="correo"/>
                    <TextField label="Telefono Alternativo" type="text" name="telefono_alternativo"/>
                    <TextField label="Ubicacion" type="text" name="direccion"/>
                    <TextField label="Responsable" type="text" name="responsable"/>
                    <Button className='btn btn-primary mt-3 ml-3' type="submit">Crear</Button>
                    <Button className='btn btn-primary mt-3 ml-3' type="reset">Reset</Button>
                </Form>                
                </div>
            
         
         </>
    );
  }
}

