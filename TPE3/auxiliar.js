
function guardar_indice(indice)
{
    localStorage.setItem("eliminacion",indice)
}
function editar(index){
let productos = JSON.parse(localStorage.getItem("productos"))

document.getElementById("inp_imagen").value = productos[index].imagen
document.getElementById("inp_precio").value = productos[index].precio
document.getElementById("inp_descripcion").value = productos[index].descripcion

localStorage.setItem("indice_update",index)
document.getElementById("btn_actualizar").style.display = "block"
document.getElementById("btn_guardar").style.display = "none"
}


function agregar(d,p)
{
 
    let pedidos_seleccionados = {
        descripcion:d,
        precio:p,
        cantidad:1
    }
    if ("pedidos" in localStorage){
        let lista = JSON.parse (localStorage.getItem ("pedidos"))
        lista.push(pedidos_seleccionados)
        localStorage.setItem("pedidos", JSON.stringify(lista))
    }
    else{

        let lista_pedidos = []
        lista_pedidos.push(pedidos_seleccionados)
        localStorage.setItem("pedidos", JSON.stringify(lista_pedidos))
    }

    crear_tablita()
}


function crear_tablita(){
    
let listado = JSON.parse (localStorage.getItem("pedidos"))
let lista = []
listado.forEach(element => {
    let tr = `
    <tr>
    <td>${element.descripcion}</td>
    <td>${element.cantidad}</td>
    <td>${element.precio}</td>
  
</tr>
`
lista.push(tr)
});
 
document.getElementById("tb").innerHTML = lista.join('')

}

function seguimiento (){

    let detalle = JSON.parse (localStorage.getItem("pedidos"))
    const nombre = document.getElementById("inp_nombre").value
    let seguimiento_de_pedidos = {
        cliente: nombre,
        fecha: '',
        estado: 'Pendiente',
        detalle :detalle
       
    }

    if ("seguimientos" in localStorage) {
        let lista = JSON.parse (localStorage.getItem("seguimientos"))
        lista.push(seguimiento_de_pedidos)
        localStorage.setItem("seguimientos", JSON.stringify(lista))
    } 
    else 
    {
        
        let lista_pedidos = []
        lista_pedidos.push(seguimiento_de_pedidos)
        localStorage.setItem("seguimientos", JSON.stringify(lista_pedidos))
    }   

    
        crear_tabla()
    
  }

function crear_tabla(){
    let lista= []
    seguimiento_de_pedidos.forEach(element => {
        let tr = `
        <tr>
        <td>${element.nombre}</td>
        <td>${element.fecha}</td>
        <td>${element.estado}</td>
        <td>${element.detalle}</td>
      
    </tr>
    `
    lista.push(tr)
    });
     
    document.getElementById("tb1").innerHTML = lista.join('')
}
  