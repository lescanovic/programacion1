export default class Producto{

    constructor(img,pre,desc){
        this.imagen = img
        this.precio = pre
        this.descripcion = desc
    }
    guardar_producto(){
        let producto = {
            imagen: this.imagen,
            descripcion:this.descripcion,
            precio:this.precio
        }
        if ("productos" in localStorage){
            let lista = JSON.parse(localStorage.getItem("productos"))
            lista.push(producto)
            localStorage.setItem("productos",JSON.stringify(lista))
        }
        else{
            let lista_productos = []
            lista_productos.push(producto)
           
            localStorage.setItem("productos",JSON.stringify(lista_productos))
        }
        this.obtener_productos()
    }
    obtener_productos(){
        let listado = JSON.parse(localStorage.getItem("productos"))
        let filas = []
        listado.forEach((element,index) => {
            let fila =`
            <tr>
            <td>${index}</td>
            <td><img style="width:2rem" class="img-fluid" src="${element.imagen}"></img> </td>
            <td>${element.precio}</td>
            <td>${element.descripcion}</td>
            <td>
                <button onclick="guardar_indice(${index})" data-bs-toggle="modal" data-bs-target="#modal" class= "btn btn-outline-danger btn-sm"><i class="fa fa-trash"></i></button>
                <button onclick="editar(${index})" class="btn btn-outline-primary btn-sm"><i class="fa fa-edit"></i></button> 
            </td>
            </tr>`
            filas.push(fila)
        });
        document.getElementById("tbody").innerHTML = filas.join('')
    
    } 
    eliminar_producto(index){
        let listado = JSON.parse(localStorage.getItem("productos"))
        //eliminamos cliente
        listado.splice(index,1)
        localStorage.setItem("productos", JSON.stringify(listado))

        this.obtener_productos()
    }

    actualizar_productos(){
        let index = localStorage.getItem("indice_update")
        let productos = JSON.parse(localStorage.getItem("productos"))
        productos[index].imagen = document.getElementById("inp_imagen").value
        productos[index].precio = document.getElementById("inp_precio").value 
        productos[index].descripcion = document.getElementById("inp_descripcion").value


        localStorage.setItem("productos",JSON.stringify(productos))

        this.obtener_productos()
        document.getElementById("btn_guardar").style.display= "block"
        document.getElementById("btn_actualizar").style.display = "none"
    }


    obtener_catalogo(){
        let listado = JSON.parse(localStorage.getItem("productos"))
        let filas = []
        listado.forEach((element,index)=>{

            let descripcion = element.descripcion

            let fila =`
            <div class="col-lg-3">     
            <img src="${element.imagen}" class="img-fluid rounded-start" alt="">
            <div class="card w-90">
            <div class="card-body">
              <h5 class="card-title">${element.descripcion}</h5>
              <p class="card-text"></p>
              <button onclick="agregar('${element.descripcion}','${element.precio}')" class="btn btn-danger">Agregar</button>
            </div>
          </div>
    
            </div>
        
    
        `;

        filas.push(fila)
        });
        document.getElementById("catalogo").innerHTML = filas.join('')
    }
    
    
}
//agregar un input arriba de la tabla y un boton finalizar pedido