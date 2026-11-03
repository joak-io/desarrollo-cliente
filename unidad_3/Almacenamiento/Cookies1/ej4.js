// Imaginemos que queremos saber el valor de la cookie "idioma"
let busqueda="idioma=";
document.cookie="idioma=ingles";

let cookies = document.cookie.split(';'); // Dividimos el string largo en un array por cada ';'

// Recorremos las cookies encontradas
for (let i=0; i<cookies.length; i++){
    let c=cookies[i].trim(); // Quitamos espacios en blanco sobrantes
    
    // Si la cookie empieza con "idioma="
    if(c.indexOf(busqueda) == 0){
        // Cortamos el nombre para quedarnos solo con el valor
        let valorEncontrado=c.substring(busqueda.length, c.length);
        console.log("¡Encontrado! El idioma es: " + valorEncontrado);
    }
}
