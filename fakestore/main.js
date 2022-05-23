async function obtener() {
    const datos = await fetch ('https://fakestoreapi.com/products/category/jewelery')
    const datos1 = await datos.json()


    let tarjetas =[]

    datos1.forEach(element => {
        let tarjeta = `
  <div class="col-md-4">
        <div class="card border-warning mb-3" style="max-width: 20rem;">
            <div class="card-header">Producto</div>
            <img class="img-fluid" src="${element.image}">
                <div class="card-body">
                        <h5 class="card-title">${element.title}</h5>
                        <p class="card-text">${element.price}</p>
                 </div>
        </div>
            
    </div>`;
tarjetas.push(tarjeta)



    });
    document.getElementById ("productos").innerHTML = tarjetas.join('')


}


const boton= document.getElementById("btn_mostrar")
boton.addEventListener("click",obtener)