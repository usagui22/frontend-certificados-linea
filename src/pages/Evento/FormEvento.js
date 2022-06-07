import React, { useState } from "react";
import { Button, Form, FormText } from "react-bootstrap";
import FieldContent from "../../componentes/FieldContent";

export const FormEvento =()=>{

    const[nombre,setNombre]=useState({campo:'',valido:null});
    const[url_convocatoria,setUrl_Convocatoria]=useState({campo:'',valido:null});
    const[nombre_unidad,setNombre_Unidad]=useState({campo:'',valido:null});
    const[fecha_inicio,setFecha_Inicio]=useState({campo:'',valido:null});
    const[registro_fin,setRegistro_fin]=useState({campo:'',valido:null});
    const[inicio_actividades,setInicio_Actividades]=useState({campo:'',valido:null});
    const[fin_actividades,setFin_Actividades]=useState({campo:'',valido:null});
    const[inicio_emision,setInicio_Emision]=useState({campo:'',valido:null});
    const[fecha_fin,setFecha_Fin]=useState({campo:'',valido:null});
    const[formularioValido,setValido]=useState(false);

    const expresiones={
        nombre:/^\w[a-zA-Z\s]+\.$/,
        url_convocatoria:/^(http?s?:\/\/)?(www\.)?(fb\.me\/e\/)?[0-9A-Za-z./%-]+$/,
        nombre_unidad:/^[a-zA-Z]{20}$/,
        fecha_inicio:/^[0-9-]+$/,
        registro_fin:/^[0-9-]+$/,
        inicio_actividades:/^[0-9-]+$/,
        fin_actividades:/^[0-9-]+$/,
        inicio_emision:/^[0-9-]+$/,
        fecha_fin:/^[0-9-]+$/
    }

    const mensajesError={
        nombreError:"El campo contiene caracteres alfabeticos y debe terminar con .",
        url_convocatoriaError:"El campo solo contiene caracteres alfabeticos y simbolos /-:",
        nombre_unidadError:"El campo solo contiene caracteres alfabeticos",
        fecha_inicioError:"El campo solo contiene caracteres numericos y simbolo -",
        registro_finError:"El campo solo contiene caracteres numericos y simbolo -",
        inicio_actvidadesError:"El campo solo contiene caracteres numericos y simbolo -",
        fin_actvidadesError:"El campo solo contiene caracteres numericos y simbolo -",
        inicio_emisionError:"El campo solo contiene caracteres numericos y simbolo -",
        fecha_finError:"El campo solo contiene caracteres numericos y simbolo -"
    }

    function handleSubmit(e){
        e.preventDefault();
        
    }
    return (         
        // <div>
        //     Ingresar Evento
        // </div>
        <>
        <div className='position-relative '>
        <div className='form-title'>                
            <h3>Nuevo Usuario</h3>       
        </div>                 
        <div className='container justify-content-md-center inputs-formulario'> 
        
            <Form onSubmit={handleSubmit}>
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
                etiqueta="Enlace de Convocatoria" 
                tipo="text" 
                name="url_convocatoria" 
                estado={url_convocatoria}
                setEstado={setUrl_Convocatoria}
                expresion={expresiones.url_convocatoria}
                mensaje={mensajesError.url_convocatoriaError}            
                />
            <FieldContent 
                etiqueta="Unidad" 
                tipo="text" 
                name="nombre_unidad" 
                estado={nombre_unidad}
                setEstado={setNombre_Unidad}
                expresion={expresiones.nombre_unidad}
                mensaje={mensajesError.nombre_unidadError}                
                />
            <FieldContent 
                etiqueta="Fecha Inicio" 
                tipo="date" 
                name="fecha_inicio" 
                estado={fecha_inicio}
                setEstado={setFecha_Inicio}
                expresion={expresiones.fecha_inicio}
                mensaje={mensajesError.fecha_inicioError}                
                />
            <FieldContent 
                etiqueta="Fin de Registro de Participantes" 
                tipo="date" 
                name="registro_fin" 
                estado={registro_fin}
                setEstado={setRegistro_fin}
                expresion={expresiones.registro_fin}
                mensaje={mensajesError.registro_finError}                
                />    
            <FieldContent 
                etiqueta="Inicio de Actividades de Evento" 
                tipo="date" 
                name="inicio_actividades" 
                estado={inicio_actividades}
                setEstado={setInicio_Actividades}
                expresion={expresiones.inicio_actividades}
                mensaje={mensajesError.inicio_actvidadesError}                
                />
            <FieldContent 
                etiqueta="Fin de Actividades de Evento" 
                tipo="date" 
                name="fin_actividades" 
                estado={fin_actividades}
                setEstado={setFin_Actividades}
                expresion={expresiones.fin_actividades}
                mensaje={mensajesError.fin_actvidadesError}                
                />    
            <FieldContent 
                etiqueta="Inicio de Emision de Certificados y Correcciones" 
                tipo="date" 
                name="inicio_emision" 
                estado={inicio_emision}
                setEstado={setInicio_Emision}
                expresion={expresiones.inicio_emision}
                mensaje={mensajesError.inicio_emisionError}                
                />
            <FieldContent 
                etiqueta="Fecha Fin" 
                tipo="date" 
                name="fecha_fin" 
                estado={fecha_fin}
                setEstado={setFecha_Fin}
                expresion={expresiones.fecha_fin}
                mensaje={mensajesError.fecha_finError}                
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