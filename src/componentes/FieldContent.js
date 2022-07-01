import React from "react";
import { FormControl, FormGroup, FormLabel, FormText } from "react-bootstrap";


 const FieldContent=(props)=>{    
    const {etiqueta, name,tipo,pholder,estado, setEstado,id,expresion,mensaje, funcion}=props;

    function handleChange(e){
        // console.log(e.target.value);
        setEstado({...estado, campo:e.target.value})
    }
    function validate(){
        // console.log(expresion);
        if(expresion){
            if(expresion.test(estado.campo)){
                // console.log(expresion.test(estado.campo))
                console.log("input correcto");
                setEstado({...estado,valido:'true'});
            }else{
                console.log("input incorrecto");
                setEstado({...estado,valido:'false'});
            }
        }

        if(funcion){
            funcion();
        }
    }

    return(
        <div className="col-sm-6">
            <FormLabel htmlFor={name} className={estado.valido==='false'?'is-invalid':null}>{etiqueta} :</FormLabel>
            <FormGroup>
                <FormControl                                        
                    className={estado.valido==='false'?'is-invalid':null}
                    id={id}
                    type={tipo}
                    placeholder={pholder}                                                                
                    autoComplete="off"
                    value={estado.campo}
                    onChange={handleChange}
                    onKeyUp={validate}
                    onBlur={validate}
                    valido={estado.valido}
                    //required
                />                
            </FormGroup>
            {estado.valido==='false'?<FormText className="mensaje-error text-danger invalid-feedback">{mensaje}</FormText>:null}
        </div>
    );
}

export default FieldContent;
