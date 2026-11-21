var hola;


function mostrarDisco(event){
    event.preventDefault();

    let disco = document.getElementById("disco").value;
    let grupoCantante = document.getElementById("grupoCantante").value;
    let agnoPub = document.getElementById("agnoPub").value;
    let genero = document.getElementById("genero").value;

    let localizacion = document.getElementById("localizacion").value;
    let prestado = document.getElementById("prestado").value;
    if(prestado){
        prestado="Si";
    }
    else{
        prestado="No";
    }

    console.log("hola");
    document.write(
        "<h1>Información del Disco</h1><br>" + 
        "<p>Disco: " + disco + "</p>"+
        "<p>Grupo o Cantante: " + grupoCantante + "</p>"+
        "<p>Año de publicación: " + agnoPub + "</p>"+
        "<p>Género: " + genero + "</p>"+
        "<p>Localizacion: " + localizacion + "</p>"+
        "<p>¿Es prestado?: " + prestado + "</p>"
    );

}
