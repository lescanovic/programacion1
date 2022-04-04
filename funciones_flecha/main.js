//funcion flecha
const mostrar = () => {
     document.getElementById("inp_dato").value = 10
   document.getElementById ("h_titulo").textContent ='Probando'
}
//obtiene al boton
const boton = document.getElementById("btn_mostrar")
//indicamos el evento a escuchar
//entonces cuando se haga click se invocara a la funcion mostrar
boton.addEventListener("click",mostrar)