import React, { useState } from 'react';
import FieldContent from '../../componentes/FieldContent';
import { Form, Button, FormText } from 'react-bootstrap';
import { API } from '../../conexiones/Conexion';
import { Link } from 'react-router-dom';
// import { FieldSelect } from '../../componentes/FieldSelect';


const FormUnidad =()=>{    

const [nombre,setNombre]=useState({campo:"",valido:null});
const [abreviatura,setAbreviatura]=useState({campo:"",valido:null});
const [telefono, setTelefono]=useState({campo:"",valido:null});
const [sitio_web,setSitio_Web]=useState({campo:"",valido:null});
const [correo,setCorreo]=useState({campo:"",valido:null});
const [telefono_alternativo,setTelefono_Alternativo]=useState({campo:"",valido:null});
const [direccion,setDireccion]=useState({campo:"",valido:null});
//const [responsables,setResponsables]=useState([]);
const [formularioValido,setValido]=useState(null);
const [body,setBody]=useState({
    nombre:'',
    abreviacion:'',
    telefono:'',
    sitio_web:'',
    correo:'',
    telefono_alternativo:'',
    direccion:''
});

const expresiones={
    nombre:/^\w+[a-zA-ZÀ-ÿ\s]+$/,
    abreviatura:/^(F|U|D)[A-Z]{2,8}$/,
    telefono:/^\W?(591)[\s-]\d{1,3}([\s-]\d{1,7}){1,3}$/,
    sitio_web:/^(http+s?:\/\/)?(www\.)?[a-zA-Z.-]+\.[A-Za-z0-9./-]+$/,
    correo:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    // telefono_alternativo:/^(\W?(591)[\s-])?\d{1,3}([\s-]\d{1,7}){1,3}$/,
    direccion:/^[A-Za-z0-9]+[+a-zA-Z0-9\s,]+\.?[A-Za-z\s.,]+$/,

}

const mensajesError={
    nombreError:"El campo solo puede contener caracteres alfabeticos",
    abreviaturaError:"EL campo solo permite entre 4 a 8 letras en mayuscula",
    telefonoError:"El campo solo permite numeros 0-9 y los simbolos - +",
    sitio_webError:"El campo solo permiten caracteres alfanumericos y simbolos .-_/ ",
    correoError:"EL campo solo permite caracteres alfanumericos y simbolos .-_@",
    // telefono_alternativoError:"El campo solo permite numeros 0-9 y los simbolos - +",
    direccionError:"El campo solo permite caracteres alfanumericos y simbolos ./:",
    
}

// useEffect(()=>{
//     cargarResponsables()
// },[]);

// const cargarResponsables= async ()=>{
//     let path="unidad/listar-responsables";
//     try {
//         const lista= await API.get(path)
//         setResponsables(lista.data)
//         console.log(lista)
//     } catch (error) {
//         console.log("Los usuarios no se han encontrado");
//     }    
// }

const handleSubmit=(e)=>{
    e.preventDefault();    
    // let path="unidad/crear-unidad";

    if( nombre.valido==='true'&&
        abreviatura.valido==='true'&&
        telefono.valido==='true'&&
        sitio_web.valido==='true' &&
        direccion.valido==='true')
        {
            setValido(true);
            setBody({
                nombre:nombre.campo,
                abreviacion: abreviatura.campo,
                telefono:telefono.campo,
                sitio_web:sitio_web.campo,
                correo:correo.campo,
                telefono_alternativo:telefono_alternativo.campo,
                direccion:direccion.campo
            })
            
            console.log(body);
            try {
                
                API.post('unidad/crear-unidad',body)
                .then(                    
                    console.log("ingresando a post")
                )
            } catch (error) {
                console.log("No se ha podido registrar unidad")
            }                       
            
        }else{
            setValido(false);
        }
}

// function listaUsuarios(){    
//     API.get("/listar-usuarios").then(res=>{
//         setLista([res]);
//     })
// }

    return (         
        <>
        <div >
        <div>                
            <h3>Nueva Unidad</h3>       
        </div>                 
        <div > 
        
            <Form onSubmit={handleSubmit} >
            <div className='row align-items-center inputs-items mw-100'>
            <FieldContent 
                etiqueta="Nombre" 
                tipo="text" 
                name="nombre"        
                estado={nombre}
                setEstado={setNombre}
                expresion={expresiones.nombre}
                mensaje={mensajesError.nombreError}
                
                />              
            <FieldContent 
                etiqueta="Abreviatura" 
                tipo="text" 
                name="abreviatura" 
                estado={abreviatura}
                setEstado={setAbreviatura}
                expresion={expresiones.abreviatura}
                mensaje={mensajesError.abreviaturaError}
                
                />
            <FieldContent 
                etiqueta="Telefono" 
                tipo="text" 
                name="telefono" 
                estado={telefono}
                setEstado={setTelefono}
                expresion={expresiones.telefono}
                mensaje={mensajesError.telefonoError}
                
                />
            <FieldContent 
                etiqueta="Pagina de Referencia" 
                tipo="text" 
                name="pagina" 
                estado={sitio_web}
                setEstado={setSitio_Web}
                expresion={expresiones.sitio_web}
                mensaje={mensajesError.sitio_webError}
                
                />
            <FieldContent 
                etiqueta="Correo Contacto" 
                tipo="email" 
                name="correo" 
                estado={correo}
                setEstado={setCorreo}
                expresion={expresiones.correo}
                mensaje={mensajesError.correoError}
                
                />
            <FieldContent 
                etiqueta="Telefono Alternativo" 
                tipo="text" 
                name="telefono_alternativo" 
                estado={telefono_alternativo}
                setEstado={setTelefono_Alternativo}
                // expresion={expresiones.telefono_alternativo}
                // mensaje={mensajesError.telefono_alternativoError}                
                />
            <FieldContent 
                etiqueta="Ubicacion" 
                tipo="text" 
                name="direccion" 
                estado={direccion}
                setEstado={setDireccion}
                expresion={expresiones.direccion}
                mensaje={mensajesError.direccionError}
                
                />
            {/* <FieldSelect
                etiqueta="Responsable"
                porDefecto="Seleccione Responsable"
                nombre="responsable"                           
                opciones={responsables}
            />         */}
            {/* <div className="col-sm-6">
            <Form.Label>Responsable a Cargo</Form.Label>
            <Form.Select  aria-label="Default select example">
                <option>Seleccione Responsable</option>

                {responsables.map(responsable=>(

                    <option value={responsable.id}>{responsable.nombres} {responsable.apellido_paterno} {responsable.apellido_materno}</option>
                    ))
                }                
            </Form.Select>
            </div>  */}
            </div>                
            {formularioValido==='false' &&
                <div className='bg-danger text-center m-3'>

                    <FormText className='text-black fs-5'>
                        <b>Error: </b>
                        Por favor rellene el formulario correctamente</FormText>
                </div>}
            <div className='row align-items-center p-3'>                
                <Button className='btn btn-primary m-1 col-sm-2' type="submit">Crear</Button>                
                <Button className='btn btn-primary m-1 col-sm-2' type="cancel">
                <Link className="text-light text" to={"/Unidad"}>Cancelar</Link>    
                </Button>                
                
            </div>    
            </Form>
        
        </div>
        </div>                                
        </>
    );
  
}

export default FormUnidad;