class CuentaBancaria{

    constructor(titular, saldo){
        this.titular=titular; 
        this.saldo=saldo;
    }


    depositar(cantidad){ 
        this.saldo+=cantidad;
    }
s
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

function recogerDatos(){
    let nombre = document.getElementById("nombre").value;
    let saldo = document.getElementById("saldo").value;

    if(nombre != "" && saldo != ""){
        let nuevaCuenta = new CuentaBancaria(nombre, saldo);
        console.log("creaste el usuario wachin");
    }
}

function crearCuenta(){
    document.getElementById("cuentaCreada").innerHTML = "Cuenta creada exitosamente";
}