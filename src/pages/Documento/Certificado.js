// import { Document, Image, Page } from "@react-pdf/renderer";
import React from "react";
import { Button, ButtonGroup, Image } from "react-bootstrap";
import { atributosUsuario } from "../Usuario/usuario";
//import atributosDocumento from './documento';
import image_fondo from "../../elementos/imagenes/certificado_blanco.jpeg";
import codigoQR from "../../elementos/imagenes/QRCodeOther.jpg";
//import atributosEvento from "../Evento/evento";

const fondo= image_fondo;//ruta de imagen

export const Certificado =()=>{
    
    const nombre_evento= "Curso de Desarrollo y Emision de Programas Moviles";//atributosEvento.nombre;

    const descripcion="En reconocimiento por su aprobacion dentro las actividades del evento mencionado.Iniciando en fecha 23-05-2022 al 29-05-2022";//atributosDocumento.descripcion;
    
    const nombre=[        
        atributosUsuario.nombres,
        atributosUsuario.apellido_paterno, 
        atributosUsuario.apellido_materno
    ];

    function generarQR(){

    }
    const qr={generarQR};
    return(
        <>
        <div className="md " bg-img={fondo} bg-sz="cover">        
            
            <div className="titulo-certificado justify-content-center" >
                <h3>{nombre_evento}</h3>   
                <h1>CERTIFICADO</h1>   
            </div>
            <div className="contenido-certificado">
                <p>{descripcion}</p>
            </div>
            <div className="container ">
                
                <div className="codigo-certificado col-sm-4">
                    <Image src={codigoQR} className="rounded float-start h-25 w-25 p-3"/>
                </div>
                
                {/* <div className="botones-certificado row col-sm-4">
                    <Button>Descargar</Button>
                    <Button>Confirmar Datos</Button>
                    <Button>Corregir</Button>
                </div> */}
                <div>
            <ButtonGroup className=" col mb-2 float-end">
                <Button>Descargar</Button>
                <Button>Confirmar</Button>
                <Button>Reportar</Button>
            </ButtonGroup>
            </div>
            </div>
        </div>
        </>
    );
    
}