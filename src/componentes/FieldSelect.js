import React from "react";
import { FormLabel, FormText } from "react-bootstrap";
import Select from "react-select";

export const FieldSelect =(props)=>{
    const {nombre, porDefecto, etiqueta, expresion, mensajeError, estado, setEstado, opciones}=props;  

    function onChange(evt){
        setEstado({...estado, campo:evt.target.value});
    }

    function validarSelect(evt){
        let esValido=false;
        // let mandarAlerta=null;
        if(estado!==porDefecto){
            if(expresion.test(estado)){                
                esValido=true;
            }else {
                // mandarAlerta={<FormText>{mensajeError}</FormText>};
                console.log("error responsable no existe")
            }
        }else{
            // mandarAlerta={<FormText>El campo no puede estar vacio</FormText>};
            console.log("error no se ha seleccionado responsable")
        }
        return {esValido};
    }

    return(
        <div>
            <FormLabel htmlFor={nombre} >{etiqueta}</FormLabel>
            <Select                
                name={nombre}
                options={opciones}
                value={validarSelect}                
                onClick={onChange}
                placeholder={porDefecto}                
            />            
            {validarSelect.esValido?<FormText>{mensajeError}</FormText>:''}
        </div>
    );
}


