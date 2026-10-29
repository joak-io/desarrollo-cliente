class CuentaBancaria{
    constructor(titular, saldo){
        this.titular=titular; 
        this.saldo=saldo;
    }

    depositar(cantidad){ 
        this.saldo+=cantidad;
    }

    retirar(cantidad){
        let retiroExitoso=true;
        if(this.saldo>cantidad){
            this.saldo-=cantidad;
        }else{
            retiroExitoso=false;
        }
        return retiroExitoso;
    }
}

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


function comprarCoche(cuenta, precio){
    if(cuenta.retirar(precio) != false){
        console.log("¡Compra Exitosa!");
    }else{
        console.log("Fondos insuficientes para la compra");
    }
}

let miCuenta = new CuentaBancaria ("Ana Perez", 500.75);
comprarCoche(miCuenta, 400.00);