import axios from 'axios';
import React, { PureComponent } from 'react'
import { Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { FormFile } from '../componentes/FormFile';

export default class lista extends PureComponent {
    state={
        usuario:[],
        status:false
    }

    cargarUsuario=()=>{
        const url =Conexion.url;
        const request = "/Usuario";
        axios.get(url+request).then(res=>{
            this.setState({
                usuario:res.data,
                status: true
            })
        })
    }

    componentDidMount=()=>{
        this.cargarUsuario();
    }

    render() {
    return (
        <>
      <div>
        <h1>Usuario</h1>
        <table>
            <thead>
                <tr>                    
                    <th>Nombre</th>
                    <th>Apellido Paterno</th>
                    <th>Apellido Materno</th>
                    <th>Editar</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody>
                {this.state.status===true &&
                (
                    this.state.usuario.map((usu,l)=>{
                        return(
                            <tr key={l}>
                                <td>{usu.nombre}</td>
                                <td>{usu.apellido_paterno}</td>
                                <td>{usu.apellido_materno}</td>
                                <td>
                                    <NavLink to={"/editar-usuario"+usu.id}>Editar</NavLink>                                    
                                </td>
                                <td>
                                    <NavLink to={"/eliminar-usuario"+usu.id}>Eliminar</NavLink>
                                </td>
                            </tr>
                        );
                    })
                )}
            </tbody>
        </table>
      </div>
      <div>
        <Button>              
              <Link to={"/file"} component={<FormFile/>}>Ingresar Multiples Usuarios</Link>
        </Button>
      </div>
      </>
    )
  }
}

