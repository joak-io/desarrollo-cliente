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
}

let miCoche = new Coche ("Sedan",120);
console.log(miCoche.encendido);
miCoche.encender();
console.log(miCoche.encendido);
miCoche.apagar();