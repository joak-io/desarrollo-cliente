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

let miCuenta = new CuentaBancaria ("Ana Perez", 500.75);
console.log(miCuenta.saldo);
miCuenta.depositar(150);
console.log("Saldo luego de depositar: " + miCuenta.saldo);
let exito=miCuenta.retirar(1000);
console.log(exito);

