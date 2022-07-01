import React, { useState } from "react";
import { Form } from "react-bootstrap";
import FieldContent from "../../componentes/FieldContent";


export const FormEditarUnidad =()=>{
    // const[dato, setDatos]=useState([]);

    const [nombre,setNombre]=useState({campo:'',valido:null});
    const [abreviatura,setAbreviatura]=useState({campo:'',valido:null});
    const [telefono,setTelefono]=useState({campo:'',valido:null});
    const [sitio_web,setSitio_Web]=useState({campo:'',valido:null});
    const [correo,setCorreo]=useState({campo:'',valido:null});
    const [telefono_alternativo,setTelefono_Alternativo]=useState({campo:'',valido:null});
    const [direccion,setDireccion]=useState({campo:'',valido:null});

    const expresiones={
        nombre:/^[a-zA-Z]$/,
        abreviatura:/^[A-Z]{6}$/,
        telefono:/^[0-9]$/,
        sitio_web:/^[A-Za-z0-9]$/,
        correo:/^[a-zA-Z0-9]+\.[a-z]+\.[a-z]$/,
        // telefono_alternativo://,
        direccion:/^[a-zA-Z0-9]$/
    };

    const mensajesError={
        nombreError:"El nombre ingresado no es correcto",
        abreviaturaError:"La abreviatura debe ser minimo 4 caracteres en mayuscula",
        telefonoError:"El telefono solo contiene numeros y simbolos + o -",
        sitio_webError:"La pagina de referencia ingresada no es el correcto",
        correoError:"El correo ingresado no es el correcto",
        // telefonoAlternativoError:"",
        direccionError:"La direccion solo contiene caracteres alfabeticos"
    };
    
    return(
        <>
        <div>
            <h3>Editar Unidad</h3>
        </div>
        <div>
            <Form>            
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
            </div>
            </Form>
        </div>        
        </>
    );
}