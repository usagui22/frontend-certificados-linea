
import axios from "axios";
import { API_REST } from "./Conexion";

export const servicios ={    
    postFile:(file)=> new Promise(
        axios.post(API_REST.url+'/registrar-excel', file)
        .then(req=>{
              console.log(file);
        })
        // post('/file',data)
        // .then(res=>{
        //     // file.convert(b64) = archivo,
            // axios.post(url,data).then(
            //     "excel64"="b64",
            //     "nombre"='nombreFile.csv'
            // )            
    ),

    getUnidades:()=>new Promise(
        axios.get(API_REST.url+'/listar-unidades')
        .then(res=>{

        })
    ),
    postLogin:()=>new Promise(
        axios.post(API_REST)
    )
}

