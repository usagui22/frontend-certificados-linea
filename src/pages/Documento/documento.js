  
 const nombre={
    etiqueta:"nombre",
    tipo:"text",
    name: "nombre", 
    pholder:"Certificado", 
    mensajeError:"El campo solo permite caracteres alfabeticos",
    expresion:/^[A-Za-z]{1,11}$/
 };
 const hash={
    etiqueta:"hash",
    tipo:"text",
    name: "hash",     
    mensajeError:"El campo solo permite caracteres alfanumericos y simbolos :$",
    expresion:/^[A-Za-z0-9$:]+$/
 };
 const fecha_confirmacion={
    etiqueta:"confirmado",
    tipo:"text",
    name: "estado",     
    mensajeError:'El campo solo permite dos tipos de cadena "Confirmado" o "En Espera"',
    expresion:/^(Confirmado|En Espera)$/
 };
 const path={
    etiqueta:"Enlace Generado",
    tipo:"text",
    name: "path",     
    mensajeError:'El campo solo permite caracteres alfanumericos y simbolos /-_:',
    expresion:/(http\:|https\:)?[\/\/a-zA-Z0-9_-]+\.[\/a-zA-Z0-9\$-_]+$/
 };

// const nombre={
//     integrante:"tipo_integrante",
// }
// const hash={
//     url:"http://dominio.com/hash-documento"
// }
// const fecha_confirmacion={
//     fecha:"3-jun-2022"
// }
// const nota_valoracion={
//     nota:25
// }

// const path={
//     url:"http://dominio.com/unidad/evento"
// }

const atributosDocumento={
    nombre,
    hash,
    fecha_confirmacion,
    nota_valoracion,
    path
}

export default {nombre, atributosDocumento};