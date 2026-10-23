let nota = parseFloat(prompt("Dime la nota del examen: "));

if(nota<5){
    alert("Suspenso");
}
else if(nota>=5){
    alert("Aprobado");
}
else if(nota>=7){
    alert("Notable");
}
else if(nota>=9){
    alert("Sobresaliente");
}
else{
    alert("Nota invalida");
}