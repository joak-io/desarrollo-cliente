// Enunciado:
// Supongamos que recibes el siguiente string de un servidor: 
// '{"producto": "Monitor", "precio": 150}':
// 1. Asigna ese string a una variable.

const json = `{"producto" : "Monitor", "precio" : 150}`;

// 2. Convierte (parsea) ese string a un objeto nativo de JavaScript.
let productos = JSON.parse(json);

// 3. Imprime en consola solo el precio del producto
console.log(productos.precio);