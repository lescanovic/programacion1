let lenguajes =['Bitcoin', 'Etherium', 'Tether', 'BNB', 'Cardano' ,' Dai ', 'Helium', 'Shiba Inu ', 'Tron' , 'Cronos','Solana']
//agrego stellar al inicio del arreglo
lenguajes.unshift("Stellar")
console.log(lenguajes)
//elimino shiba inu y tron
lenguajes.splice(8,2)
console.log(lenguajes)
//agrego gate al final del array
lenguajes.push("Gate")
console.log(lenguajes)


function mostrar(){
    let longitud = lenguajes.length
    document.getElementById("longitud").textContent = 'La longitud es: '+longitud
    
    let ultimo_elemento = lenguajes [lenguajes.length-1]
    document.getElementById("ultimo").textContent = ultimo_elemento

    let posicion = lenguajes.indexOf("Helium")
    document.getElementById("helium").textContent = posicion
}


 function arreglo (){


    let lista =[]
    lenguajes.forEach(element => {
        let li = `
        <li class="list-group-item">${element}</li>
        `
        lista.push(li)
    }); 

    document.getElementById("mostrar").innerHTML= lista.join('')
 }

