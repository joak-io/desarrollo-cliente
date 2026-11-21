class Coche{
    constructor(modelo, velocidad){
        this.modelo=modelo;
        this.velocidad=velocidad;
        this.encendido=false;
    }

}

let miCoche = new Coche ("Sedan",120);
console.log(miCoche.encendido);