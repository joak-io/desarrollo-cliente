// a). Construye un array que almacene el nombre de cinco lcalidades a tu eleccion y que las muestre en consola
// b). Ahora haz que solo aparezcan aquellas con posicion impar

let localidades=["Córdoba", "Río Tercero", "Colonia Caroya", "Vicuña Mackena", "Salsipuedes"];

console.log("Construye un array que almacene el nombre de cinco lcalidades a tu eleccion y que las muestre en consola" +
    "\nLocalidades: ")
for (let i of localidades){
    console.log(i);
}

console.log("\nAhora haz que solo aparezcan aquellas con posicion impar " + 
    " Localidades Impar: ")
for (let i in localidades){
    if(i%2 !=0){
        console.log(localidades[i]);
    }
}