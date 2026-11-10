function cambiarContent(){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        document.getElementById("prueba").innerHTML = this.responseText;
        document.getElementById("prueba2").innerHTML= this.responseText;
    }
    xhttp.open("GET", "holaMundo.txt", true);
    xhttp.send();
}

