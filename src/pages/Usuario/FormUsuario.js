import React, { useEffect, useState } from "react";
import { Button, Form, FormText } from "react-bootstrap";
import FieldContent from "../../componentes/FieldContent";
import { API } from "../../conexiones/Conexion";

export const FormUsuario = ()=>{

    const[nombres, setNombres]=useState({campo:'',valido:null});
    const[apellido_paterno,setApellido_Paterno]=useState({campo:'',valido:null});
    const[apellido_materno, setApellido_Materno]=useState({campo:'',valido:null});
    const[correo,setCorreo]=useState({campo:'',valido:null});
    const[celular,setCelular]=useState({campo:'',valido:null});
    const[password,setPassword]=useState({campo:'',valido:null});
    // const[password2,setPassword2]=useState({campo:'', valido:null});
    const[formularioValido,setValido]=useState(false);
    const[cargo,setCargo]=useState([]);
    const[ci,setCi]=useState({campo:'',valido:null});
    const[cod_sis,setCod_Sis]=useState({campo:'',valido:null});
    const[body,setBody]=useState({
        nombres:'',
        apellido_paterno:'',
        apellido_materno:'',
        correo:'',
        celular:'',
        password:'',
        ci:'',
        cargo:'',
        cod_sis:''
    })

    const cargarCargos= async ()=>{
        let path="usuario/listar-cargos";
        try {
            const res=await API.get(path)
            setCargo(res.data)
        } catch (error) {
            console.log("los cargos no se han encontrado")
        }
    }

    useEffect(()=>{
        cargarCargos();
    },[]);

    function handleSubmit(e){
        e.preventDefault();
        let path="usuario/registrar-usuario";
        if(nombres.valido==="true" &&
            apellido_paterno.valido==="true" &&
            apellido_materno.valido==="true" &&
            correo.valido==="true" &&
            celular.valido==="true" &&
            password.valido==="true" 
            // && password2.valido==="true"
            )
        {
            setValido(true);
            setBody({
                nombres:nombres.campo,
                apellido_paterno:apellido_paterno.campo,
                apellido_materno:apellido_materno.campo,
                correo:correo.campo,
                celular:celular.campo,
                ci:ci.campo,
                password_hash:password.campo,
                cod_sis:cod_sis.campo
            });
            // const body=[
            //     {"nombres":nombres.campo},
            //     {"apellido_paterno":apellido_paterno.campo},
            //     {"apellido_materno":apellido_materno.campo},
            //     {"correo":correo.campo},
            //     {"celular":celular.campo},
            //     {"password":password.campo}
            //     // {"password2":password2.campo}
            // ]
            try {
                API.post(path,body)
                .then(
                    console.log("registro exitoso")
                )
            } catch (error) {
                console.log("No se ha podido registrar usuario")
            }
        }
    }
    const expresiones={
        nombres:/^\w+[a-zA-ZÀ-ÿ\s]+$/ ,
        apellido_paterno:/^\w+[a-zA-ZÀ-ÿ]+$/,
        apellido_materno:/^\w+[a-zA-ZÀ-ÿ]+$/,
        correo:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        celular:/^\W?(591)?[\s-]?\d{1,3}([\s-]?\d{1,7}){1,3}$/,
        password:/^\W?[a-zA-Z0-9]{8}$/,  
        cod_sis:/^[0-9]{9}$/,     
        ci:/^[0-9A-Z]{7}$/
    }
 
    // const validarPassword2=()=>{
    //     if(password.campo.length > 0 ){
    //         if(password.campo !== password2.campo){
    //             console.log("contraseñas no son iguales");
    //             setPassword2((prevState)=>{
    //                 return{...prevState, valido:'false'}
    //             });
    //         }else{
    //             console.log("contraseñas son iguales");
    //             setPassword2((prevState)=>{
    //                 return{...prevState, valido:'true'}
    //             });
    //         }
    //     }
    // }

    const mensajesError={
        nombresError:"El campo solo contiene caracteres alfabeticos",
        apellido_paternoError:"El campo contiene caracteres alfabeticos",
        apellido_maternoError:"El campo contiene caracteres alfabeticos",
        correoError:"El campo contiene caracteres alfanumericos y simbolos -_@.",
        celularError:"El campo contiene caracteres numericos y simbolos -+",
        passwordError:"El campo contiene 8 caracteres alfanumericos y simbolos -_*",
        codSisError:"El campo contiene 9 numeros",    
        ciError:"El campo solo permite caracter en mayuscula y numeros"
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
                etiqueta="Contraseña" 
                tipo="password" 
                name="password" 
                estado={password}
                setEstado={setPassword}
                expresion={expresiones.password}
                mensaje={mensajesError.passwordError}                
                />
            <FieldContent 
                etiqueta="Codigo Siss" 
                tipo="text" 
                name="cod_sis" 
                estado={cod_sis}
                setEstado={setCod_Sis}
                expresion={expresiones.cod_sis}
                mensaje={mensajesError.codSisError}
                />
            
            <FieldContent 
                etiqueta="Carnet de Identidad" 
                tipo="text" 
                name="ci" 
                estado={ci}
                setEstado={setCi}
                expresion={expresiones.ci}
                mensaje={mensajesError.ciError}                
                />

            <div className="col-sm-6">
            <Form.Label>Cargo </Form.Label>
            <Form.Select  aria-label="Default select example">
                {/* <option>Participante</option> */}
                {cargo.map((c,k)=>{
                    return(
                    <option key={k} value={c.id}>{c.nombre}</option>)
                    })
                }                
            </Form.Select>
            </div> 
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