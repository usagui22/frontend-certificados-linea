import jsPDF from 'jspdf';
import React, { Component } from 'react'
import { QrWithHash } from '../../componentes/Qr-hash';

export default class Certificado2 extends Component {
    
       
    constructor(props){
        super(props)
        this.state ={}
    };

    generatePDF = () => {
      let doc = new jsPDF('landscape', 'pt','letter');

      doc.html(document.querySelector("#content"),{
          callback: function(doc){
              doc.save("pdf_prueba.pdf");
          }
      })
    //   html(document.querySelector("#content",{
    //     callback: function(pdf){
    //         pdf.save('pdf-prueb.pdf');
    //     }
    //   }
    //   ))
    //   doc.text(20, 20, 'This is the first title.')

    //   doc.setFont('helvetica')
    //   doc.setFontType('normal')
    //   doc.text(20, 60, 'This is the second title.')

    //   doc.setFont('helvetica')
    //   doc.setFontType('normal')
    //   doc.text(20, 100, 'This is the thrid title.')      

      
    //   doc.save('demo.pdf')
       }
    
   render() {
      return (
         <div>
            <div id="content">
                <h3>TItulo Generico para probar</h3>
                <p>lore ipsum lore ipsum lores ipso sfafooifewfe8fe8</p>
                <QrWithHash valor="umss"/>
            </div>
            <button onClick={this.generatePDF} type="primary">Download PDF</button> 
         </div>
      );
}
//   render() {
//     return (
//       <div>Certificado2</div>
//     )
//   }
}
