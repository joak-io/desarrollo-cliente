let letras = ["a","b","c","d","e","f","g","h"];
let letraInser = prompt("Dime una letra: ");


function existeLetra(letraInser, letras){
    for (let i of letras){
        if(i == letraInser){
            return true;
        }else{
            return false;
        }
    }
}
console.log(existeLetra(letraInser, letras));