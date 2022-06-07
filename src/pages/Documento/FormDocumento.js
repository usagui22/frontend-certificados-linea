import React from "react";
import { Form } from "react-bootstrap";
import FieldContent from "../../componentes/FieldContent";

export const FormDocumento=()=>{
    return(
        <>
        <div>
            <h3>Nuevo Certificado</h3>
            <Form>
                <FieldContent 
                    etiqueta="Nombre"
                    tipo="text"
                    pholder="El siguiente campo contiene nombre de Certificado"/>
            </Form>
        </div>
        </>
    );
}