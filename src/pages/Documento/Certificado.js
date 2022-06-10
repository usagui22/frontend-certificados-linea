import React, { Component } from "react";
import { Button, ButtonGroup, Image } from "react-bootstrap";
//import { atributosUsuario } from "../Usuario/usuario";
//import atributosDocumento from './documento';
import image_fondo from "../../assets/imagenes/Certificado.png";
import fondoUMSS from "../../assets/imagenes/logoUMSS.png";
import jsPDF from "jspdf";
import { QrWithHash } from "../../componentes/Qr-hash";
import html2canvas from "html2canvas";
//import atributosEvento from "../Evento/evento";

// const fondo= image_fondo;//ruta de imagen

export  class Certificado extends Component{
   constructor(props){
       super(props)
       this.state={ 
        nombre_evento: "Curso de Desarrollo y Emision de Programas Moviles",//atributosEvento.nombre;
    
        descripcion:"En reconocimiento por su aprobacion dentro las actividades del evento mencionado.",//atributosDocumento.descripcion;
        
        datosUsuario:{        
            nombres:"Gabriel",
            apellido_paterno:"Torrez", 
            apellido_materno:"Cespedes"
        }
    }
   }
    
    
    generarPDF=()=>{
        
        let doc=new jsPDF("l","pt","letter");
        const contenido=document.getElementById("contenido");

        html2canvas(contenido)
        .then((canvas)=>{
            const imgData=canvas.toDataURL('image/png')
            doc.addImage(image_fondo,'PNG',0,0)
            doc.addImage(imgData,'PNG',1,1);
            doc.save("pdf-prueba.pdf");
        })
       
        
    }

    guardarFecha=()=>{
        console.log("guardarFecha");

    }

    // generarAlerta=()=>{
    //     console.log("generar Alerta");
    // }

    // compartirPDF=()=>{
    //     console.log("Compartir Enlace");
    // }}
    // const qr={generarQR};
    render(){
    return(
        
        <div bg-sz="cover" className="container mw-50 mh-75">    
        
            <div id="contenido" >
                <div className="titulo-certificado " >
                
                    <Image src={fondoUMSS} className="col-sm-1 float-end"/>
                    <h5>
                        {this.state.nombre_evento}                        
                    </h5>
                    <h1>CERTIFICADO</h1>   
                    
                </div>            
                            
                <div className="contenido-certificado">
                    <h5>                        
                         {this.state.datosUsuario.apellido_paterno} 
                         {this.state.datosUsuario.apellido_materno}                        
                         {this.state.datosUsuario.nombres} 
                    </h5>
                    <h6>
                        {this.state.descripcion}                    
                    </h6>
                </div>
                <div className="container codigo-certificado">
                    
                    <div className="col-sm-4">
                        {/* codigos QR */}
                        {/* <Image src={codigoQR} className="rounded float-start h-50 w-50 p-3"/> */}
                        <QrWithHash valor="UMSS"/>                        
                    </div>                                        
                
                </div>
            </div>
            {/* <img src={fondo} className="w-50 h-75 img-fluid" alt="Max-width 100%"/>     */}
            <div className="float-end">
            <ButtonGroup className=" col mb-2">
                <Button onClick={this.generarPDF}>Descargar</Button>
                <Button onClick={this.guardarFecha}>Confirmar</Button>
                {/* <Button onClick={this.generarAlerta}>Reportar</Button> */}
                {/* <Button onClick={this.compartirPDF}>Compartir</Button> */}
            </ButtonGroup>
            </div>
        </div> 
        
    );

    }
}