import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export class Sidenavtor extends Component {
  render() {
    return (
      <>
      {/* <div className='menu-bar'>
          <h3>Menu</h3>
      </div> */}
      <div>        
        <ListGroup key={'xl'} horizontal={'xl'} className="rol-menu">
            <ListGroup.Item className='caja-item'>
            <Link to={"/Unidad"} className="text-dark text ">UNIDADES</Link>
            </ListGroup.Item>
            <ListGroup.Item className='caja-item'>
            <Link to={"/Evento"} className="text-dark text">EVENTOS</Link>
            </ListGroup.Item>
            <ListGroup.Item className='caja-item'>
            <Link to={"/Documento"} className="text-dark text">CERTIFICADOS</Link>
            </ListGroup.Item>
            <ListGroup.Item className='caja-item'>
            <Link to={"/Usuario"} className="text-dark text">USUARIOS</Link>
            </ListGroup.Item>
            <ListGroup.Item className='caja-item'>
            <Link to={"/Plantilla"} className="text-dark text">PLANTILLAS</Link>
            </ListGroup.Item>
            <ListGroup.Item className='caja-item'>
            <Link to={"/Roles"} className="text-dark text">RESPONSABLES</Link>
            </ListGroup.Item>
        </ListGroup>
      </div>
      </>
    )
  }
}

export default Sidenavtor;