let arrayNumerico = [1,3,4,52,23,45,21,3,34];
let arrayFiltraDos=[];

function filtrarArray(){
    for(let i in arrayNumerico){
        if(arrayNumerico(i)>=10){
            arrayFiltraDos.push(i);
        }
    }
    return arrayFiltraDos;
}

let arrayFiltrado = arrayNumerico.filter(function(numero){
    return numero>=10;
});

console.log(filtrarArray(arrayNumerico))
console.log(arrayFiltrado);