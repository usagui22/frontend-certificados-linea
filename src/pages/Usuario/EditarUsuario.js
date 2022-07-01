
import React, { useState } from "react";
import { Button, Form, FormControl, FormLabel } from "react-bootstrap";
import FieldContent from "../../componentes/FieldContent";
import { API } from "../../conexiones/Conexion";

const EditarUsuario =()=>{
    const [nombres,setNombres]=useState({campo:'',valido:null});
    const [apellido_paterno,setApellidoPaterno]=useState({campo:'',valido:null});
    const [apellido_materno,setApellidoMaterno]=useState({campo:'',valido:null});
    const [genero,setGenero]=useState({campo:'',valido:null});
    const [fecha_nacimiento,setFechaNacimiento]=useState({campo:'',valido:null});
    const [lugar_nacimiento,setLugarNacimiento]=useState({campo:'',valido:null});
    const [celular,setCelular]=useState({campo:'',valido:null});
    const [direccion_actual,setDireccionActual]=useState({campo:'',valido:null});
    const [ocupacion,setOcupacion]=useState({campo:'',valido:null});
    const [correo,setCorreo]=useState({campo:'',valido:null});
    const [correoAlternativo,setCorreoAlternativo]=useState({campo:'',valido:null});
    const [telefono,setTelefono]=useState({campo:'',valido:null});
    const [imagen,setImagen]=useState("");
    const [ci,setCi]=useState({campo:'',valido:null});
    const [lugar_expedito_ci,setLugarExpeditoCi]=useState({campo:'',valido:null});
    const [estado_civil,setEstadoCivil]=useState({campo:'',valido:null});
    const [password,setPassword]=useState({campo:'',valido:null});
    const [body,setBody]=useState({
        nombres:'',
        apellido_paterno:'',
        apellido_materno:'',
        genero:'',
        fecha_nacimiento:'',
        lugar_nacimiento:'',

        direccion_actual:'',
        ocupacion:'',
        correo:'',
        correo_alternativo:'',
        telefono:'',
        celular:'',
        ci:'',
        lugar_expedito_ci:'',
        estado_civil:'',
        password_hash:''
    })

    //formulario con todo los campos para actualizar el perfil de usuario
    const expresion={
        nombres:/^[a-zA-Z]$/,
        apellidoPaterno:/^[a-zA-Z]$/,
        apellidoMaterno:/^[a-zA-Z]$/,
        genero:/^[A-Z]$/,
        fechaNacimiento:/^[0-9]$/,
        lugarNacimiento:/^[A-Za-z]$/,        
        direccionActual:/^[a-zA-Z0-9]$/,
        ocupacion:/^[A-Za-z]$/,
        correo:/^[a-zA-Z0-9]\.[a-z]$/,
        correoAlternativo:/^[a-zA-Z0-9]\.[a-z]$/,
        telefono:/^[0-9]{11}$/,
        celular:/^[0-9]{8}$/,
        ci:/^[0-9A-Z]$/,
        lugarExpeditoCi:/^[A-Z]{5}$/,
        estadoCivil:/^[a-zA-Z]$/,
        password:/^[a-zA-Z0-9-_.*]{8}$/
    };
    const mensajes={
        nombresError:"El campo solo contiene caracteres alfabeticos",
        apellidoPaterno:"El campo solo contiene caracteres alfabeticos",
        apellidoMaterno:"El campo solo contiene caracteres alfabeticos",
        genero:"Seleccione solo una opcion",
        fechaNacimiento:"ingrese una fecha permitida",
        lugarNacimiento:"El campo solo permite caracteres alfabeticos",
        
        direccionActual:"EL campo solo permite caracteres alfabeticos",
        ocupacion:"El campo solo contiene campos alfabeticos",
        correo:"El campo permite caracteres alfanumericos y simbolos @.-_",
        correoAlternativo:"El campo permite caracteres alfanumericos y simbolos @-_.",
        telefono:"El campo solo permite numeros",
        celular:"El campo solo permite numeros",
        ci:"el campo solo permite numeros y caracteres en mayuscula",
        lugarExpeditoCi:"el campo solo permite caracteres afabeticos en mayuscula",
        estadoCivil:"el campo permite solo un estado civil",
        password:"el campo permite caracteres alfanumericos y simbolos-_*"
    };    

    const handleSubmit=()=>{
        let ruta="usuario/editar-usuario";
        if(nombres.valido===true && apellido_paterno.valido===true && apellido_materno.valido===true &&
            genero.valido===true&&fecha_nacimiento.valido===true&&lugar_nacimiento.valido===true &&
            direccion_actual.valido===true&&ocupacion.valido===true&&correo.valido===true&&correoAlternativo.valido===true
            &&telefono.valido===true&& celular.valido===true&&ci.valido===true&&lugar_expedito_ci.valido===true &&
            estado_civil.valido===true && password.valido===true){
                setBody(
                    {
                        nombres:nombres.campo,                        
                        apellido_paterno:apellido_paterno.campo,
                        apellido_materno:apellido_materno.campo,
                        genero:genero.campo,
                        fecha_nacimiento:fecha_nacimiento.campo,
                        lugar_nacimiento:lugar_nacimiento.campo,
                        direccion_actual:direccion_actual.campo,
                        ocupacion:ocupacion.campo,
                        correo:correo.campo,
                        correo_alternativo:correoAlternativo.campo,
                        telefono:telefono.campo,
                        celular:celular.campo,
                        imagen:imagen,
                        ci:ci.campo,
                        lugar_expedito_ci:lugar_expedito_ci.campo,
                        estado_civil:estado_civil.campo,
                        password_hash:password
                    }
                );
            try {
                API.post(ruta,body)
                .then(
                    console.log("La informacion de usuario ha sido actualizado")
                )
            } catch (error) {
                console.log("No se puede actualizar la informacion")
            }
        }
    }

    return (
        <>
                <div>
                    <h3>Actualizar Usuario</h3>
                </div>
                <div >
                    <Form  onSubmit={handleSubmit}>
                    <div className='row align-items-center inputs-items mw-100'>
                        <FieldContent
                            etiqueta="Nombres"
                            tipo="text"
                            name="nombres"
                            estado={nombres}
                            setEstado={setNombres}
                            expresion={expresion.nombres}
                            mensaje={mensajes.nombresError}
                        />
                        <FieldContent
                            etiqueta="Apellido Paterno"
                            tipo="text"
                            name="apellido_paterno"
                            estado={apellido_paterno}
                            setEstado={setApellidoPaterno}
                            expresion={expresion.apellidoPaterno}
                            mensaje={mensajes.apellidoPaterno}
                        />
                        <FieldContent
                            etiqueta="Apellido Materno"
                            tipo="text"
                            name="apellido_materno"
                            estado={apellido_materno}
                            setEstado={setApellidoMaterno}
                            expresion={expresion.apellidoMaterno}
                            mensaje={mensajes.apellidoMaterno}
                        />
                        <FieldContent
                            etiqueta="Genero"
                            tipo="text"
                            name="genero"
                            estado={genero}
                            setEstado={setGenero}
                            expresion={expresion.genero}
                            mensaje={mensajes.genero}
                        />
                        <FieldContent
                            etiqueta="Fecha de Nacimiento"
                            tipo="text"
                            name="fecha_nacimiento"
                            estado={fecha_nacimiento}
                            setEstado={setFechaNacimiento}
                            expresion={expresion.fechaNacimiento}
                            mensaje={mensajes.fechaNacimiento}
                        />
                        <FieldContent
                            etiqueta="Lugar de Nacimiento"
                            tipo="text"
                            name="lugar_nacimiento"
                            estado={lugar_nacimiento}
                            setEstado={setLugarNacimiento}
                            expresion={expresion.lugarNacimiento}
                            mensaje={mensajes.lugarNacimiento}
                        />
                        <FieldContent
                            etiqueta="Direccion Actual"
                            tipo="text"
                            name="direccion_actual"
                            estado={direccion_actual}
                            setEstado={setDireccionActual}
                            expresion={expresion.direccionActual}
                            mensaje={mensajes.direccionActual}
                        />
                        <FieldContent
                            etiqueta="Ocupacion"
                            tipo="text"
                            name="ocupacion"
                            estado={ocupacion}
                            setEstado={setOcupacion}
                            expresion={expresion.ocupacion}
                            mensaje={mensajes.ocupacion}
                        />
                        <FieldContent
                            etiqueta="Correo Contacto"
                            tipo="text"
                            name="correo"
                            estado={correo}
                            setEstado={setCorreo}
                            expresion={expresion.correo}
                            mensaje={mensajes.correo}
                        />
                        <FieldContent
                            etiqueta="Correo Alternativo"
                            tipo="text"
                            name="correo_alternativo"
                            estado={correoAlternativo}
                            setEstado={setCorreoAlternativo}
                            expresion={expresion.correoAlternativo}
                            mensaje={mensajes.correoAlternativo}
                        />
                        <FieldContent
                            etiqueta="Telefono"
                            tipo="text"
                            name="telefono"
                            estado={telefono}
                            setEstado={setTelefono}
                            expresion={expresion.telefono}
                            mensaje={mensajes.telefono}
                        />
                        <FieldContent
                            etiqueta="Celular"
                            tipo="text"
                            name="celular"
                            estado={celular}
                            setEstado={setCelular}
                            expresion={expresion.celular}
                            mensaje={mensajes.celular}
                        />
                        <FieldContent
                            etiqueta="CI de Identificacion"
                            tipo="text"
                            name="ci"
                            estado={ci}
                            setEstado={setCi}
                            expresion={expresion.ci}
                            mensaje={mensajes.ci}
                        />
                        <FieldContent
                            etiqueta="Lugar Expedito de CI"
                            tipo="text"
                            name="lugar_expedito_ci"
                            estado={lugar_expedito_ci}
                            setEstado={setLugarExpeditoCi}
                            expresion={expresion.lugarExpeditoCi}
                            mensaje={mensajes.lugarExpeditoCi}
                        />
                        <div>
                            <FormLabel>Insertar Imagen: </FormLabel>
                            <FormControl
                                etiqueta="Imagen"
                                type="file"
                                name="imagen"
                                // estado={imagen}
                                handleChangeImage={(e)=>(setImagen(e.target.files))}                            
                            />
                        </div>
                        <FieldContent
                            etiqueta="Estado Civil"
                            tipo="text"
                            name="estado_civil"
                            estado={estado_civil}
                            setEstado={setEstadoCivil}
                            expresion={expresion.estadoCivil}
                            mensaje={mensajes.estadoCivil}
                        />
                        <FieldContent
                            etiqueta="Contraseña"
                            tipo="text"
                            name="password_hash"
                            estado={password}
                            setEstado={setPassword}
                            expresion={expresion.password}
                            mensaje={mensajes.password}
                        />
                        </div>
                        <div>
                            <Button className='btn btn-primary m-1 col-sm-2' type="submit">Crear</Button>                
                            <Button className='btn btn-primary m-1 col-sm-2' type="reset">Reset</Button>                
                        </div>
                    </Form>
                </div>
            
        </>
    );
}

export default EditarUsuario;