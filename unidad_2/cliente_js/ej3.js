let edad = prompt("Dime tu edad: ");

if (edad<0){
    alert("La edad debe ser positiva");
}
else if(edad <=12){
    alert("Eres un niño");
}
else if (edad <=26){
    alert("Eres  un joven");
}
else if (edad <=60){
    alert("Eres  adulto");
}
else if (edad >60){
    alert("Eres  jubilado");
}
else{
    alert("Edad inválida");
}