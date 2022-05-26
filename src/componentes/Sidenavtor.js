import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap';

export class Sidenavtor extends Component {
  render() {
    return (
      <div>
        
        <ListGroup key={'xl'} horizontal={'xl'} className="rol-menu">
            <ListGroup.Item>UNIDADES</ListGroup.Item>
            <ListGroup.Item>EVENTOS</ListGroup.Item>
            <ListGroup.Item>DOCUMENTOS</ListGroup.Item>
            <ListGroup.Item>USUARIOS</ListGroup.Item>
            <ListGroup.Item>PLANTILLAS</ListGroup.Item>
            <ListGroup.Item>ROLES</ListGroup.Item>
        </ListGroup>
      </div>
    )
  }
}

export default Sidenavtor;