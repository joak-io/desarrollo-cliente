function comprobarCaracteres(){
    let caractRestantes = 100 - (document.getElementById("texto").value.length);
    let etiqueta = document.getElementById("etiqueta");
    etiqueta.innerHTML = "Te quedan " + caractRestantes + " caracteres";
    if(caractRestantes===0){
        etiqueta.innerHTML = "Te quedaste sin voz ni voto";
    }

};

