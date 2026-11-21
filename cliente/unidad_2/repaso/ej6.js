let numero=parseInt(prompt("Dime un numero: "));

if(numero<0){
    alert("Inserta un número Entero Positivo");
}
else{
    let sumaVal=0;
    for(let i=1; i<numero;i++){
        if(numero%i===0){
            sumaVal+=i;
        }
    }
    if(sumaVal===numero){
        alert("Es un numero perfecto");
    }
    else{
        alert("No es un numero perfecto");
    }
}

