export default class Persona{
    nombre;
    apellido;
    dni;


    constructor(){


    }

    mostrar_datos_personales(){
        console.log(`
        apellido: ${this.apellido}
        nombre: ${this.nombre}
        dni: ${this.dni}
        
        
        
        `)
    }
}
