class CuentaBancaria{
    constructor(titular, saldo){
        this.titular=titular; 
        this.saldo=saldo;
    }

    depositar(cantidad){ 
        this.saldo+=cantidad;
    }

    retirar(cantidad){
        this.saldo-=cantidad;
    }

}

let miCuenta = new CuentaBancaria ("Ana Perez", 500.75);
console.log(miCuenta.saldo);
miCuenta.depositar(150);
console.log("Saldo luego de depositar: " + miCuenta.saldo);
miCuenta.retirar(50);
console.log("Saldo luego de retirar: " + miCuenta.saldo);
console.log("Saldo final: " + miCuenta.saldo);
