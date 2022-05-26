import React, { useState } from "react";
//import { servicios } from "../conexiones/Servicios";
import { API_REST } from "../conexiones/Conexion";
import axios from "axios";
import { Button } from "react-bootstrap";

const FormFile2=()=>{
    const [file,setFile]=useState(null);
    const convertirb64=(archivo)=>{
        Array.from(archivo).forEach(archivo=>{
            const reader =new FileReader();
            reader.readAsDataURL(archivo);
            reader.onload=function(){
                // let arrayAuxiliar=[];
                let base64 = reader.result;
                console.log(base64);
                setFile(base64);                
            }
        })
    }
    const enviarArchivo=()=>{
        const url=API_REST.url;
        console.log("prueba de retorn");
        axios.post(url+'/registrar-excel', file).then(res=>{
           console.log(file)
        });}
    
    return(
        <div>
            <label>Ingrese un archivo</label>
            <input type={"file"} multiple onChange={(e)=>convertirb64(e.target.files )}/>
            <Button onClick={enviarArchivo}>Enviar</Button>
        </div>
    );
}

export default FormFile2;