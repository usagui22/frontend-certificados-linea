import React, { useEffect, useState } from "react";
import { FormCheck as Check, FormControl, FormLabel, Table } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { BotonBuscar, BotonGuardarAsinacion } from "../../componentes/Botones";

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
        <div>
        <FormLabel>Busqueda de Usuario</FormLabel>
        <FormControl  value={carnet} placeholder="Ingrese un numero de carnet" onChange={handleChange}/>        
        <BotonBuscar funcion={handleChange}/>        

        </div>
        <BotonGuardarAsinacion direccionGuardar={"/Unidad"}/>
          
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