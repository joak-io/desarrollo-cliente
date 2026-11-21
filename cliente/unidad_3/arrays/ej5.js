let insertado = prompt("Dime un producto: ");


function consultarProducto(productoInser){
    let productos=[ 
        ["monitor", 200], 
        ["teclado", 20], 
        ["raton", 10]
    ];

    for (let [producto, precio] of productos){
        if(producto === productoInser){
            return precio;
        }
    }
    return false;
}

console.log(consultarProducto(insertado));