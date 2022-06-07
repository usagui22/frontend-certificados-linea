import React, { useState } from "react";
//import { servicios } from "../conexiones/Servicios";
//import { API_REST } from "../conexiones/Conexion";
//import axios from "axios";
import { Button, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { API } from "../../conexiones/Conexion";


const FormFile2=()=>{
    const [file,setFile]=useState(null);
    const [nombre, setName]=useState(null);

    const convertirb64=(archivo)=>{
        Array.from(archivo).forEach(archivo=>{
            const reader =new FileReader();
            reader.readAsDataURL(archivo);
            reader.onload=function(){
                
                let base64 = reader.result;
                console.log(base64);
                setFile(base64);     
                setName(archivo.name);
            }            
        })
    }
    const enviarArchivo=()=>{
        // const url=API;
        console.log("prueba de retorn", nombre);
        // servicios.postFile(file, nombre);
        // axios.post(url+'/registrar-excel', file).then(res=>{
            const body = {
                excelb64: file,
                name:nombre
            }
            console.log("prueba de return");
            API.post('/usuario/registrar-excel', body).then(res=>{
            }).catch(err => console.log(err))
        ;}
    
    return(
        <>
        <div>
            <h3>Crear Usuarios en Archivo</h3>
        </div>
        <div>
            <FormGroup controlId="formFile" className="mb-3">
            <FormLabel >Seleccione un archivo: </FormLabel>
            <FormControl type={"file"} onChange={(e)=>convertirb64(e.target.files)}/>
            <Button className="btn-enviar mt-2" onClick={enviarArchivo}>Enviar</Button>
            </FormGroup>
        </div>
        </>
    );
}

export default FormFile2;