import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { API } from "../../conexiones/Conexion";

export const ListaRol=()=>{

  const [responsables, setResponsables]=useState([]);
  
  const cargarResponsable =async()=>{
    let path="usuario/listar-responsables";
    try {
      const resp= await API.get(path)
      setResponsables(resp.data)
    } catch (error) {
      console.log("No se encuentran responsables de unidad")
    }
  }
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
            <th>Cargo</th>
            <th>Opciones</th>   
          </tr>
        </thead>
        <tbody>
          { responsables.map((res)=>{
            return(
            <tr key={res.id}>
              <td>{res.id}</td>
              <td>{res.nombres}</td>
              <td>{res.apellido_paterno}</td>
              <td>{res.apellido_materno}</td>
              <td>{res.id_rol}</td>
              <td>
                
              </td>              
            </tr>);
          })}
        </tbody>
      </Table>
      </div>
      </>

        </>
    );
}