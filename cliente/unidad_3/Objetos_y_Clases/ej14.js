class CuentaBancaria{
    #saldo=0;

    constructor(titular){
        this.titular=titular; 
    }

    //Getter
    get getSaldo(){
        return this.#saldo;
    }

    //Setter
    set setTitular(titularNuevo){
        console.log("hola");
        if(titularNuevo != "" && titularNuevo.trim().length>0){
            this.titular=titularNuevo;
        }
        else{
            console.log("Debes introducir un nombre que no este vacio");
        }
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
console.log(miCuenta.getSaldo);
miCuenta.setTitular=" ";
console.log(miCuenta);