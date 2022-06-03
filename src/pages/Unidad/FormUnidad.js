import React, { useState } from 'react';
//import FieldContent from '../../componentes/FieldContent';
import { Button } from 'react-bootstrap';
import atributosUnidad from './unidad';
import { FormikProvider,Form, useFormikContext } from 'formik';
import { TextField } from '@mui/material';
//import { API } from '../../conexiones/Conexion';

export default function FormUnidad (){    

    //const [valores, setValores]=useState(false); 

    const expresiones=atributosUnidad.map((atributo)=>(
        atributo.expresion
    ))
    
    const mensajesError=atributosUnidad.map((atributo)=>(
        atributo.mensaje
    ));
    const validar=(valores) => {        

        let errores = {};
        
            if(!valores.nombre){
                errores.nombre = 'Por favor ingresa un nombre de unidad'
            } else if(!expresiones.nombre.test(valores.nombre)){
                errores.nombre = mensajesError.nombre;
            }
            if(!valores.abreviatura){
                errores.abreviatura = 'Por favor ingresa una abreviatura a la unidad'
            } else if(!expresiones.abreviatura.test(valores.abreviatura)){
                errores.abreviatura = mensajesError.abreviatura
            }
            if(!valores.telefono){
                errores.telefono = 'Por favor ingresa un telefono de contacto'
            } else if(!expresiones.telefono.test(valores.telefono)){
                errores.telefono = mensajesError.telefono
            }
            if(!valores.sitio_web){
                errores.sitio_web = 'Por favor ingresa una pagina de referencia'
            } else if(!expresiones.sitio_web.test(valores.sitio_web)){
                errores.correo = mensajesError.sitio_web
            }
            
            if(!valores.correo){
                errores.correo = 'Por favor ingresa un correo electronico de contacto'
            } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
                errores.correo = mensajesError.correo
            }
            if(valores.telefono_alternativo && !expresiones.telefono_alternativo.test(valores.telefono_alternativo)){
                errores.telefono_alternativo = mensajesError.telefono_alternativo
            }
            if(!valores.direccion){
                errores.correo = 'Por favor ingresa una direccion de referencia de la unidad'
            } else if(!expresiones.direccion.test(valores.correo)){
                errores.correo = mensajesError.direccion
            }
        
            return errores;
    }

const formik=useFormikContext({
    
    initialValues:{
        nombre:"",
        abreviatura:"",
        telefono:"",
        sitio_web:"",
        correo:"",
        telefono_alternativo:"",
        direccion:"",
        responsable:""},
    validate:validar,
    onSubmit:(valores,{resetForm})=>{
        console.log(valores)
        resetForm();
    }

});

// let mensajeInvalid=null;
// const handleSubmit=(e)=>{
//     e.preventDefault();    
//     if(!errors){
//         setValido(true);
//         // const body=JSON.stringify(datos);
//         // API.post(body);
//     }else{
//         mensajeInvalid="Verifique sus datos antes de enviar";
//     }
//     console.log("prueba de Validacion",datos);
// }

const {values,errors,touched,handleChange,handleSubmit,getFieldProps}=formik;
    return (         
        <>
        
        <div>                
            <h3>Nueva Unidad</h3>       
        </div>                 
        <div className='container justify-content-md-center'> 
        <FormikProvider value={formik} >
            <Form onSubmit={handleSubmit}>
            <div className='row align-items-center'>
            <TextField 
                // etiqueta="Nombre" 
                // tipo="text" 
                // name="nombre"        
                // onChange={e=>handleChange(e,"nombre")} 
                // error={errors.nombreError}
                {...getFieldProps("nombre")}
                error={Boolean(touched.nombre && errors.nombre)} 
                helperText={touched.nombre && errors.nombre}
                />              
            <TextField 
                // etiqueta="Abreviatura" 
                // tipo="text" 
                // name="abreviatura" 
                // onChange={e=>handleChange(e,"abreviatura")}         
                // error={errors.abreviaturaError}
                {...getFieldProps("abreviatura")}
                error={Boolean(touched.abreviatura && errors.abreviatura)} 
                helperText={touched.abreviatura && errors.abreviatura}
                />
            <TextField 
                // etiqueta="Telefono" 
                // tipo="text" 
                // name="telefono" 
                // onChange={e=>handleChange(e,"telefono")}         
                // error={errors.telefonoError}
                {...getFieldProps("telefono")}
                error={Boolean(touched.telefono && errors.telefono)} 
                helperText={touched.telefono && errors.telefono}
                />
            <TextField 
                // etiqueta="Pagina de Referencia" 
                // tipo="text" 
                // name="pagina" 
                // onChange={e=>handleChange(e,"sitio_web")}         
                // error={errors.sitio_webError}
                {...getFieldProps("sitio_web")}
                error={Boolean(touched.sitio_web && errors.sitio_web)} 
                helperText={touched.sitio_web && errors.sitio_web}
                />
            <TextField 
                // etiqueta="Correo Contacto" 
                // tipo="email" 
                // name="correo" 
                // onChange={e=>handleChange(e,"correo")}         
                // error={errors.correoError}
                {...getFieldProps("correo")}
                error={Boolean(touched.correo && errors.correo)} 
                helperText={touched.correo && errors.correo}
                />
            <TextField 
                // etiqueta="Telefono Alternativo" 
                // tipo="text" 
                // name="telefono_alternativo" 
                // onChange={e=>handleChange(e,"telefono_alternativo")}         
                // error={errors.telefono_alternativoError}
                {...getFieldProps("telefono_alternativo")}
                error={Boolean(touched.telefono_alternativo && errors.telefono_alternativo)} 
                helperText={touched.telefono_alternativo && errors.telefono_alternativo}
                />
            <TextField 
                // etiqueta="Ubicacion" 
                // tipo="text" 
                // name="direccion" 
                // onChange={e=>handleChange(e,"direccion")}         
                // error={errors.direccionError}7
                {...getFieldProps("direccion")}
                error={Boolean(touched.direccion && errors.direccion)} 
                helperText={touched.direccion && errors.direccion}
                />        
            <TextField 
                // etiqueta="Responsable" 
                // tipo="select" 
                // name="responsable" 
                // onChange={e=>handleChange(e,"responsable")}         
                // error={errors.responsableError}
                {...getFieldProps("responsable")}
                error={Boolean(touched.responsable && errors.responsable)} 
                helperText={touched.responsable && errors.responsable}
                />
            </div>                
            <div className='row align-items-center'>                
                <Button className='btn btn-primary m-1 col-sm-2' type="submit">Crear</Button>                
                <Button className='btn btn-primary m-1 col-sm-2' type="reset">Reset</Button>                
                {/* {isValido===true?<FormText>{mensajeInvalid}</FormText>:null} */}
            </div>    
            </Form>
        </FormikProvider>
        </div>
                                
           
        </>
    );
  
}

