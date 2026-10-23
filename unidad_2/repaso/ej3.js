let numero=prompt("Dime un numero a multiplicar: ");
let numeroValido=parseInt(numero);


for (let multiplo=1; multiplo<=10;multiplo++){
    const multiplicado = numeroValido*multiplo;
    console.log(numeroValido + " * " + multiplo + " = " + multiplicado);
    document.getElementById("tabla").innerHTML+="<tr> <td>" + numeroValido + " * " + multiplo + "</td> <td> " + multiplicado + "</td> </tr>";
}


