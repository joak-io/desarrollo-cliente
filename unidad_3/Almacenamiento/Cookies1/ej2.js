let nombre="idioma";
let valor="espanol";

let duracion = 3600;

document.cookie=`${nombre}=${valor};max-age=${duracion}`;

console.log("Cookie con caducidad creada");
console.log(document.cookie);
