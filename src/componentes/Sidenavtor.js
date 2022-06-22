import React from 'react'
import { ListGroup, ListGroupItem as Item } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sidenavtor = () => {
  
    return (
      <>
      {/* <div className='menu-bar'>
          <h3>Menu</h3>
      </div> */}
      <div className='menu_bar ' >
        <div hidden>
          {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            OPCIONES
          </svg> */}
          <i className='bi bi-list'/>
          <span>OPCIONES</span>
        </div>
        <div>
        <ListGroup key={'xl'} horizontal={'xl'} className="rol-menu">
            <Item className='caja-item'> 
            <Link to={"/Unidad"} className="text-light text" >UNIDADES</Link>
            </Item>
            <Item className='caja-item'>
            <Link to={"/Evento"} className="text-light text">EVENTOS</Link>
            </Item>
            <Item className='caja-item'>
            <Link to={"/Documento"} className="text-light text">CERTIFICADOS</Link>
            </Item>
            <Item className='caja-item'>
            <Link to={"/Usuario"} className="text-light text">USUARIOS</Link>
            </Item>
            <Item className='caja-item'>
            <Link to={"/Plantilla"} className="text-light text">PLANTILLAS</Link>
            </Item>
            <Item className='caja-item'>
            <Link to={"/Roles"} className="text-light text">RESPONSABLES</Link>
            </Item>
        </ListGroup>
        </div>
      </div>
      </>
    )
  }

export default Sidenavtor;