let marcas = ["Ford", "Renault","Volkswagen", "Seat", "Peugeot", "Chevrolet", "Fiat","Toyota","Chery"]

//muestro la longitud del arreglo marcas
console.log (`
longitud = ${marcas.length}
`) 
//Ultimo elemento del arreglo
let ult_elemento = marcas [marcas.length-1]

console.log (`
Ultimo elemento: ${ult_elemento}
`)

//recorro el arreglo con foreach

marcas.forEach((element,index) => {
    console.log(`
    ${element}- ${index}
    `)
});

//agrego un elemento al final del arreglo
marcas.push ("Lamborghini")
console.log (marcas)

//elimino el ultimo elemento del arreglo

marcas.pop()
console.log (marcas) 

//agrego un elemento al inicio del arreglo

marcas.unshift ("Lamborghini")
console.log(marcas)

//elimino el primer elemento del arreglo 
marcas.shift ()
console.log(marcas)

//encuentro un indice del arreglo
let indice = marcas.indexOf ("Chery")
console.log (`
indice del arreglo: ${indice}
`)

//elimino un elemento segun su posicion 
marcas.splice (indice,8)
console.log(marcas)

//elimino varios elementos del arreglo 
marcas.splice (0,5)
console.log (marcas)

//copio el elemento del arreglo
marcas.push ("Lamborghini")

let copia = marcas.slice ()
copia.push ("fiat")
console.log (copia)
console.log (marcas)