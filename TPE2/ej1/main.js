const recorrer = async() =>{

    const respuesta = await fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
    const dolar = await respuesta.json ()
     
    let filas = []
    dolar.forEach (element => {
        let tr= `
        
             <tr>
            
                <td>${element.casa.nombre}</td>
                <td>${element.casa.compra}</td>
                <td>${element.casa.venta}</td>
             </tr>
        `
        filas.push(tr)
        
        
    });


document.getElementById("tabla").innerHTML = filas.join('')


}
const boton =document.getElementById("btn_ejecutar")
boton.addEventListener("click",recorrer)