import React from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ListaDocumento =()=>{
    return(
        <>
        {/* <Lista titulos={etiquetas}/> */}
        <>
      <div className='titulo'>
        <h3>LISTA DE CERTIFICADOS REGISTRADOS</h3>      
      </div>
      <div className='btn-crear'>
        <Button className='btn col-me-2 m-1'>
          <Link to={"/FormDocumento"} className="text-light text">Crear Certificado
          </Link>
        </Button>  
        <Button className='btn col-ms-2 m-1'>
          <Link to={"/VerCertificado"} className="text-light text">Ver Certificado
          </Link>
        </Button>                
      </div>

      <div className='table-responsive'>
      <Table responsive  className='table table-bordered'>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Hash</th>
            <th>Fecha Confirmacion</th>
            <th>Nota</th>
            <th>Path</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {/* { plantilla.map((pla, k)=>{
            <tr key={k}>
              <td>{pla.id}</td>
              <td>{pla.nombre}</td>
              <td>{pla.hash}</td>
              <td>{pla.fecha_confirmacion}</td>
              <td>{pla.nota_valoracion}</td>
              <td>{pla.path}</td>
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