let numero = Math.floor(Math.random() * 10)+1;

let adivinador = prompt("Intenta adivinar el número: ");

adivinadorValid=parseInt(adivinador);

if(numero===adivinadorValid){
    alert("Haz adivinado el numero");
}
else{
    alert("No adivinaste, pedazo de gil \nEl numero era " + numero);
}