export default class Cliente{
                //argumento
    constructor(nom,ape,dni){
        this.nombre = nom
        this.apellido = ape
        this.dni = dni
    }
//los metodos no llevan la palabra function
    guardar_cliente(){   
        let nuevo_cliente = {
            nombre: this.nombre,
            apellido: this.apellido,
            dni: this.dni
    }

        if("listado_clientes" in localStorage){
            //como agregar un nuevo cliente
        let lista = JSON.parse(localStorage.getItem("listado_clientes"))
        lista.push(nuevo_cliente)
        localStorage.setItem("listado_clientes",JSON.stringify(lista))
        } else{
          
            //inserto el objeto nuevo cliente dentro de un arreglo (lista_clientes)
            let lista_clientes = []
            lista_clientes.push(nuevo_cliente)
            //crear el sector de almacenamiento    //convierto el arreglo en json (cadena de texto)
            localStorage.setItem("listado_clientes",JSON.stringify(lista_clientes))

        }
        this.obtener_clientes()



    }
    obtener_clientes(){
        let listado = JSON.parse(localStorage.getItem("listado_clientes"))
       
        let filas = []
        listado.forEach((element,index) => {
            let fila =`
            <tr>
                <td>${element.nombre}</td>
                <td>${element.apellido}</td>
                <td>${element.dni}</td>
                <td>
                    <button onclick = "eliminar_cliente(${index})"class= "btn btn-outline-danger btn-sm"><i class="fa fa-trash"></i> </button>
                </td>

            </tr>`
            filas.push(fila)
        });
        document.getElementById("tbody").innerHTML = filas.join('')
    }

    eliminar_cliente(index){
        let lista_clientes = JSON.parse(localStorage.getItem("listado_clientes"))
        //eliminamos cliente
        lista_clientes.splice(index,1)
        localStorage.setItem("listado_clientes", JSON.stringify(lista_clientes))

        this.obtener_clientes()
    }
}

