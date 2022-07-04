function guardar_indice(indice)
{
    localStorage.setItem("eliminacion",indice)
}
function editar(index){
let productos = JSON.parse(localStorage.getItem("productos",index))

document.getElementById("inp_imagen").value = productos[index].imagen
document.getElementById("inp_precio").value = productos[index].precio
document.getElementById("inp_descripcion").value = productos[index].descripcion

localStorage.setItem("indice_update",index)
}