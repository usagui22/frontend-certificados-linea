
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { API } from '../../conexiones/Conexion';

const ListaUnidad = () =>{
  const [unidad,setUnidad]=useState([]);

  const cargarUnidades = async ()=>{
    let path="unidad/ver-unidades";
      try {
        const res= await API.get(path)
          setUnidad(res.data)
      } catch (error) {
        console.log("No se encuentran unidades registradas")
      }
  }

  useEffect(()=>{
    cargarUnidades()
  },[]);

    return (      
      <>
      <div className='titulo'>
        <h3>LISTA DE UNIDADES REGISTRADAS</h3>      
      </div>
      <div className='btn-crear'>
        <Button >
          <Link to={"/formUnidad"} className="text-light text">Crear Unidad</Link>
        </Button>                
      </div>

      <div className='table-responsive'>
      <Table responsive  className='table table-bordered'>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Abreviatura</th>
            <th>Telefono</th>
            <th>Pagina de Referencia</th>
            <th>Correo Contacto</th>
            <th>Telefono Alternativo</th>            
          </tr>
        </thead>
        <tbody>
          {unidad.map((uni)=>{
            return( <tr key={uni.id}>
              <td>{uni.id}</td>
              <td>{uni.nombre}</td>
              <td>{uni.abreviatura}</td>
              <td>{uni.telefono}</td>
              <td>{uni.url_convocatoria}</td>
              <td>{uni.correo}</td>
              <td>{uni.telefono_alternativo}</td>              
              <td>
                <Button>
                  <Link to={"/editarUnidad"}>Editar</Link>                      
                </Button>                 
              </td>              
              <td>
                <Button>
                  <Link to={"/eliminarUnidad"}>Eliminar</Link>                      
                </Button>                
              </td>  
            </tr>)
          })}
        </tbody>
      </Table>
      </div>
      </>
    );

}

export default ListaUnidad;


