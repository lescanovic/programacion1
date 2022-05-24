//exporto la clase para q pueda ser utilizada en otro js
export default class Vehiculo {
    //los atributos son globales, se pueden usar en los metodos y demas, son cualidades de la clase
    marca; 
    km;

   //constructor es un metodo que viene con la clase
    constructor(m,km){
       this.marca = m
       this.km = km

    }
    //metodo, las variables se ejecutan a traves de los metodos
    mostrar_datos_vehiculos(){
    
        console.log(`
            kilometraje: ${this.km}
            marca: ${this.marca}
        
        
        `)


    }
}