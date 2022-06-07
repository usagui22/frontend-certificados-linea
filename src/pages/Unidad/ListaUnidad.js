
import React, { Component } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { API } from '../../conexiones/Conexion';

export default class ListaUnidad extends Component{
  
  state={
    unidad:[],
    status:false
  }

  cargarUnidades=async e=>{
    let path="/listar-unidades";

      try {
        await API.get(path).then(res=>{
          this.state({
            unidad:res.data
            ,status:true
          });
        })
      } catch (error) {
        console.log("No se encuentran elementos en la entidad")
      }
  }

  componentDidMount=()=>{
    this.cargarUnidades();
  }

  render(){
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
            <th>Responsable</th>      
            <th>Opciones</th>                  
          </tr>
        </thead>
        <tbody>
          { this.state.unidad.map((uni, k)=>{
            <tr key={k}>
              <td>{uni.id}</td>
              <td>{uni.nombre}</td>
              <td>{uni.abreviatura}</td>
              <td>{uni.telefono}</td>
              <td>{uni.url_convocatoria}</td>
              <td>{uni.correo}</td>
              <td>{uni.telefono_alternativo}</td>
              <td>{uni.responsable}</td>
              
            </tr>
          })}
        </tbody>
      </Table>
      </div>
      </>
    );
  }
}


