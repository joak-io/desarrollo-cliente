let horas = 9;
let minuto = 0;

for (; horas < 21; minuto += 5) {
  if (minuto==60) {
    horas ++;
    minuto = 0;
    console.log(horas + ":0" + minuto);
  }
  else if(minuto<10){
    console.log(horas+":0"+minuto);
  }
  else{
    console.log(horas+":"+minuto);
  }

}
