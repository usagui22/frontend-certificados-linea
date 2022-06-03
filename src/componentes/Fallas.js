import React, { Component } from 'react';

import TextField from './TextField';
import { Form, Button } from 'react-bootstrap';


export default class Fallas extends Component{    

 render(){
    return (
         
         <>
         <span>Formulario Unidad</span>         
            
                <div>                
                <h3>Nueva Unidad</h3>                       
                <Form>
                    <TextField label="Nombre" type="text" name="nombre"/>
                    <TextField label="Abreviatura" type="text" name="abreviatura"/>
                    <TextField label="Telefono" type="text" name="telefono"/>
                    <TextField label="Pagina de Referencia" type="text" name="pagina"/>
                    <TextField label="Correo Contacto" type="email" name="correo"/>
                    <TextField label="Telefono Alternativo" type="text" name="telefono_alternativo"/>
                    <TextField label="Ubicacion" type="text" name="direccion"/>
                    <TextField label="Responsable" type="text" name="responsable"/>
                    <Button className='btn btn-primary mt-3 ml-3' type="submit">Crear</Button>
                    <Button className='btn btn-primary mt-3 ml-3' type="reset">Reset</Button>
                </Form>                
                </div>
            
         
         </>
    );
  }
}

//----------------------------------LSO ERRORES NO FUNCIONAN LUEGO DE REFRESH O RESET
import React, { useState } from 'react';
import FielContent from '../../componentes/FieldContent';
import { Form, Button } from 'react-bootstrap';
import * as Yup from "yup";

export default function FormUnidad (){    
const valoresIniciales={nombre:""};

const [datos, setDatos]=useState(valoresIniciales);

const [FormErrors, setFormErrors]=useState({});

const [FormValido, setValido]=useState(false);

const handleChange=(e)=>{
    const {name, value}=e.target;
    setDatos({...datos, [name]:value});
};

const handleSubmit=(e)=>{
    e.preventDefault();
    //setFormErrors(validate(datos));
    setValido(true);
};



// useEffect(()=>{
//     if(Object.keys(FormErrors) === 0 && FormValido){
//         console.log(datos);
//     }
// },[FormErrors]);

// const validate=(values)=>{
//     const errors={};
//     const regex={
//         nombreregex:/^\w+[a-zA-ZÀ-ÿ\s]+$/,
//     };
//     if(!values.nombre){
//         errors.nombre="El nombre de la unidad es requerido";
//     }else if (!regex.nombreregex.test(values.nombre)) {
//         errors.nombre="El campo solo puede contener caracteres alfabeticos";
//     }
//     return errors;
// }
 
    return (
         
        <>
        <div>                
            <h3>Nueva Unidad</h3>       
        </div>                 
        <div className='container justify-content-md-center'> 
            <Form onSubmit={handleSubmit}>
            <div className='row align-items-center'>
                <FielContent 
                    label="Nombre" 
                    tipo="text" 
                    name="nombre" 
                    change={handleChange} 
                    value={datos.nombre} 
                    error={FormErrors.nombre}/>                
                {/* <FieldContent label="Abreviatura" tipo="text" name="abreviatura" change={this.handleChange}/>
                <FieldContent label="Pagina de Referencia" tipo="text" name="pagina" change={this.handleChange}/>
                <FieldContent label="Correo Contacto" tipo="email" name="correo" change={this.handleChange}/>
                <FieldContent label="Telefono Alternativo" tipo="text" name="telefono_alternativo" change={this.handleChange}/>
                <FieldContent label="Ubicacion" tipo="text" name="direccion" change={this.handleChange}/>
                <FieldContent label="Telefono" tipo="text" name="telefono" change={this.handleChange}/>
                <FieldContent label="Responsable" tipo="text" name="responsable" change={this.handleChange}/> */}
            </div>                
            <div className='row align-items-center'>
                <Button className='btn btn-primary m-1 col-4' type="submit">Crear</Button>                
                <Button className='btn btn-primary m-1 col-4' type="reset">Reset</Button>                
            </div>    
            </Form>
        </div>
                                
           
        </>
    );
  
}

// //--------------------validate
// const validate=(valores)=>{
    
//     let errores = {};
    
