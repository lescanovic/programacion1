let lenguajes = ["Phyton", "JavaScript", "Csharp", "C++", "Java", "PHP", "Ruby"]
function funcion1() {
    //Longitud del arreglo
    const longitud = lenguajes.length
   console.log(longitud)
    //Ultimo elemento
    let ultimo = lenguajes[lenguajes.length-1]
    console.log(`
    ultimo elemento: ${ultimo}
    `)

    //Tercer elemento del arreglo
    let tercer = lenguajes[lenguajes.length-5]
    console.log(`
    tercer elemento :${tercer}
    `)

}
//recorro el arreglo
function funcion2() {
    lenguajes.forEach((element,index) =>{
        console.log(`
        ${index}-${element}
        `)
    });
}

//Agrego otro lenguaje al arreglo

 lenguajes.push("Go")
document.getElementById("titulo_h4").textContent = lenguajes

//Elimino el primer elemento del arreglo
lenguajes.shift()
document.getElementById("titulo1_h4").textContent = lenguajes

//agrego al inicio del arreglo
lenguajes.unshift("Kotlin")
document.getElementById("titulo2_h4").textContent = lenguajes


let eliminar = lenguajes.indexOf("Java")
lenguajes.splice(eliminar,2)
document.getElementById ("titulo4_h4").textContent = lenguajes

console.log(lenguajes)