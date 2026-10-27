const carrito={
    productos: [], //array vacio
    total: 0, //numero
 

    agregarProducto(nombre, precio){//añade producto y actualiza total
        const producto={
        nombre: nombre,
        precio: precio
        }        
        
        this.productos.push(producto) ;
        this.total++;
        console.log(this.total)
    },

    calcularTotal(){//suma de todo el precio de los productos

    },

    vaciarCarrito(){//limpia el carrito

    }
};


carrito.agregarProducto("Camisa", 25);
carrito.agregarProducto("Pantalón", 40);
console.log(carrito.calcularTotal()); // 65
carrito.vaciarCarrito();
console.log(carrito.productos); 