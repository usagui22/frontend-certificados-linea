import React from "react";
import QRCode from "react-qr-code";
import { HashRouter } from "react-router-dom";

export const QrWithHash =()=>{
    return(
        <>
        <div>
            <QRCode
                title="qr-verificacion"
                bgColor="white"
                fgColor="black"
                size={250}
            />
            
        </div>
        </>
    );

}