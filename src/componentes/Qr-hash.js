import React, { useState } from "react";
import QRCode from "react-qr-code";
// import { HashRouter } from "react-router-dom";
// import fondoUmss from '../assets/imagenes/logoUMSS.png'

export const QrWithHash =(valor)=>{
    const [llave, setLlave]=useState('');

    function generarQR(){
        setLlave({valor})
    }

    return(
        <>
        <div>
            <QRCode
                title="qr-verificacion"                
                bgColor="white"
                fgColor="black"
                size={100}
                value={llave}
            />
            {/* <img src={fondoUmss} className="col-sm-1"/> */}
            
            <p>{llave}</p>            
        </div>
        </>
    );

}