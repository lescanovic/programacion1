const calcular = () => {
    const base1 = document.getElementById ("inp_base1").value
    const base2 = document.getElementById ("inp_base2").value
    const altura = document.getElementById ("inp_altura").value


    const resultado = ( ( parseInt(base1) + parseInt(base2) )*altura)/2
    document.getElementById ("inp_resultado").textContent = resultado

    
}
const boton = document.getElementById("btn_calcular")
boton.addEventListener("click",calcular)