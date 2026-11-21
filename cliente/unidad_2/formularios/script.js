
function validarDatos(event){
    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let edad = document.getElementById("edad").value;

    let datosValidos = true;

    if(nombre===""){
        datosValidos=false;
        mensaje.innerHTML+="Nombre Inválido: Debe tener datos<br>";
    }
    if(email===""){
        datosValidos=false;
        mensaje.innerHTML+="Email Inválido: Debe tener datos<br>";
    }

    if(edad===""){
        datosValidos=false;
        mensaje.innerHTML+="Edad inválida: Debe tener datos.<br>";
    }else if(edad<18){
        datosValidos=false;
        mensaje.innerHTML+="Error: Debes ser mayor de 18<br>";
    }

    if(datosValidos && edad>18){
        mensaje.innerHTML+="Datos Correctos";
    }


  



}