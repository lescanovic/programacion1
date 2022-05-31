export default class Star_wars{

    constructor(){}

    async obtener() {

        const datos = await fetch('https://fake-movie-database-api.herokuapp.com/api?s=Star%20Wars')
        const datos_json = await datos.json()

        const lista = datos_json.Search
         
        let catalogo = []
        lista.forEach(element => {
            let columna = ` 
            <div class= "col-4">

            <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                <img src="${element.Poster}" class="img-fluid rounded-start"alt="">
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${element.Title}</h5>
                    <p class="card-text">${element.Year}</p>
                    <p class="card-text"><small class="text-muted"></small></p>
                </div>
                </div>
            </div>
            </div>


            </div>
        

        `
        catalogo.push(columna)
        });

        document.getElementById ("catalogo").innerHTML = catalogo.join('')



    }
}