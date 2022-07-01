
import axios from "axios";
import { API } from "./Conexion";

export const servicios ={    
    postFile:(file)=> new Promise(
        axios.post(API.url+'/registrar-excel', file)
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
        axios.get(API.url+'/listar-unidades')
        .then(res=>{
            
        })
    ),
    postLogin:()=>new Promise(
        axios.post(API)
    )
}
//import { API_REST } from "./Conexion";

// export function servicios (){    
//     postFile:(file)=> new Promise(
//         API_REST.post('/file',data)
//         .then(res=>{
//             // file.convert(b64) = archivo,
//             // axios.post(url,data).then(
//             //     "excel64"="b64",
//             //     "nombre"='nombreFile.csv'
//             // )            
//         })
//     )
// }

