//crear un objeto

const miobjeto = {
    nombre: 'Juan',
    apellido: 'Perez',
    dni: 21323245,
    correo: {
        gmail:'jp@gmail.com',
        outlook:'jp@outlook.com',
        yahoo:'jp@yahoo.com'
    }
}

//el console.log va afuera de las llaves
console.log(miobjeto.apellido) 

//mostar los correos
//const gmail =miobjeto.correo.gmail ; //entro de propiedad en propiedad del objeto
//const outlook = miobjeto.correo.outlook;
//const yahoo = miobjeto.correo.yahoo;

//Destructuring Object

const {gmail,outlook, yahoo}= miobjeto.correos



 console.log (`
 correos:

 Gmail: ${gmail}
 Outlook: ${outlook}
 Yahoo: ${yahoo}

 
 
 `)