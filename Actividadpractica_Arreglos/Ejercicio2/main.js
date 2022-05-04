
function mostrar (){
    let numeros = [5, 2, 88, 14, 22, 7, 6, 42, 47, 34]
    const enviar = recibe(numeros)
 console.log(enviar)
}
function recibe(numeros){
let copia = numeros.slice()
return copia


}


function promedio(){
    let numeros =[5,2,88,14,22,7,6,42,47,34]
    let suma = 0
    let Longitud = numeros.length

    numeros.forEach(function(element)  {
       suma+=element 
    });

    let prom = suma / Longitud
    document.getElementById("promedio_h4").textContent = prom

}


function rango (){

    let numeros =[5,2,88,14,22,7,6,42,47,34]
    let suma = 0 
    const porcion = numeros.slice(2,4)

    console.log(porcion)

    let longitud = porcion.length
    porcion.forEach(function(element) {
        suma+= element
    });
    
    let prom = suma/longitud
    console.log(prom)
}

