import React from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ListaUsuario=()=>{
    return(
        <>
        {/* <Lista titulos={etiquetas}/> */}
        <>
      <div className='titulo'>
        <h3>LISTA DE USUARIOS REGISTRADOS</h3>      
      </div>
      <div className='btn-crear'>
        <Button className="btn me-2 m-1">
          <Link to={"/FormUsuario"} className="text-light text">Crear Usuario</Link>
        </Button>
        <Button className="btn me-2 m-1 ">
          <Link to={"/FormFile"} className="text-light text">Ingresar Archivo</Link>
        </Button>                
      </div>

      <div className='table-responsive'>
      <Table responsive  className='table table-bordered'>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombres</th>
            <th>Apellido Paterno</th>
            <th>Apellido Materno</th>
            <th>Ocupacion</th>
            <th>Correo Electronico</th>            
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

        </>
    );
}