const nombres={
    etiqueta:"Nombres",
    tipo:"text",
    name:"nombres_usuario",
    pholder:"Jose Franciso",
    mensajeError:"El campo solo contiene caracteres alfabeticos",
    expresion:/^\w+[a-zA-ZÀ-ÿ\s]+$/ 
};

const apellido_paterno={
    etiqueta: "Apellido Paterno",
    tipo:"text",
    name:"apellido_paterno",
    pholder:"Rodriguez",
    mensajeError:"El campo contiene caracteres alfabeticos",
    expresion:/^\w+[a-zA-ZÀ-ÿ]+$/
}
const apellido_materno={
    etiqueta:"Apellido Materno",
    tipo:"text",
    name:"apellido_materno",
    pholder:"Cespedes",
    mensajeError:"El campo contiene caracteres alfabeticos",
    expresion:/^\w+[a-zA-ZÀ-ÿ]+$/
}
const genero={
    etiqueta:"Genero",
    tipo:"text",
    pholder:"F=femenino / M=masculino ",
    name:"genero",
    mensajeError:"El campo contiene caracteres F o M",
    expresion:/^[A-Z]{1}$/
}
const ocupacion={
    etiqueta:"Ocupación",
    tipo:"text",
    name:"ocupacion",
    pholder:"Estudiante",    
    mensajeError:"El campo contiene caracteres alfabeticos",
    expresion:/^\w+[A-Za-z\s]+$/
}
const correo={
    etiqueta:"Correo Electronico",
    tipo:"email",
    name:"correo",
    pholder:"correo@correo.com",
    mensajeError:"El campo contiene caracteres alfanumericos y simbolos -_@.",
    expresion:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}
const celular={
    etiqueta:"Número Celular",
    tipo:"text",
    name:"celular",
    pholder:"+591-77852113",
    mensajeError:"El campo contiene caracteres numericos y simbolos -+",
    expresion:/^\W?(591)?[\s-]?\d{1,3}([\s-]?\d{1,7}){1,3}$/
}
const ci={
    etiqueta:"Carnet de Identidad",
    tipo:"text",
    name:"ci",
    pholder:"7852136",
    mensajeError:"El campo contiene caracteres numericos y letras en mayuscula",
    expresion:/^[a-zA-Z]?[0-9a-zA-Z]{8}$/
}
const passwor_hash={
    etiqueta:"Password",
    tipo:"password",
    name:"password_hash",    
    mensajeError:"El campo contiene caracteres alfanumericos y simbolos .,-_*",
    expresion:/^\W+[0-9a-zA-Z]{3,9}$/
}
const atributosUsuario={
    nombres,
    apellido_paterno,
    apellido_materno,
    genero,
    // fecha_nacimiento,
    // lugar_nacimiento,
    // direccion_actual,
    ocupacion,
    correo,
    // correo_alternativo,
    // telefono,
    celular,
    ci,
    // lugar_expedito_ci,
    // imagen,
    // estado_civil,
    passwor_hash
}
export {atributosUsuario};
