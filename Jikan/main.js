async function obtener_datos() {
    const datos = await fetch ('https://api.jikan.moe/v4/anime?q=dragon ball&sfw')

    const datos1 = await datos.json()
    const datos2 = datos1.data

    let totales_columnas =[]
    datos2.forEach(element => {
        let columnas =`
        
        <div class= "col-4">

        <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
            <img src="${element.images.jpg.image_url}" class="img-fluid rounded-start" alt="${element.title}">
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <p class="card-text">${element.synopsis}</p>
                <p class="card-text"><small class="text-muted">Episodio:${element.episodes}</small></p>
            </div>
            </div>
        </div>
        </div>


        </div>
    

    `;
    totales_columnas.push(columnas)
     
 });

 document.getElementById ("catalogo").innerHTML = totales_columnas.join('')


        
    
}

const boton= document.getElementById("btn_obtener")
boton.addEventListener("click",obtener_datos)