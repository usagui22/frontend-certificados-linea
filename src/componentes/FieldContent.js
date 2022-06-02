import React from "react";
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";


 const FieldContent=({label,nombre,pholder,tipo,change})=>{    

    return(
        <div className="col-sm-6 ">
            <FormLabel htmlFor={nombre}>{label}</FormLabel>
            <FormGroup>
                <FormControl                                        
                    className={`shadow-none`}
                    id={nombre}
                    type={tipo}
                    placeholder={pholder}      
                    onChange={change}                                                                      
                    autoComplete="off"
                />                
            </FormGroup>
        </div>
    );
}

export default FieldContent;