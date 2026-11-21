let hora=9;
let minuto=0;


for(; hora <=21; hora++){
    if(minuto==0){
        console.log(hora + ":" + minuto + "0");
        minuto=3;
        hora--;
    }
    else{
        console.log(hora + ":" + minuto +"0");
        minuto=0;
    }
}


