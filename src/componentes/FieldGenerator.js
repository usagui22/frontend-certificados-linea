import React from "react";
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";

export const FieldGenerator=(props)=>{
    const {name,etiqueta,tipo}=props;
    return(
        <FormGroup>
            <FormLabel forhtml={name}>{etiqueta}</FormLabel>
            <FormControl
                type={tipo}
                // value={funcionGeneradora}
            />
        </FormGroup>
    );
}