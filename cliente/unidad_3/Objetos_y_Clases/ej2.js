function Producto(nombre, precio, categoria){
    this.nombre=nombre;
    this.precio=precio;
    this.categoria=categoria;
    this.descuento=aplicarDescuento;
    
    
}

function aplicarDescuento(procentaje){
    this.precio = this.precio - ((this.precio*procentaje)/100);
}

const laptop= new Producto("Laptop", 1000, "Tecnología");
laptop.descuento(20);
console.log(laptop.precio);