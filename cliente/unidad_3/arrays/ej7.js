arrayTriplicado=[];

function triplicar(array){
    
    for(let i in array){
        arrayTriplicado[i] = array[i] * 3;
    }
    return arrayTriplicado;
}

let array = [14,41,31,33,47];
console.log(triplicar(array));

//Usando una funcion para crear otro array que sea con
// los numero triplicados
console.log(array.map(numero=>numero*3));


