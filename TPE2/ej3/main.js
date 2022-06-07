const arreglo = ()=>{
    const framework = { 
        titulo: 'Framework utilizado en la actualidad', 
        nombre: 'Angular', 
        características: { 
               lenguaje: 'TypeScript', 
                patron: 'MVVM', 
                 spa: 'si' 
        },
    }       
    const {lenguaje,patron,spa} =framework.características
    const {titulo,nombre} = framework
    
    console.log(`
    Titulo:
        ${titulo}
    Nombre:
         ${nombre}
    Caracteristicas:
        ${lenguaje}
        ${patron}
        ${spa}
    `)
}


const boton= document.getElementById("ejecutar")
boton.addEventListener("click",arreglo)