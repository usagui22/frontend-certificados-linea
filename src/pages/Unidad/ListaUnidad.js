
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { API } from '../../conexiones/Conexion';
import { BotonAsignar, BotonEditar, BotonEliminar } from '../../componentes/Botones';

const ListaUnidad = () =>{
  const [unidad,setUnidad]=useState([]);
  // const [uni_resp, setUni_Resp]=useState("");

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
            
            <th>Nombre</th>
            <th>Abreviatura</th>
            <th>Telefono</th>
            <th>Pagina de Referencia</th>
            <th>Correo Contacto</th>
            <th>Telefono Alternativo</th>            
            <th>Direccion</th>    
            <th>Responsable</th>        
          </tr>
        </thead>
        <tbody>
          {unidad.map((uni,k)=>{
            return( 
            <tr key={k}>
              
              <td>{uni.nombre}</td>
              <td>{uni.abreviacion}</td>
              <td>{uni.telefono}</td>
              <td>{uni.sitio_web}</td>
              <td>{uni.correo}</td>
              <td>{uni.telefono_alternativo}</td>
              <td>{uni.direccion}</td>              
              <td>{uni.responsable}</td>
              <td>
                <BotonEditar direccionEditar={"/editarUnidad"}/>
                                
              </td>              
              <td>
                <BotonEliminar direccionEliminar={"/eliminarUnidad"}/>
                
              </td> 
              <td>
                <BotonAsignar direccionAsignar={"/ListaCheck/"} identificador={uni.id}/>
                
              </td>  
            </tr>
            )
          })}
        </tbody>
      </Table>
      </div>
      </>
    );

}

export default ListaUnidad;