//     if(!valores.nombre){
//         errores.nombre = 'Por favor ingresa un nombre de unidad'
//     } else if(!expresiones.nombre.test(valores.nombre)){
//         errores.nombre = mensajesError.nombre;
//     }
//     if(!valores.abreviatura){
//         errores.abreviatura = 'Por favor ingresa una abreviatura a la unidad'
//     } else if(!expresiones.abreviatura.test(valores.abreviatura)){
//         errores.abreviatura = mensajesError.abreviatura
//     }
//     if(!valores.telefono){
//         errores.telefono = 'Por favor ingresa un telefono de contacto'
//     } else if(!expresiones.telefono.test(valores.telefono)){
//         errores.telefono = mensajesError.telefono
//     }
//     if(!valores.sitio_web){
//         errores.sitio_web = 'Por favor ingresa una pagina de referencia'
//     } else if(!expresiones.sitio_web.test(valores.sitio_web)){
//         errores.correo = mensajesError.sitio_web
//     }
    
//     if(!valores.correo){
//         errores.correo = 'Por favor ingresa un correo electronico de contacto'
//     } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
//         errores.correo = mensajesError.correo
//     }
//     if(valores.telefono_alternativo && !expresiones.telefono_alternativo.test(valores.telefono_alternativo)){
//         errores.telefono_alternativo = mensajesError.telefono_alternativo
//     }
//     if(!valores.direccion){
//         errores.correo = 'Por favor ingresa una direccion de referencia de la unidad'
//     } else if(!expresiones.direccion.test(valores.correo)){
//         errores.correo = mensajesError.direccion
//     }

//     return errores;
// }
//-------------------------sinFormik------------
import React, { useState } from 'react';
import FieldContent from '../../componentes/FieldContent';
import { Form, Button, FormText } from 'react-bootstrap';
import atributosUnidad from './unidad';
//import { API } from '../../conexiones/Conexion';

export default function FormUnidad (){    

const[datos,setDatos]=useState({
    nombre:"",
    abreviatura:"",
    telefono:"",
    sitio_web:"",
    correo:"",
    telefono_alternativo:"",
    direccion:"",
    responsable:""
});
const [errors, setErrors]=useState({
    nombreError:"",
    abreviaturaError:"",
    telefonoError:"",
    sitio_webError:"",
    correoError:"",
    telefono_alternativoError:"",
    direccionError:"",
    responsableError:""
});
const [isValido,setValido]=useState(false);

const expresiones=atributosUnidad.map((atributo)=>(
    atributo.expresion
))

const mensajesError=atributosUnidad.map((atributo)=>(
    atributo.mensaje
));

const handleChange=(e,name)=>{
    const {value}=e.target;
    setDatos({
        ...datos, 
        [name]:value
    });
};

const validate=(valores)=>{        

        if(valores.nombre===""){
            setErrors({...errors, nombreError:'Por favor ingresa un nombre de unidad'})
        } else if(!expresiones.nombre.test(valores.nombre)){
            setErrors({...errors,nombreError:mensajesError.nombre})
        }

        if(valores.abreviatura===""){
            setErrors({...errors, abreviaturaError:'Por favor ingresa una abreviatura a la unidad'})            
        } else if(!expresiones.abreviatura.test(valores.abreviatura)){
            setErrors({...errors, abreviaturaError:mensajesError.abreviatura})
        }

        if(valores.telefono===""){
            setErrors({...errors, telefonoError:'Por favor ingresa un telefono de contacto'})
        } else if(!expresiones.telefono.test(valores.telefono)){
            setErrors({...errors, telefonoError:mensajesError.telefono})
        }

        if(valores.sitio_web===""){
            setErrors({...errors, sitio_webError:'Por favor ingresa una pagina de referencia'})
        } else if(!expresiones.sitio_web.test(valores.sitio_web)){
            setErrors({...errors, sitio_webError:mensajesError.sitio_web})
        }

        if(valores.correo===""){
            setErrors({...errors, correoError:'Por favor ingresa un correo electronico de contacto'})
        } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
            setErrors({...errors, correoError:mensajesError.correo})
        }

        if(valores.telefono_alternativo && !expresiones.telefono_alternativo.test(valores.telefono_alternativo)){
            setErrors({...errors, telefono_alternativoError:mensajesError.telefono_alternativo})
        }

        if(valores.direccion===""){
            setErrors({...errors, direccionError:'seleccione responsable'})
        } else if(!expresiones.direccion.test(valores.correo)){
            setErrors({...errors, direccionError:mensajesError.direccion})
        }
}

