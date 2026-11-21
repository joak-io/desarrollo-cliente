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

class CocheElectrico extends Coche{

    constructor(modelo, velocidad, bateria){
        super(modelo, velocidad);
        this.bateria=100;
    }

    cargar(){
        console.log("Batería cargada al 100%");
    }

}

let tesla = new CocheElectrico("Cybertruck",80);
console.log(tesla.cargar());