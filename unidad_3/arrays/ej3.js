let numeros = [];
let insertar=0;

do{
    insertar = parseInt(prompt("Dime un numero (0 para salir): "));
    if(insertar!=0 && !isNaN(insertar)){
       numeros[numeros.length] = insertar; 
    }
}while (insertar!=0 && !isNaN(insertar));

let pares=0;
let impares=0;

for (let i of numeros){
    if(numeros[i]%2==0){
        pares++;
    }
    else{
        impares++;
    }
}

console.log("Haz introducido " + pares + " numeros pares");
console.log("Haz introducido " + impares + " numeros impares");

