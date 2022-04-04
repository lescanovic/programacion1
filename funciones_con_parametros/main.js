const calcular = (d1,d2) =>{
//recibo los datos de la otra funcion (d1 y d2), No importa el nombre

const resultado = Math.pow(d1,d2)
return resultado
}

const mostrar = () => {
const dato1= document.getElementById ("inp_dato1").value
const dato2 = document.getElementById ("inp_dato2").value 
//mando las constantes dato1 y dato2 a la otra funcion
const respuesta = calcular (dato1,dato2)

alert (respuesta)
}

const boton = document.getElementById ("btn_calcular")
boton.addEventListener("click",mostrar)