import Star_wars from "./starwars.js"

const obtener_datos=()=>{
    const instancia = new Star_wars ()

    instancia.obtener()
}

document.getElementById("btn_boton").addEventListener("click",obtener_datos)