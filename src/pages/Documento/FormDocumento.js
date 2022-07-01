import React, { useEffect, useState } from "react";
import { Button, Form, FormLabel, FormSelect} from "react-bootstrap";
import { FieldGenerator } from "../../componentes/FieldGenerator";
import { API } from "../../conexiones/Conexion";

export const FormDocumento=()=>{
    const [lista,setLista]=useState([]);

    const cargarParticipantes= async() =>{
        let path="usuario/listar-participantes";
        // console.log("ingresando a carga de datos")
        try {                         
            const res = await API.get(path)
            // console.log("cargando datos a la lista")
            setLista(res.data);
                                 
        } catch (error) {
            // console.log("Lista de usuarios no encontrada")
        }
        
    }

    useEffect(()=>{
        cargarParticipantes();
    },[]);

    return(
        <>
        <div>
            <h3>Nuevo Certificado</h3>
        </div>
        <div>
            <Form>
            <div className="lista-usuarios">
                <FormLabel>Seleccionar Participante: </FormLabel>
            <FormSelect>
                <option>Seleccione Participante </option>
                {/*<option value="1">Usuario 1</option>
                <option value="2">Usuario 2</option>
                <option value="3">...</option> */}
                {lista.map((participante,k)=>{
                    return(
                    <option key={k} value={participante.id}>
                        {participante.nombres}  
                         {participante.apellido_paterno}  
                         {participante.apellido_materno}
                    </option>
                    )}
                )}
            </FormSelect>            
            </div>
            <div className="hash-confirmado-valido">                
                <FieldGenerator
                    etiqueta="Hash Generador: "
                    tipo="text"
                    name="hash"
                />
            </div>
            <div>                
                <FieldGenerator
                    etiqueta="Confirmacion de Certificado"
                    tipo="date"
                    name="confirmacion"
                    />
            </div>
            <div>                
                <FieldGenerator
                    etiqueta="Enlace Generado para Compartir"
                    tipo="text"
                    name="path"
                    />
            </div>
            <div className="p-3">
                <Button className="btn btn-primary m-1 col-sm-4" type="submit">Aceptar</Button>
                <Button className="btn btn-primary m-1 col-sm-4">Cancelar</Button>
            </div>
            </Form>
        </div>
        </>
    );
}