let numero=prompt("Dime un numero: ");
let alReves="";
let contador=numero.length;

if( Number.isInteger(numero) ||parseInt(numero) <=0 || isNaN(numero)){
    alert("El numero debe ser positivo");
}
else{
    while(contador>=0){
        alReves+=numero.charAt(contador);
        contador--;
    };  

    if(numero===alReves){
        alert("El numero "+ numero + " es capicua" + 
        "\nNumero original: "+ numero + " | Numero invertido: " + alReves);

        console.log("El numero "+ numero + " es capicua" + 
        "\nNumero original: "+ numero + " | Numero invertido: " + alReves);
    }
    else{
        alert("No es un numero capicua");
    }
}
