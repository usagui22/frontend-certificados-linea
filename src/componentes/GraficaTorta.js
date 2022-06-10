import React from "react";
import { Pie } from "react-chartjs-2";

export const Torta=()=>{
    
    const datos=[
        {
            id:1,
            Evento: 2,
            Usuarios:13,
            Confirmados:10,
        },
        {
            id:2,
            Evento: 3,
            Usuarios:25,
            Confirmados:18,
        },
        {
            id:3,
            Evento: 1,
            Usuarios:9,
            Confirmados:5,
        }
    ]

    return(
        <Pie data={datos}/>
    );

}