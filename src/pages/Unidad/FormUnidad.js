// import React, { useState } from 'react';

// import FielContent from '../../componentes/FieldContent';
// import { Form, Button } from 'react-bootstrap';


// export default function FormUnidad (){    
// const valoresIniciales={nombre:""};
// // [
// //     atributosUnidad.map((atributo)=>({
// //         name: atributo.name,
// //         valor: atributo.valoresIniciales
// // }))]

// const [datos, setDatos]=useState(valoresIniciales);

// const [FormErrors, setFormErrors]=useState({});

// const handleChange=(e)=>{
//     const {name, value}=e.target;
//     setDatos({...datos, [name]:value});
// };

// const handleSubmit=(e)=>{
//     e.preventDefault();
//     setFormErrors(validate(datos));
// };

// const validate=(values)=>{
//     const errors={};
//     const regex=/^\w+[a-zA-ZÀ-ÿ\s]+$/;
//     if(!values.nombre){
//         errors.nombre="El campo solo puede contener caracteres alfabeticos"
//     }
// }
 
//     return (
         
//         <>
//         <div>                
//             <h3>Nueva Unidad</h3>       
//         </div>                 
//         <div className='container justify-content-md-center'> 
//             <Form onSubmit={handleSubmit}>
//             <div className='row align-items-center'>
//                 <FielContent label="Nombre" tipo="text" name="nombre" change={handleChange} value={datos.nombre}/>
//                 {/* <FieldContent label="Abreviatura" tipo="text" name="abreviatura" change={this.handleChange}/>
//                 <FieldContent label="Pagina de Referencia" tipo="text" name="pagina" change={this.handleChange}/>
//                 <FieldContent label="Correo Contacto" tipo="email" name="correo" change={this.handleChange}/>
//                 <FieldContent label="Telefono Alternativo" tipo="text" name="telefono_alternativo" change={this.handleChange}/>
//                 <FieldContent label="Ubicacion" tipo="text" name="direccion" change={this.handleChange}/>
//                 <FieldContent label="Telefono" tipo="text" name="telefono" change={this.handleChange}/>
//                 <FieldContent label="Responsable" tipo="text" name="responsable" change={this.handleChange}/> */}
//             </div>                
            
//                 <Button className='btn btn-primary mt-3 mr-3' type="submit">Crear</Button>                
            
//             </Form>
//         </div>
                                
           
//         </>
//     );
  
// }

