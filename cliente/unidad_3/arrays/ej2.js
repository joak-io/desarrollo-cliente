let numeros=[2,2,2,2,2];
let sumaTotal=0;

function sumaLista(numeros){
    for (let i of numeros){
        sumaTotal+=i;
    }
    return sumaTotal;
}

console.log(sumaLista(numeros));