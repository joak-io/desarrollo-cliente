let tabla = document.getElementById("tabla");


function pedirDatos(){
    let nombre = prompt("Nombre de la planta: ");
    let ubicacion = prompt("Ubicacion de la planta: ");
    let ejemplares = prompt("Ejemplares de la planta: ");
    let flor = prompt("Flor de la planta: ");


    tabla.innerHTML += 
    "<tr><td>" + nombre + "</td><td>" 
    + ubicacion + "</td><td>" + ejemplares + "</td><td>" + flor + "</td></tr>";
}

function borrarFila(){
    let ultima = tabla.lastElementChild;
    if(ultima != null && tabla.childNodes.length!=2){
        tabla.removeChild(ultima);
    }

}