let mensajeInvalid=null;
const handleSubmit=(e)=>{
    e.preventDefault();    

    validate(datos);
    if(!errors){
        setValido(true);
        // const body=JSON.stringify(datos);
        // API.post(body);
    }else{
        mensajeInvalid="Verifique sus datos antes de enviar";
    }
    console.log("prueba de Validacion",datos);
}


    return (         
        <>
        
        <div>                
            <h3>Nueva Unidad</h3>       
        </div>                 
        <div className='container justify-content-md-center'> 
        
            <Form onSubmit={handleSubmit}>
            <div className='row align-items-center'>
            <FieldContent 
                etiqueta="Nombre" 
                tipo="text" 
                name="nombre"        
                onChange={e=>handleChange(e,"nombre")} 
                error={errors.nombreError}
                />              
            <FieldContent 
                etiqueta="Abreviatura" 
                tipo="text" 
                name="abreviatura" 
                onChange={e=>handleChange(e,"abreviatura")}         
                error={errors.abreviaturaError}
                />
            <FieldContent 
                etiqueta="Telefono" 
                tipo="text" 
                name="telefono" 
                onChange={e=>handleChange(e,"telefono")}         
                error={errors.telefonoError}
                />
            <FieldContent 
                etiqueta="Pagina de Referencia" 
                tipo="text" 
                name="pagina" 
                onChange={e=>handleChange(e,"sitio_web")}         
                error={errors.sitio_webError}
                />
            <FieldContent 
                etiqueta="Correo Contacto" 
                tipo="email" 
                name="correo" 
                onChange={e=>handleChange(e,"correo")}         
                error={errors.correoError}
                />
            <FieldContent 
                etiqueta="Telefono Alternativo" 
                tipo="text" 
                name="telefono_alternativo" 
                onChange={e=>handleChange(e,"telefono_alternativo")}         
                error={errors.telefono_alternativoError}
                />
            <FieldContent 
                etiqueta="Ubicacion" 
                tipo="text" 
                name="direccion" 
                onChange={e=>handleChange(e,"direccion")}         
                error={errors.direccionError}
                />        
            <FieldContent 
                etiqueta="Responsable" 
                tipo="select" 
                name="responsable" 
                onChange={e=>handleChange(e,"responsable")}         
                error={errors.responsableError}
                />
            </div>                
            <div className='row align-items-center'>                
                <Button className='btn btn-primary m-1 col-sm-2' type="submit">Crear</Button>                
                <Button className='btn btn-primary m-1 col-sm-2' type="reset">Reset</Button>                
                {isValido===true?<FormText>{mensajeInvalid}</FormText>:null}
            </div>    
            </Form>
        
        </div>
                                
           
        </>
    );
  
}

//---------------------------------otherform///////////////////
import React, { useState } from 'react';
import FieldContent from '../../componentes/FieldContent';
import { Form, Button } from 'react-bootstrap';
import atributosUnidad from './unidad';
//import { API } from '../../conexiones/Conexion';

