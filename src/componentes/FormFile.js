// import axios from 'axios';
// import React, { Component, useState } from 'react'
// import { Button, Form } from 'react-bootstrap'
// import { API_REST } from '../conexiones/Conexion';

// export class FormFile extends Component {
    
//     cajaFileRef = React.createRef();
//     cajaNombreRef=React.createRef();

//     state={        
//         file:null,
//         status:false
//     }

//     handleFile(e){
//         let file = e.target.file;
//         this.setState({file});
//     }

//     // handleUpload(e){
//     //     let file =this.state.file;
//     //     let formData = new FormData();

//     //     formData.append("doc",file);
//     //     // formData.append("name","Name");

//     //     axios({
//     //         url:API_REST.url,
//     //         path:"/file",
//     //         method:"POST",
//     //         headers:{
//     //             authorization:"el token esta aqui",                
//     //         }, 
//     //         data:formData,
//     //     })
//     //     .then(()=>{})
//     //     .catch((err)=>{})
//     // }

//     nuevoFile=(e)=>{
//         e.preventDefault();
//         const nombreArchivo=this.cajaNombreRef.current.value;
//         const file=this.cajaFileRef.current.value;
//         const body = {}
//         const url=API_REST.url;
        
//         axios.post(url+'/File', body).then(res=>{
//            console.log(res.data)
//         });
//     }

    
//   render() {
//       if(!this.state.status===true)    
//     return (      
//       <div> 
//           <Form onSubmit={this.nuevoFile}>
//             <Form.Label>Ingresar Multiples Usuarios</Form.Label>
//             <Form.Group controlId='formNameSm' className="mb-3">
//                 <Form.Label>Nombre Archivo</Form.Label>
//                 <Form.Control type="text" placeholder="Enter nombre archivo" />
//             </Form.Group>
//             <Form.Group controlId="formFileSm" className="mb-3">
//                 <Form.Label>Seleccionar Documento Excel </Form.Label>
//                 <Form.Control 
//                     type="file" 
//                     size="sm" 
//                     />
//             </Form.Group>
//             <Button className='btn btn-success' onClick={this.nuevoFile()}>Aceptar</Button>            
//           </Form>
//       </div>
//     )
//   }
// }

