const numTelefono=/9\d{8}$/;
const fechaFormato=/\d{2}\/\d{2}\/\d{4}$/;
const codPostal= /\d{5}$/;
const htmlEtiqueta=/^<\w+\?\>$/;
const nieNif= /^[A-Z0-9]\d{7}[A-Z]$ / ;
const email= /\w+\@\w+\.\w+$/;

//TELEFONO
var telefono=prompt("Dime un numero de telefono: ");
if(numTelefono.test(telefono)){
    alert("Numero de teléfono válido");
}
else{
    alert("Numero de teléfono inválido")
}

//FECHA
var fecha=prompt("Dime una fecha: ");
if(fechaFormato.test(fecha)){
    alert("Fecha válida");
}
else{
    alert("Fecha inválida")
}

//CODIGO POSTAL
var codPos=prompt("Dime un codigo postal: ");
if(codPostal.test(codPos)){
    alert("Código postal válido");
}
else{
    alert("Código postal inválido")
}

//ETIQUETA HTML
var etiqueta=prompt("Dime una etiqueta HTML: ");
if(htmlEtiqueta.test(etiqueta)){
    alert("Etiqueta HTML válida");
}
else{
    alert("Etiqueta HTML inválida")
}

//NIE O NIF
var nieNifprompt=prompt("Dime un NIE o NIF: ");
if(nieNif.test(nieNifprompt)){
    alert("NIF/NIE válido");
}
else{
    alert("NIF/NIE inválido")
}

//EMAIL
var emailPrompt=prompt("Dime un email: ");
if(email.test(emailPrompt)){
    alert("Email válido");
}
else{
    alert("Email inválido")
}
