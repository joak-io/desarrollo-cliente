function limpiarCookie(){
    let cookies = document.cookie.split(";");
    console.log("hola");
    for(cookie of cookies){
        let info = cookie.split("=");
        console.log(info[0] + " : " + info[1]);
    }
}

//Bien hecho
function galletasLimpias(){
    let cookies = document.cookie.split(";");
    let resultado = "{"
    for(cookie of cookies){
        let info = cookie.split("=");
        resultado += info[0] + ": " + '"' + info[1] + '", ';
    }
    resultado = resultado.substring(0, resultado.length -2);
    resultado += "}";
    return resultado;
}
console.log(galletasLimpias());


limpiarCookie();