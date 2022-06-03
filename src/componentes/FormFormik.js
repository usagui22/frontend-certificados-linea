import { Button, TextField } from '@mui/material';
import { Form, FormikProvider, useFormik } from 'formik'
import React from 'react'

function FormFormik() {
    const validateNombres=(valores)=>{
        let errores={}
        if(valores.nombres===""){
            errores.nombres='Por favor ingresa un nombre de unidad'
        } else if(!/^\w+[a-zA-ZÀ-ÿ\s]+$/.test(valores.nombres)){
            console.log(/^\w+[a-zA-ZÀ-ÿ\s]+$/.test(valores.nombres))
            errores.nombres="EL campo contiene caracteres alfabeticos";
        }
        console.log(valores.nombres,errores)

        return errores;
    }
    const formik=useFormik({
        initialValues:{
            "nombres":""
        },
        validate:validateNombres,
        
        onSubmit:(valores,{resetForm})=>{
            console.log(valores)
            resetForm();
        }
    });
    const {values,errors,touched,handleChange,handleSubmit,getFieldProps}=formik;
  return (
      
    <FormikProvider value={formik}>
        <Form onSubmit={handleSubmit}>
            <TextField {...getFieldProps("nombres")} error={Boolean(touched.nombres && errors.nombres)} helperText={touched.nombres && errors.nombres} />
            <Button type="submit">Submit</Button>
        </Form>
    </FormikProvider>
  )
}

export default FormFormik