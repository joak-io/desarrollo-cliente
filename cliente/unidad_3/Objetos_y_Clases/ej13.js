class CuentaBancaria{
    #saldo=0;

    constructor(titular){
        this.titular=titular; 
    }

    depositar(cantidad){ 
        this.#saldo+=cantidad;
    }

    retirar(cantidad){
        let retiroExitoso=true;
        if(this.#saldo>cantidad){
            this.#saldo-=cantidad;
        }else{
            retiroExitoso=false;
        }
        return retiroExitoso;
    }
}

let miCuenta = new CuentaBancaria ("Ana Perez");
console.log(miCuenta.#saldo);