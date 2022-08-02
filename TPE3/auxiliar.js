
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


