

const nombre={
    etiqueta:"Nombre",
    tipo:"text",
    name:"nombre",
    pholder:"ingrese nombre de la unidad",
    mensajeErrorExpresion:"El campo solo puede contener caracteres alfabeticos",
    expresion:/^\w+[a-zA-ZÀ-ÿ\s]+$/,
    valorInicial:""
}
const abreviatura={
    etiqueta:"Abreviatura",
    tipo:"text",
    name: "abreviatura", 
    pholder:"UDAU",
    mensajeErrorExpresion:"EL campo solo permite entre 4 a 8 letras en mayuscula",
    expresion:/^(F|U|D)[A-Z]{2,8}$/,
    valorInicial:""
}
const telefono={
    etiqueta: "Telefono",
    tipo:"text",
    name: "telefono",     
    pholder:"+591-4-425359", 
    mensajeErrorExpresion:"El campo solo permite numeros 0-9 y los simbolos - +",
    expresion:/^\W?(591)[\s-]\d{1,3}([\s-]\d{1,7}){1,3}$/,
    valorInicial:""
}
const sitio_web={
    etiqueta:"Pagina Referencia",
    tipo:"text",
    name: "pagina", 
    pholder:"http://dominio/pagina_principal",
    mensajeErrorExpresion:"El campo solo permiten caracteres alfanumericos y simbolos .-_/ ",
    expresion:/^(http+s?:\/\/)?(www\.)?[a-zA-Z.-]+\.[A-Za-z0-9./-]+$/,
    valorInicial:""
}
const correo={
    etiqueta:"Correo Contacto",
    tipo:"email",
    name: "correo", 
    pholder:"correo@correo.com",
    mensajeErrorExpresion:"EL campo solo permite caracteres alfanumericos y simbolos .-_@",
    expresion:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    valorInicial:""
}
const telefono_alternativo={
    etiqueta:"Telefono alternativo",
    tipo:"text",
    name: "telefono2", 
    pholder:"+591-4-425359",
    mensajeErrorExpresion: "El campo solo permite numeros 0-9 y los simbolos - +",
    expresion:/^(\W?(591)[\s-])?\d{1,3}([\s-]\d{1,7}){1,3}$/,
    valorInicial:""
}
const direccion={
    etiqueta:"Ubicacion ",
    tipo:"text",
    name: "ubicacion", 
    pholder:"Oquendo esq. Jordan Nro.225", 
    mensajeErrorExpresion:"El campo solo permite caracteres alfanumericos y simbolos ./:",
    expresion: /^[A-Za-z0-9]+[+a-zA-Z0-9\s,]+\.?[A-Za-z\s.,]+$/,
    valorInicial:""
}
const responsable={
    etiqueta:"Responsable de Unidad",
    tipo:"select",
    name:"responsable",
    pholder:"seleccione usuario",
    // opciones:{lista_usuarios}
}
const atributos=[
        nombre,abreviatura,
        telefono,
        sitio_web,        
        correo,
        telefono_alternativo,
        direccion,
        responsable
    ]

export default atributos;