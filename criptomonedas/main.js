const recorrer = async() =>{
    const respuesta = await fetch ('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    const criptomonedas = await respuesta.json()
   

    let filas = []

    criptomonedas.forEach( objeto => {
        
        let tr = `
            <tr>
                <td>
                    <img style="width:2rem" class="img-fluid" src="${objeto.image}"></img>
                </td>
                <td>${objeto.name}</td>
                <td>${objeto.symbol}</td>
                <td>${objeto.current_price}</td>
                <td>${objeto.price_change_percentage_24h}</td>
                <td>${objeto.total_volume}</td>
            </tr>
        `

        filas.push(tr)

    });


    document.getElementById("cuerpo_tabla").innerHTML = filas.join('')
}


const boton =document.getElementById("btn_ejecutar")
boton.addEventListener("click",recorrer)