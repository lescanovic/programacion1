function analisis () {
 const nombre = document.getElementById("inp_vehiculo").value

 if (nombre == 'Ford Fiesta') {
    const resultado =  1950000-((5 * 1950000 )/100) 
        alert("su descuento es:"+resultado)

 }
else {
    if (nombre == 'Ford Ka') {
           const resultado = 1700000-((15*1750000)/100) 
            alert ("su descuento es:"+resultado)
    }  

    else {
       const resultado = 2560000-((10*2560000)/100)
       alert ("El descuento de Ford Focus es:"+resultado)
    }
}
} 
