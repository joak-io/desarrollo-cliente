let numeroFactorial = prompt("Dime un numero a calcular su factorial: ");
let contador = numeroFactorial;

for(let i=1; i<contador;i++){
    numeroFactorial*=i;
    console.log(numeroFactorial);
}
alert(numeroFactorial);