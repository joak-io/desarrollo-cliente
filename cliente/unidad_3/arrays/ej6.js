let arrayFiltraDos=[];

function filtrarArray(arrayNumerico){
    for(let i in arrayNumerico){
        if(arrayNumerico[i]>=10){
            arrayFiltraDos.push(arrayNumerico[i]);
        }
    }
    return arrayFiltraDos;
}

let arrayNumerico = [1,3,4,52,23,45,21,3,34];

console.log(filtrarArray(arrayNumerico));


let arrayFiltrado = arrayNumerico.filter(function(numero){
    return numero>=10;
});
console.log(arrayFiltrado);



