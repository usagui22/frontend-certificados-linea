import React, { useState } from "react";
import { Button, Form, FormText } from "react-bootstrap";
import FieldContent from "../../componentes/FieldContent";

export const FormUsuario = ()=>{

    const[nombres, setNombres]=useState({campo:'',valido:null});
    const[apellido_paterno,setApellido_Paterno]=useState({campo:'',valido:null});
    const[apellido_materno, setApellido_Materno]=useState({campo:'',valido:null});
    const[correo,setCorreo]=useState({campo:'',valido:null});
    const[celular,setCelular]=useState({campo:'',valido:null});
    const[password,setPassword]=useState({campo:'',valido:null});
    const[formularioValido,setValido]=useState(false);

    function handleSubmit(e){
        e.preventDefault();
    }
    const expresiones={
        nombres:/^\w+[a-zA-ZÀ-ÿ\s]+$/ ,
        apellido_paterno:/^\w+[a-zA-ZÀ-ÿ]+$/,
        apellido_materno:/^\w+[a-zA-ZÀ-ÿ]+$/,
        correo:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        celular:/^\W?(591)?[\s-]?\d{1,3}([\s-]?\d{1,7}){1,3}$/,
        password:/^\W?[a-zA-Z0-9-_*]$/
    }

    const mensajesError={
        nombresError:"El campo solo contiene caracteres alfabeticos",
        apellido_paternoError:"El campo contiene caracteres alfabeticos",
        apellido_maternoError:"El campo contiene caracteres alfabeticos",
        correoError:"El campo contiene caracteres alfanumericos y simbolos -_@.",
        celularError:"El campo contiene caracteres numericos y simbolos -+",
        passwordError:"El campo contiene 8 caracteres alfanumericos y simbolos -_*"
    }

    return (         
        // <div>
        //     Ingresar Usuario
        // </div>
        <>
        <div >
        <div>                
            <h3>Nuevo Usuario</h3>       
        </div>                 
        <div > 
        
            <Form onSubmit={handleSubmit}>
            <div className='row align-items-center inputs-items mw-100'>
            <FieldContent 
                etiqueta="Nombres" 
                tipo="text" 
                name="nombres"        
                estado={nombres}
                setEstado={setNombres}
                expresion={expresiones.nombres}
                mensaje={mensajesError.nombresError}                
                />              
            <FieldContent 
                etiqueta="Apellido Paterno" 
                tipo="text" 
                name="apellido_paterno" 
                estado={apellido_paterno}
                setEstado={setApellido_Paterno}
                expresion={expresiones.apellido_paterno}
                mensaje={mensajesError.apellido_paternoError}            
                />
            <FieldContent 
                etiqueta="Apellido Materno" 
                tipo="text" 
                name="apellido_materno" 
                estado={apellido_materno}
                setEstado={setApellido_Materno}
                expresion={expresiones.apellido_materno}
                mensaje={mensajesError.apellido_maternoError}                
                />
            <FieldContent 
                etiqueta="Correo Electronico" 
                tipo="email" 
                name="correo" 
                estado={correo}
                setEstado={setCorreo}
                expresion={expresiones.correo}
                mensaje={mensajesError.correoError}                
                />
            <FieldContent 
                etiqueta="Celular" 
                tipo="text" 
                name="celular" 
                estado={celular}
                setEstado={setCelular}
                expresion={expresiones.celular}
                mensaje={mensajesError.celularError}                
                />    
            <FieldContent 
                etiqueta="Password" 
                tipo="password" 
                name="password" 
                estado={password}
                setEstado={setPassword}
                expresion={expresiones.password}
                mensaje={mensajesError.passwordError}                
                />    
            </div>                
            {formularioValido==='false' &&
                <div className='bg-danger text-center m-3'>

                    <FormText className='text-black fs-5'>
                        <b>Error: </b>
                        Por favor, ingrese sus datos correctamente</FormText>
                </div>}
            <div className='row align-items-center p-3'>                
                <Button className='btn btn-primary m-1 col-sm-2' type="submit">Crear</Button>                
                <Button className='btn btn-primary m-1 col-sm-2' type="reset">Reset</Button>                                
            </div>    
            </Form>
        
        </div>
        </div>                                
        </>
    );
}