class CuentaBancaria{
    #saldo= 0; //Creacion de valores privaos

    constructor(titular){
        this.titular=titular;
    }

    //Getter
    get saldo(){
        return this.#saldo;
    }

    //Setter
    set saldo(s){
        if(s>0){
            this.#saldo=s;
        }
    }

    depositar(cantidad){
        if(cantidad>0){
           this.#saldo += cantidad;
        }
    }
}


// Prueba tu código
const cuenta = new CuentaBancaria("Juan");
cuenta.depositar(100);
console.log("Saldo de la cuenta:" + cuenta.saldo); // 100
cuenta.saldo = -50; // No debería cambiar el saldo
console.log("Saldo de la cuenta:" + cuenta.saldo); // 100