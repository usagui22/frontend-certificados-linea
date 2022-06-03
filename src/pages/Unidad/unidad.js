

const nombre={
    id:"1",
    etiqueta:"Nombre",
    tipo:"text",
    name:"nombre",
    pholder:"ingrese nombre de la unidad",
    mensaje:"El campo solo puede contener caracteres alfabeticos",
    expresion:/^\w+[a-zA-ZÀ-ÿ\s]+$/,
    // valorInicial:""
}
const abreviatura={
    id:"2",
    etiqueta:"Abreviatura",
    tipo:"text",
    name: "abreviatura", 
    pholder:"UDAU",
    mensaje:"EL campo solo permite entre 4 a 8 letras en mayuscula",
    expresion:/^(F|U|D)[A-Z]{2,8}$/,
    //valorInicial:""
}
const telefono={
    id:"3",
    etiqueta: "Telefono",
    tipo:"text",
    name: "telefono",     
    pholder:"+591-4-425359", 
    mensaje:"El campo solo permite numeros 0-9 y los simbolos - +",
    expresion:/^\W?(591)[\s-]\d{1,3}([\s-]\d{1,7}){1,3}$/,
    //valorInicial:""
}
const sitio_web={
    id:"4",
    etiqueta:"Pagina Referencia",
    tipo:"text",
    name: "sitio_web", 
    pholder:"http://dominio/pagina_principal",
    mensaje:"El campo solo permiten caracteres alfanumericos y simbolos .-_/ ",
    expresion:/^(http+s?:\/\/)?(www\.)?[a-zA-Z.-]+\.[A-Za-z0-9./-]+$/,
    //valorInicial:""
}
const correo={
    id:"5",
    etiqueta:"Correo Contacto",
    tipo:"email",
    name: "correo", 
    pholder:"correo@correo.com",
    mensaje:"EL campo solo permite caracteres alfanumericos y simbolos .-_@",
    expresion:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    //valorInicial:""
}
const telefono_alternativo={
    id:"6",
    etiqueta:"Telefono alternativo",
    tipo:"text",
    name: "telefono_alternativo", 
    pholder:"+591-4-425359",
    mensaje: "El campo solo permite numeros 0-9 y los simbolos - +",
    expresion:/^(\W?(591)[\s-])?\d{1,3}([\s-]\d{1,7}){1,3}$/,
    //valorInicial:""
}
const direccion={
    id:"7",
    etiqueta:"Ubicacion ",
    tipo:"text",
    name: "direccion", 
    pholder:"Oquendo esq. Jordan Nro.225", 
    mensaje:"El campo solo permite caracteres alfanumericos y simbolos ./:",
    expresion: /^[A-Za-z0-9]+[+a-zA-Z0-9\s,]+\.?[A-Za-z\s.,]+$/,
    //valorInicial:""
}
const responsable={
    id:"8",
    etiqueta:"Responsable de Unidad",
    tipo:"select",
    name:"responsable",
    pholder:"seleccione usuario",
    // opciones:{lista_usuarios}
}
const atributosUnidad=[
        nombre,
        abreviatura,
        telefono,
        sitio_web,        
        correo,
        telefono_alternativo,
        direccion,
        responsable
    ]

export default atributosUnidad;