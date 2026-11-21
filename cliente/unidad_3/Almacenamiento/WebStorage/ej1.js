// Escribe un script de JavaScript que:
// 1. Guarda una clave llamada "idioma" con el valor "espanol"
//  en el almacenamiento local (localStorage).
// 2. Recupera el valor de la clave "idioma" y lo almacene
//  en una variable llamada idiomaUsuario.
// 3. Muestre el valor recuperado en la consola

localStorage.setItem("idioma","espanol");
let idiomaUsuario = localStorage.getItem("idioma");

console.log(idiomaUsuario);