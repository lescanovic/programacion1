import Producto from "./producto.js"

function guardar_producto(){
let imagen = document.getElementById("inp_imagen").value
let precio = document.getElementById("inp_precio").value
let descripcion = document.getElementById("inp_descripcion").value



let producto = new Producto(imagen,precio,descripcion)

producto.guardar_producto()
}
document.getElementById("btn_guardar").addEventListener("click",guardar_producto)

function listar(){
    let producto = new Producto()
    producto.obtener_productos()
}
listar();

function eliminar (){
    let indice = localStorage.getItem("eliminacion")
  
    let producto = new Producto();
    producto.eliminar_producto (indice)
  
  }
  document.getElementById("btn_eliminar").addEventListener("click",eliminar)

  function actualizar(){
    let index = localStorage.getItem("indice_update")
    let producto1 = new Producto()
    producto1.actualizar_productos(index)
  }
  document.getElementById("btn_actualizar").addEventListener("click",actualizar)



 