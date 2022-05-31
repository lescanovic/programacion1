
import Area_de_rectangulo from "./rectangulo.js"
import Area_de_trapecio from "./trapecio.js";


const mostrar = ( )=>{
 const altura = document.getElementById("inp_a").value
 const basesup = document.getElementById("inp_bs").value
 const baseinf = document.getElementById("inp_bi").value


 
 const instancia = new Area_de_trapecio() 

 instancia.bs = basesup
 instancia.bi = baseinf
 instancia.a = altura

 const respuesta = instancia.calculo()
 document.getElementById ("resultado").textContent =respuesta

}

const boton = document.getElementById("btn_calcular")
boton.addEventListener("click",mostrar)




const rectangulo = ()=>{
    const base = document.getElementById("inp_base").value
    const altura1 = document.getElementById("inp_altura").value

    const instancia1 = new Area_de_rectangulo()

    instancia1.b = base
    instancia1.a = altura1

    const respuesta1 = instancia1.calcular()
    document.getElementById("respuesta").textContent = respuesta1


}

const boton1 = document.getElementById("btn_calcular1")
boton1.addEventListener("click",rectangulo)