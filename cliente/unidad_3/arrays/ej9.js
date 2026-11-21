/*
Ejercicio 9. Lista de tareas interactiva con ordenación
Crea una interfaz donde el usuario introduzca tareas mediante un <input>. 
Las tareas se guardan en un array global de textos. 
Incluye botones para renderizar la lista en un <ul> y 
ordenar el array alfabéticamente antes de actualizar el DOM
*/

let tareas =["prueba","hola", "Aaab", "AAab"];

function agregarAlArray(insercion){
    insercion = document.getElementById("tareas").value;
    if(insercion !== "" && insercion !== null && insercion.startsWith(" ") == false){
        tareas.push(insercion);
    }
    console.log(tareas);
};

function renderizarLista(){
    let reset = document.getElementById("lista").innerHTML="";
    for (let i in tareas){
        let li = document.createElement("li");
        let texto = document.createTextNode(tareas[i]);
        li.appendChild(texto);
        document.getElementById("lista").appendChild(li);
    }
    console.log("chau");
};

function ordenarAlfab(){
    tareas.sort();
    renderizarLista();
    console.log(tareas);
};
