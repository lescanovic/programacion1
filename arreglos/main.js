//crear un array 
//variables de tipo array
let helados = ["cereza", "banana split", "dulce de leche"]

console.log(`
Longitud = ${helados.length}
`)

//acceso a un elemento de un arreglo mediante su indice 
let ultimo_elemento = helados [helados.length-1] //accedo a la ultima posicion del arreglo

console.log (`
ultimo elemento: ${ultimo_elemento}

`)

//recorrer un arreglo haciendo uso de foreach
            
helados.forEach((element, index) => {
    console.log(`
    ${index} - ${element}
    `)
});

//como agregar un elemento al final de un arreglo

helados.push("pistacho")
console.log (helados)

//como eliminar un elemento de un arreglo

helados.pop ()
console.log(helados)


//como agregar un elemento al inicio de un arreglo
helados.unshift ("menta granizada")
console.log  (helados)


//como eliminar el primer elemento de un arreglo 
helados.shift ()
console.log (helados)

//como encontrar los indices de un elemento de un array
let posicion = helados.indexOf ("banana split")
console.log (`
Posicion del elemento Banana Split : ${posicion}
`)

//eliminar un elemento segun su posicion/indice

helados.splice (posicion,1)
console.log (helados)

//eliminar varios elementos de un arreglo 
helados.splice (0,2)
console.log(helados)

//copiar un arreglo 
helados.push ("Marroc")

let copia = helados.slice ()
copia.push ("chocolate")
console.log(copia)
console.log(helados)