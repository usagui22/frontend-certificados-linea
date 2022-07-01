import React, { useEffect, useState } from "react";
import { Button, FormCheck as Check, FormControl, FormLabel, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

import { API } from "../../conexiones/Conexion";

export const ListaUsuarioUnidad = (props) => {
  
  const [usuario, setUsuario] = useState([])
  const [isChecked,setChecked]=useState(false);
  const [responsable,setResponsable]=useState({id_usuario:null});
  const [carnet,setCarnet]=useState("");
  const [tablaUsuario,setTablaUsuario]=useState([]);

  const cargarUsuarios = async () =>{
    let path="usuario/listar-usuario";
    try {
      console.log("cargando usuarios...")
      const res = await API.get(path) 
        setUsuario(res.data)
        setTablaUsuario(res.data)
    } catch (error) {
      console.log("No se encuentran usuarios registrados");
    }
  }

  const handleChange=(e)=>{
    setCarnet(e.target.value)
    setResponsable({...responsable, id_usuario:e.target.value})
    // console.log("la busqueda: "+e.target.value)
    filtrarBusqueda(e.target.value)
    console.log(responsable)
  }
  
  const filtrarBusqueda=(textoAbuscar)=>{    
    // console.log(tablaUsuario)
    let busqueda=tablaUsuario.filter((elemento)=>{
       if(elemento.ci?.includes(textoAbuscar)){
         return elemento; 
      }
    })
     setUsuario(busqueda);
  }
  const [userChecked,setUserChecked]=useState(null)
  const handleChecked=(event)=>{
    setUserChecked(event.target.value)
    setChecked(true)
    console.log(event.target.value)
    // setChecked(estado);
    setResponsable({...responsable, id_usuario:event.target.value});
    if(responsable){
      try {
        let path="unidad/cambiar-responsable/";
        
        API.get("unidad/cambiar-responsable/?id_resp="+responsable.id_usuario+"&id_uni="+props.uni_resp).then(
          console.log("La unidad cambio de responsable")
        )
      } catch (error) {
        console.log("La unidad no cambio responsable")
      }
    }
  }

  useEffect(() => {
    cargarUsuarios();    
    console.log(userChecked)    
    
  }, [userChecked])

  return(
        <>
        {/* <Lista titulos={etiquetas}/> */}
        <>
      <div className='titulo p-3'>
        <h3>LISTA DE USUARIOS REGISTRADOS</h3>      
      </div>
      <div className="col-sm-6 p-2">
        <FormLabel>Busqueda de Usuario</FormLabel>
        <FormControl  value={carnet} placeholder="Ingrese un numero de carnet" onChange={handleChange}/>
        <Button onClick={handleChange}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </svg>
        </Button>
      
        <Button className="m-2">
          <Link  className="text-light text" to={"/Unidad"}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-in-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z"/>
            <path fill-rule="evenodd" d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
          </svg>
          </Link>
        </Button>
      </div>
      <div className='table-responsive'>
      <Table responsive  className='table table-bordered'>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre Completo</th>      
            <th>Carnet de Identidad</th>                              
            <th>Cargo</th>
          </tr>
        </thead>
        <tbody>
          {usuario.map((usu)=>{
            return(
            <tr key={usu.id} >
              <td>{usu.id}</td>
              <td>{usu.nombres} {usu.apellido_paterno} {usu.apellido_materno}</td>
              <td>{usu.ci}</td>              
              <td>{usu.id_rol}</td>        
              <td>                            
              <Check 
                type={"checkbox"}    
                //id={usu.id}
                name={usu.id}
                value={usu.id}
                //checked={usu.id === isChecked?true:false}
                //onChange={onChangeUsuario(usu.id)}                                           
                onChange={e=>handleChecked(e)}
                
                />
              </td>              
            </tr>)
          })}
        </tbody>
      </Table>
      </div>
      </>

        </>
    );
}