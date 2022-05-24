import Vehiculo from "./vehiculo.js";

 const mostrar = () => {
    const km = document.getElementById("inp_kilometraje").value
    const marca = document.getElementById("inp_marca").value


//guardo la instancia en una constante
const auto = new Vehiculo(marca,km)
auto.mostrar_datos_vehiculos()
}

 const btn = document.getElementById("btn_mostrar").addEventListener("click",mostrar)

