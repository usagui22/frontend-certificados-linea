
const nombre={
    etiqueta:"nombre",
    tipo:"text",
    name:"nombre_evento",
    pholder:"ingresar nombre evento.",
    mensajeError:"El campo contiene caracteres alfabeticos y debe terminar con .",
    expresion:/^\w[a-zA-Z\s]+\.$/
};
const url_convocatoria={
    etiqueta:"url de referencia",
    tipo:"text",
    name:"url_evento",
    pholder:"https://domino.com/pagina-referencia",
    mensajeError:"El campo solo contiene caracteres alfabeticos y simbolos /-:",
    expresion:/^(http?s?:\/\/)?(www\.)?(fb\.me\/e\/)?[0-9A-Za-z./%-]+$/
};
const nombre_unidad={
    etiqueta:"unidad",
    tipo:"checklist",
    name:"nombre_unidad",
    pholder:"seleccionar unidad patrocinadora",
    mensajeError:"El campo solo contiene caracteres alfabeticos"
};
const fecha_inicio={
    etiqueta:"fecha inicio",
    tipo:"date-local",
    name:"fecha_inicio",
    pholder:"ingresar fecha de incio evento",
    mensajeError:"El campo solo contiene caracteres numericos y simbolo -",
    expresion:/^[0-9-]+$/
};
const registro_fin={
    etiqueta:"registro_fin",
    tipo:"date-local",
    name:"registro_fin",
    pholder:"ingresar fecha de fin de registros de participantes",
    mensajeError:"El campo solo contiene caracteres numericos y simbolo -",
    expresion:/^[0-9-]+$/
};
const inicio_actividades={
    etiqueta:"inicio_actividades",
    tipo:"date-local",
    name:"inicio_actividades",
    pholder:"ingresar fecha de inicio de las actividades",
    mensajeError:"El campo solo contiene caracteres numericos y simbolo -",
    expresion:/^[0-9-]+$/
};
const fin_actividades={
    etiqueta:"fecha inicio",
    tipo:"date-local",
    name:"fin_actividades",
    pholder:"ingresar fecha de fin de actividades",
    mensajeError:"El campo solo contiene caracteres numericos y simbolo -",
    expresion:/^[0-9-]+$/
};
const inicio_emision={
    etiqueta:"fecha inicio",
    tipo:"date-local",
    name:"inicio_emision",
    pholder:"ingresar fecha de incio emision de cetificados y correcciones",
    mensajeError:"El campo solo contiene caracteres numericos y simbolo -",
    expresion:/^[0-9-]+$/
};
const fecha_fin={
    etiqueta:"fecha fin",
    tipo:"date-local",
    name:"fecha_fin",
    pholder:"ingresar fecha fin evento",
    mensajeError:"El campo solo contiene caracteres numericos y simbolo -",
    expresion:/^[0-9-]+$/
};

const atributosEvento={
    nombre,
    nombre_unidad,
    url_convocatoria,
    fecha_inicio,
    registro_fin,
    inicio_actividades,
    fin_actividades,
    inicio_emision,
    fecha_fin
}

export default atributosEvento;