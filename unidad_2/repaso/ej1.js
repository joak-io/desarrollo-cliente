let edad=prompt("Dime tu edad: ");

edadVerif=parseInt(edad);

if(edad<18){
    alert("Menor de edad");
}else if(edad>=18 && edad<65){
    alert("Adulto");
}else if(edad>65){
    alert("Jubilado");
}else{
    alert("Introduce una edad correcta");
}