function crear_tabla(){
    let lista= []
    seguimiento_de_pedidos.forEach(element => {
        let tr = `
        <tr>
        <td>${element.nombre}</td>
        <td>${element.fecha}</td>
        <td>${element.estado}</td>
        <td>${element.detalle}</td>
      
    </tr>
    `
    lista.push(tr)
    });
     
    document.getElementById("tb1").innerHTML = lista.join('')
}