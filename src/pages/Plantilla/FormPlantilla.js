import React, { useEffect, useState } from "react";
import { Button, Form, FormLabel } from "react-bootstrap";
import FieldContent from "../../componentes/FieldContent";
import { API } from "../../conexiones/Conexion";

export default function FormPlantilla(){
    const[opcion, setOpcion]=useState({campo:'',valido:null});
    const[descripcion,setDescripcion]=useState({campo:"",valido:null});
    const [body, setBody]=useState({nombre:'',descripcion:'',plantilla:null});
    
    const archivoBase64= (archivos)=>{        
        Array.from(archivos).forEach(archivo=>{
            let reader = new FileReader();
            reader.readAsDataURL(archivo);
            reader.onload=function(){
                let base64 = reader.result;
                console.log(base64);
                return base64;                
            }
        })                 

    }
    const validarOpcion=(e)=>{
        if(opcion>0){
            setOpcion({...opcion,campo:e.target.value});
            if(opcion==='1'|| opcion==='2' || opcion==='3'){                
                setOpcion({...opcion, valido:'true'});                
            }else{
                setOpcion({...opcion,valido:'false'});
            }
        }
    }

    const cargarPlantilla=async ()=>{
        let archivo = archivoBase64();
        let ruta="plantilla/crear-plantilla";
        switch(opcion){
            case 1: setBody({...body,nombre:'Aprobación'});
            break;
            case 2: setBody({...body, nombre:'Participación'});
            break;
            case 3: setBody({...body,nombre:'Expositor'});
            default: console.log("no se selecciono opcion");
            break;
        }
        try {
            API.post(ruta).then(
                console.log("nueva Plantilla")
            )
        } catch (error) {
            console.log("No se ha guardado registro")
        }
    }

    useEffect(()=>{
        console.log(opcion);
        
        cargarPlantilla();
    },[])

    return(
        <>
        <div>
            <h3>Nueva Plantilla</h3>
        </div>
        <div>
            <Form>
                <div>
                <FormLabel>Tipo de documento</FormLabel>
                <Form.Select aria-label="Default select example" onClick={validarOpcion}>
                    <option>Seleccione un tipo</option>
                    <option value="1">Aprobación</option>
                    <option value="2">Participación</option>
                    <option value="3">Docente Expositor</option>
                </Form.Select>
                </div>
                <FieldContent
                    etiqueta="descripcion"
                    tipo="text"
                    estado={descripcion}
                    setEstado={setDescripcion}
                    expresion={/^\w[a-zA-Z\s]+\.$/}
                    mensaje={"El campo solo permite caracteres alfanumericos y terminar en ."}
                />
                <div>
                <FormLabel>Seleccione archivo</FormLabel>    
                <Form.Group controlId="formFile" className="mb-3">                    
                    <Form.Control type="file" onChange={e=>(e.target.files)}/>
                </Form.Group>
                </div>                
                <div>
                    <Button type="submit">Crear</Button>
                </div>
            </Form>
        </div>
        </>
    );
}