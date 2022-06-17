
import React from "react";
import { Form, FormText } from "react-bootstrap";
import FieldContent from "../../componentes/FieldContent";

const EditarUsuario =()=>{
    //formulario con todo los campos para actualizar el perfil de usuario
    return (
        <>
                <div>
                    <h3>Actualizar Usuario</h3>
                </div>
                <div>
                    <Form>
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
                        <FieldContent
                            etiqueta="Imagen"
                            tipo="text"
                            name="imagen"
                            estado={imagen}
                            setEstado={setImagen}
                            expresion={expresion.imagen}
                            mensaje={mensajes.imagen}
                        />
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
                            estado={password_hash}
                            setEstado={setPasswordHash}
                            expresion={expresion.passwordHash}
                            mensaje={mensajes.passwordHash}
                        />
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