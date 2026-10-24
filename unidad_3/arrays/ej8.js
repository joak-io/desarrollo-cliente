let array=[1,-12,-1,-45,-56,-76];
//Mediante logica
function validarNumeros(arrayNumerico){
    let sonNegativos=false;
    let contadorNegativos=0;
    for (let i of arrayNumerico){
        if (i < 0 ){
            contadorNegativos++;
            console.log(contadorNegativos);
        }
    }
    if(contadorNegativos == arrayNumerico.length){
        sonNegativos=true;
    }
    return sonNegativos;
};
console.log(validarNumeros(array));


// Usando funcion de la biblioteca
function menorQue(arrayNumerico){
    return arrayNumerico < 0;
};

console.log(array.every(menorQue));