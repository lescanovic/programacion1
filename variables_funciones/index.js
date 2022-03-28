//funcion clasica
function mostrar (){

    //formas de recoger un valor de un input:
    //forma 1
    //const nombres = document.querySelector("#inp_nombres").value
    //sin template string 
    //const mensaje ='Nombre y apellido:'+nombres 
    const nombres = document.getElementById("inp_nombres").value
  //con template string
const mensaje =`Nombre y apellido: ${nombres}`

alert(mensaje)
}

//funciones con retorno
function mifuncion_con_retorno()
{
    const ejemplo = 'probando funcion con retorno'
    //retorna una respuesta
    return ejemplo
}

function mostrar_respuesta()
{
    //ejecuto una funcion dentro de otra
const respuesta= mifuncion_con_retorno()
alert (respuesta)

}