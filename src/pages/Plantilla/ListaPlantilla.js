import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export class ListaPlantilla extends Component{
  
  render(){
    return(
              
        <>
      <div className='titulo'>
        <h3>LISTA DE PLANTILLAS DE CERTIFICADO</h3>      
      </div>
      <div className='btn-crear'>
        <Button >
          <Link to={"/formPlantilla"} className="text-light text">Crear Plantilla</Link>
        </Button>                
      </div>

      <div className='table-responsive'>
      <Table responsive  className='table table-bordered'>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Certificado</th>
            <th>Opciones</th>                                  
          </tr>
        </thead>
        <tbody>
          {/* { plantilla.map((pla, k)=>{
            <tr key={k}>
              <td>{pla.id}</td>
              <td>{pla.nombre}</td>
              <td>{pla.descripcion}</td>
              <td>{pla.plantilla}</td>
              <td>

              </td>
              <td>

              </td>              
            </tr>
          })} */}
        </tbody>
      </Table>
      </div>
      </>
      
    );
  }  
}