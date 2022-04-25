const consulta = (temperatura) => {
    const temperatura= document.getElementById ("inp_temp")

    if (temperatura>=14 && temperatura<=32) {
        alert("Temperatura baja")

 
    }


    return consulta
}
const boton = document.getElementById ("btn_consulta")
boton.addEventListener("click",consulta)

