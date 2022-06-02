const nombre={
    etiqueta:"nombre",
    tipo:"text",
    pholder:"nombre del evento",
    mensajeError:"El campo contiene caracteres alfabeticos y debe terminar con .",
    expresion:/^\w[a-zA-Z\s]+\.$/,
    valoresIniciales:""
}

const id_unidad={
    etiqueta:"Unidad Auspiciadora",
    tipo:"text",
    pholder:"{unidad.elemento}",
    //viene por defecto el nombre de la unidad q permita editar solo
    //al responsable de la unidad y admin
    //participante solo puede ver la lista de elementos    
}

const convocatoria={
    etiqueta: "pagina de referencia",
    tipo:"text",
    name:"url_convocatoria",
    pholder:"https://domino.com/pagina-referencia",
    mensajeError:"El campo solo contiene caracteres alfabeticos y simbolos /-:",
    expresion:/^(http?s?:\/\/)?(www\.)?(fb\.me\/e\/)?[0-9A-Za-z./%-]+$/,
    valoresIniciales:""
}

const fecha_inicio={
    etiqueta:"Fecha de Inicio",
    tipo:"date-local",
    name:"fecha_inicio",
    pholder:"01-01-2022",
    mensajeError:"El campo solo contiene caracteres numericos y simbolo -",
    expresion:/^[0-9-]+$/,
    valoresIniciales:""
}

const registro_fin={
    etiqueta:"Fecha Limite de Registro a Evento",
    tipo:"date-local",
    name:"registro_fin",
    pholder:"15-01-2022",
    mensajeError:"El campo solo contiene caracteres numericos y simbolo -",
    expresion:/^[0-9-]+$/,
    valoresIniciales:""
}

const inicio_actividades={
    etiqueta:"Fecha Inicio de Actividades",
    tipo:"date-local",
    name:"inicio_actividades",
    pholder:"31-01-2022",
    mensajeError:"El campo solo contiene caracteres numericos y simbolo -",
    expresion:/^[0-9-]+$/,
    valoresIniciales:""
}

const fin_actividades={
    etiqueta:"Fecha Fin de Actividades",
    tipo:"date-local",
    name:"fin_actividades",
    pholder:"25-02-2022",
    mensajeError:"El campo solo contiene caracteres numericos y simbolo -",
    expresion:/^[0-9-]+$/,
    valoresIniciales:""
}

const inicio_emision={
    etiqueta:"Fecha de Emision de Certificados",
    tipo:"date-local",
    name:"inicio_emision",
    pholder:"11-03-2022",
    mensajeError:"El campo solo contiene caracteres numericos y simbolo -",
    expresion:/^[0-9-]+$/,
    valoresIniciales:""
}

const fecha_fin={
    etiqueta:"Fecha Fin de Emision y Correccion de Certificados",
    tipo:"date-local",
    name:"fecha_fin",
    pholder:"26-03-2022",
    mensajeError:"El campo solo contiene caracteres numericos y simbolo -",
    expresion:/^[0-9-]+$/,
    valoresIniciales:""
}

const atributos_Evento=[
    nombre,
    id_unidad,    
    convocatoria,
    fecha_inicio,
    registro_fin,
    inicio_actividades,
    fin_actividades,
    inicio_emision,
    fecha_fin
]

export default atributos_Evento;