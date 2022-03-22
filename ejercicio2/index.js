
 const calificacion = prompt ("ingrese calificacion")

const respuesta = (calificacion>7) ? 'aprobado': 'desaprobado'

//templade string, permite escribir en mas lineas de codigo
console.log(` 
Tu calificacion es: ${respuesta}

`)

//se imprime en pantalla,como el alert
document.write(respuesta)