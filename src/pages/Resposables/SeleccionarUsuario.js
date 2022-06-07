import React from 'react';
import { Button, ListGroup, ListGroupItem  as Item} from 'react-bootstrap';

export const SeleccionarUsuario = () =>{
  
    return (
      <div className='container'>
        
        <div className=' row lista-usuario float-start'>
          <label>Usuario: </label>
          <input type={"text"}/>
          <div>
          <ListGroup>
            <Item>Usuario 1</Item>
            <Item>Usuario 2</Item>
            <Item>Usuario 3</Item>
            <Item>...</Item>            
          </ListGroup>
          </div>
        </div>
        <div className='row lista-unidad '>
          <label>Unidad: </label>
          <input type={"text"}/>
          <div>
          <ListGroup>
            <Item>Unidad 1</Item>
            <Item>Unidad 2</Item>            
            <Item>...</Item>
          </ListGroup>
          </div>
        </div>
        <div className='row lista-botones col-sm-2 end'>
          <Button className='float-start'>Seleccionar</Button>
          <Button className='float-end'>Cancelar</Button>
        </div>
      </div>
    );
  
}
