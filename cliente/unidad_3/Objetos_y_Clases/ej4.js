const carrito={
    productos: [], //array vacio
    total: 0, //numero

    agregarProducto(nombre, precio){//añade producto y actualiza total
        const producto={
            nombre: nombre,
            precio: precio
        }        
        
        this.productos.push(producto);
        this.total++;
        console.log("Total de productos: " + this.total);
    },

    calcularTotal(){//suma de todo el precio de los productos
        let precioTotal=0;
        for (producto of this.productos){
            precioTotal += producto.precio;
        }
        return precioTotal;
    },

    vaciarCarrito(){ //limpia el carrito
        while(this.productos.length>0){
            this.productos.pop();
        }
    }
};


carrito.agregarProducto("Camisa", 25);
carrito.agregarProducto("Pantalón", 40);
console.log(carrito.productos); 
console.log(carrito.calcularTotal()); // 65
carrito.vaciarCarrito();
console.log(carrito.productos); 