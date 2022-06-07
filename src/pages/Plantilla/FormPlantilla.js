import React, { useState } from "react";
import { Button, Form, FormLabel } from "react-bootstrap";
import FieldContent from "../../componentes/FieldContent";

export default function FormPlantilla(){
    
    const[descripcion,setDescripcion]=useState({campo:"",valido:null})
    
    return(
        <>
        <div>
            <h3>Nueva Plantilla</h3>
        </div>
        <div>
            <Form>
                <div>
                <FormLabel>Tipo de documento</FormLabel>
                <Form.Select aria-label="Default select example">
                    <option>Seleccione un tipo</option>
                    <option value="aprobacion">Aprobacion</option>
                    <option value="participacion">Participacion</option>
                    <option value="expositor">Expositor</option>
                </Form.Select>
                </div>
                <FieldContent
                    etiqueta="descripcion"
                    tipo="text"
                    estado={descripcion}
                    setEstado={setDescripcion}
                    expresion={/^\w[a-zA-Z\s]+\.$/}
                    mensaje={"El campo solo permite caracteres alfanumericos y terminar en ."}
                />
                <div>
                <FormLabel>Seleccione archivo</FormLabel>    
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Default file input example</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>
                </div>                
                <div>
                    <Button type="submit">Crear</Button>
                </div>
            </Form>
        </div>
        </>
    );
}