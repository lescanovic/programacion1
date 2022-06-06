//punto 1
let consolas =['Play Station','Xbox','Nintendo Game Cube','Sega Dreamfast ','Game Boy Advanced','Pokemon mini']
//punto 2
consolas.push("Nintendo 64")
console.log (consolas)
//punto 3
consolas.splice (4,2)
console.log(consolas)
//punto 4

function mostrar (){

   let longitud = consolas.length
   document.getElementById("consigna").textContent = longitud
 
   let ultimo_elemento = consolas [consolas.length-1] 
   document.getElementById("consigna1").textContent = ultimo_elemento

   let posicion4 = consolas[4]
   document.getElementById("consigna2").textContent = posicion4
   
 
}

function tabla (){

    let llenar =[]
    consolas.forEach((element,index) =>{
       let tabla= `
       <tr>
       <td>${index}</td>
       <td>${element}</td>

       </tr>
       
       
       `

       llenar.push(tabla)
    });


    document.getElementById ("tabla").innerHTML = llenar.join('')
}
