import React from "react";
import { Button, Form, FormSelect as Select} from "react-bootstrap";
import { FieldGenerator } from "../../componentes/FieldGenerator";

export const FormDocumento=()=>{
    return(
        <>
        <div>
            <h3>Nuevo Certificado</h3>
        </div>
        <div>
            <Form>
            <div className="lista-usuarios">
            <Select aria-label="Default select example">
                <option>Seleccione Usuario: </option>
                <option value="1">Usuario 1</option>
                <option value="2">Usuario 2</option>
                <option value="3">...</option>
            </Select>            
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