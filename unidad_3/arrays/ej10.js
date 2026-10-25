/*
Ejercicio 10. Carrito de compras con eliminación dinámica
Dado un array multidimensional inicial con productos y precios [["Teclado", 25], ["Ratón", 15],
["Monitor", 180]], muestra estos elementos en una tabla HTML. Cada fila debe incluir un
botón "Eliminar" que borre el sub-array correspondiente según su índice y vuelva a pintar la
tabla actualizando el precio total acumulado en un <span>.
*/
    let productos = [
        ["Teclado", 25], 
        ["Raton", 15],
        ["Monitor",180]
    ];


let precioTotal=0;

function mostrarTabla(){
let tabla = document.getElementsByName("tabla").innerHTML="";
tabla =document.getElementById("tabla").innerHTML="<h1>Carrito de Compras</h1><tr><th>Producto</th><th>Precio</th><th>Otro</th></tr>";
precioTotal=0;
    for (let nombres=0; nombres<productos.length; nombres++){
        let tr = document.createElement("tr");

        let boton=document.createElement("button");
        let txtBorrar=document.createTextNode("Borrar");
        boton.appendChild(txtBorrar);
        boton.addEventListener("click", function(){
            borrarFila(nombres); //Funcion anonima -> Se declara en el momento de usarse
        });

        precioTotal += productos[nombres][1];

        for (let precios=0; precios<productos[nombres].length; precios++){
            console.log(productos[nombres][precios]);
            let td = document.createElement("td");
            let texto = document.createTextNode(productos[nombres][precios]);
            td.appendChild(texto);
            tr.appendChild(td);
        }
        tr.appendChild(boton);

        document.getElementById("tabla").appendChild(tr);
    }
    let span = document.getElementById("total").innerHTML="Precio Total: " + precioTotal + "€ ";

};
console.log(mostrarTabla());


function borrarFila(nombres){
    productos.splice(nombres, 1);
    console.log(productos);
    mostrarTabla();
    console.log(precioTotal);
}

console.log(productos);
console.log(precioTotal);