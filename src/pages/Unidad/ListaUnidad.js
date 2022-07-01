
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { API } from '../../conexiones/Conexion';

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
                <Button>
                  <Link className="text-light text" to={"/editarUnidad"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                      <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                    </svg>                   
                  </Link>                      
                </Button>                 
              </td>              
              <td>
                <Button>
                  <Link className="text-light text" to={"/eliminarUnidad"}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                  </svg>
                  </Link>
                </Button>                
              </td> 
              <td>
                <Button >
                  <Link className="text-light text" to={"/ListaCheck/"}  uni_resp={uni.id}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-square" viewBox="0 0 16 16">
                    <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z"/>
                    <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
                  </svg>
                  </Link>                      
                </Button>                
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