export default function FormUni (){    

const[datos,setDatos]=useState({
    nombre:"",
    abreviatura:"",
    telefono:"",
    sitio_web:"",
    correo:"",
    telefono_alternativo:"",
    direccion:"",
    responsable:""
});
const [errors, setErrors]=useState({
    nombreError:"",
    abreviaturaError:"",
    telefonoError:"",
    sitio_webError:"",
    correoError:"",
    telefono_alternativoError:"",
    direccionError:"",
    responsableError:""
});
const [isValido,setValido]=useState(false);

const expresiones=atributosUnidad.map((atributo)=>(
    atributo.expresion
))

const mensajesError=atributosUnidad.map((atributo)=>(
    atributo.mensaje
));

const handleChange=(e,name)=>{
    const {value}=e.target;
    setDatos({
        ...datos, 
        [name]:value
    });
};

const validate=(valores)=>{        
    let errors={}
        if(valores.nombre===""){
            errors.nombreError='Por favor ingresa un nombre de unidad'
        } else if(!expresiones.nombre.test(valores.nombre)){
            errors.nombreError=mensajesError.nombre
        }

        if(valores.abreviatura===""){
            errors.abreviaturaErrorabreviaturaError='Por favor ingresa una abreviatura a la unidad'
        } else if(!expresiones.abreviatura.test(valores.abreviatura)){
            errors.abreviaturaError=mensajesError.abreviatura
        }

        if(valores.telefono===""){
            errors.telefonoError='Por favor ingresa un telefono de contacto'
        } else if(!expresiones.telefono.test(valores.telefono)){
            errors.telefonoError=mensajesError.telefono
        }

        if(valores.sitio_web===""){
            errors.sitio_webError='Por favor ingresa una pagina de referencia'
        } else if(!expresiones.sitio_web.test(valores.sitio_web)){
            errors.sitio_webError=mensajesError.sitio_web;
        }

        if(valores.correo===""){
            errors.correoError='Por favor ingresa un correo electronico de contacto';
        } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
            errors.correoError=mensajesError.correo
        }

        if(valores.telefono_alternativo && !expresiones.telefono_alternativo.test(valores.telefono_alternativo)){
            errors.telefono_alternativoError=mensajesError.telefono_alternativo
        }

        if(valores.direccion===""){
            errors.direccionError='seleccione responsable'
        } else if(!expresiones.direccion.test(valores.correo)){
            errors.direccionError=mensajesError.direccion
        }
}

let mensajeInvalid=null;
const handleSubmit=(e)=>{
    e.preventDefault();    

    validate(datos);
    if(!errors){
        setValido(true);
        // const body=JSON.stringify(datos);
        // API.post(body);
    }else{
        mensajeInvalid="Verifique sus datos antes de enviar";
    }
    //console.log("prueba de Validacion",datos);
}

console.log(datos)
    return (         
        <>
        
        <div>                
            <h3>Nueva Unidad</h3>       
        </div>                 
        <div className='container justify-content-md-center'> 
        
            <Form onSubmit={handleSubmit}>
            <div className='row align-items-center'>
            <FieldContent 
                etiqueta="Nombre" 
                tipo="text" 
                name="nombre"        
                onChange={e=>handleChange(e,"nombre")} 
                error={errors.nombreError}
                valor={datos.nombre}
                />              
            <FieldContent 
                etiqueta="Abreviatura" 
                tipo="text" 
                name="abreviatura" 
                onChange={e=>handleChange(e,"abreviatura")}         
                error={errors.abreviaturaError}
                />
            <FieldContent 
                etiqueta="Telefono" 
                tipo="text" 
                name="telefono" 
                onChange={e=>handleChange(e,"telefono")}         
                error={errors.telefonoError}
                />
            <FieldContent 
                etiqueta="Pagina de Referencia" 
                tipo="text" 
                name="pagina" 
                onChange={e=>handleChange(e,"sitio_web")}         
                error={errors.sitio_webError}
                />
            <FieldContent 
                etiqueta="Correo Contacto" 
                tipo="email" 
                name="correo" 
                onChange={e=>handleChange(e,"correo")}         
                error={errors.correoError}
                />
            <FieldContent 
                etiqueta="Telefono Alternativo" 
                tipo="text" 
                name="telefono_alternativo" 
                onChange={e=>handleChange(e,"telefono_alternativo")}         
                error={errors.telefono_alternativoError}
                />
            <FieldContent 
                etiqueta="Ubicacion" 
                tipo="text" 
                name="direccion" 
                onChange={e=>handleChange(e,"direccion")}         
                error={errors.direccionError}
                />        
            <FieldContent 
                etiqueta="Responsable" 
                tipo="select" 
                name="responsable" 
                onChange={e=>handleChange(e,"responsable")}         
                error={errors.responsableError}
                />
            </div>                
            <div className='row align-items-center'>                
                <Button className='btn btn-primary m-1 col-sm-2' type="submit">Crear</Button>                
                <Button className='btn btn-primary m-1 col-sm-2' type="reset">Reset</Button>                
                {/* {isValido===true?<FormText>{mensajeInvalid}</FormText>:null} */}
            </div>    
            </Form>
        
        </div>
                                
           
        </>
    );
  
}