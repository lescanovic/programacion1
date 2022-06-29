import Producto from "./producto.js"

function guardar_producto(){
let imagen = document.getElementById("inp_imagen").value

let descripcion = document.getElementById("inp_descripcion").value

let precio = document.getElementById("inp_precio")

let producto = new Producto(imagen,descripcion,precio)

producto.guardar_producto()
}
document.getElementById("btn_guardar").addEventListener("click",guardar_producto)

function listar(){
    let producto = new Producto()
    producto.obtener_productos()
}
listar();