class Coche{
    constructor(modelo, velocidad){
        this.modelo=modelo;
        this.velocidad=velocidad;
        this.encendido=false;
    }

    encender(){
        this.encendido=true;
    }

    apagar(){
        if(this.encendido=true){
            this.encendido=false;
        }
    }

    acelerar(incremento){
        if(this.encendido == true){
            this.velocidad+=incremento;
        }else{
            console.log("No se puede acelerar el coche. Está apagado");
        }
    }

}

let miCoche = new Coche ("Sedan",120);
console.log(miCoche.encendido);
miCoche.acelerar(20);
miCoche.encender();
miCoche.acelerar(20);
console.log(miCoche.velocidad);