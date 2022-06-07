import React from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ListaRol=()=>{
    return(
        <>
        {/* <Lista titulos={etiquetas}/> */}
        <>
      <div className='titulo'>
        <h3>LISTA DE RESPONSABLES DE UNIDAD SELECCIONADOS</h3>      
      </div>
      <div className='btn-crear'>
        <Button >
          <Link to={"/Seleccionar"} className="text-light text">Nuevo Responsable</Link>
        </Button>                
      </div>

      <div className='table-responsive'>
      <Table responsive  className='table table-bordered'>
        <thead>
          <tr>
            <th>#</th>
            <th>Unidad</th>
            <th>Usuario</th>
            <th>Permisos</th>
            <th>Opciones</th>   
          </tr>
        </thead>
        <tbody>
          {/* { plantilla.map((pla, k)=>{
            <tr key={k}>
              <td>{columnas de rol.id}</td>
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