const consulta = (f) => {
    //la funcion consulta, recibe los datos de la funcion mostrar


    let mensaje = null

    if (f>=14 && f<=32) {
       mensaje = 'Temperatura baja'
    }
    else {
        if (f >32 && f<68) {
           mensaje ='Temperatura adecuada'
        } else {
            if (f > 68 && f<96) {
                mensaje = 'Temperatura alta'
            }
            else {
                mensaje ='temperatura desconocida'
            }
        }
        
    }

    return mensaje
    
}


const mostrar = () =>{
    const f= document.getElementById("inp_temp").value
    //envio los datos a la otra funcion
    const respuesta = consulta(f)
    //muestro el resultado en un h1
    document.getElementById("h1_titulo").textContent = respuesta
   
}
    

