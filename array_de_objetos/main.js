//crear un arreglo de objetos 

let vehiculos =  [

    {
        //primer elemento del array
        marca: 'Ford',
        modelo: 'Focus',
        anio: 2014,
        origen: 'Mercosur' 
    },

    {
        //segundo elemento del array
        marca: 'Volkswagen',
        modelo:'Golf 1.4 TSI',
        anio: 2014,
        origen: 'mexico'



    }
]
vehiculos.forEach( (element,index) => {
    console.log(index+'-'+ element.modelo)
});

//funciones asincronas - concepto de async y await


const recorrer = async() =>{
 
 //realiza una solicitud o peticion http a traves del metodo GET
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts')   
    const publicaciones = await respuesta.json()

    publicaciones.forEach(element => {
        console.log (element.title)
    });
}

const boton =document.getElementById("btn_ejecutar")
boton.addEventListener("click",recorrer)
//el await va a funcionar siempre y cuando este el async, al lado del argumento de la funcion "()"