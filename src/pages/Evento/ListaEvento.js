import React from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ListaEvento=()=>{
  
    return(
        <>
        {/* <Lista titulos={etiquetas}/> */}
        <>
      <div className='titulo'>
        <h3>LISTA DE EVENTOS REGISTRADOS</h3>      
      </div>
      <div className='btn-crear'>
        <Button >
          <Link to={"/formEvento"} className="text-light text">Crear Evento</Link>
        </Button>                
      </div>

      <div className='table-responsive'>
      <Table responsive  className='table table-bordered'>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Nombre de Unidad</th>
            <th>Enlace de Convocatoria</th>
            <th>Fecha Inicio de Evento</th>
            <th>Fecha Fin de Registro</th>
            <th>Fecha Inicio de Actividades</th>                        
            <th>Fecha Fin de Actividades</th>                        
            <th>Fecha Inicio de Emision</th>
            <th>Fecha Fin de Evento</th>
            <th>Opciones</th>                        
          </tr>
        </thead>
        <tbody>
          {/* { evento.map((pla, k)=>{
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
      </>
    );
}