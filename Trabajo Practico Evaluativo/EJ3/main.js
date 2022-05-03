const mostrar =()=>{
    const cateto = document.getElementById("inp_a").value
    const cateto1 = document.getElementById("inp_b").value

    const respuesta = calcular(cateto,cateto1)
    document.getElementById("h4_titulo").textContent = respuesta
}
const calcular = (cateto,cateto1)=>{
const calculo = Math.pow(cateto,2)+Math.pow(cateto1,2)
const resultado = Math.sqrt(calculo)
return resultado
}