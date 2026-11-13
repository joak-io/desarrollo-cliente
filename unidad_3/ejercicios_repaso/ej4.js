class Vehiculo{
    #bastidor;
    static totalFlota=0;

    

    constructor (bastidor, marca, modelo){
        const regexBastidor = /^[a-zA-Z0-9]{17}$/;

        if(regexBastidor.test(bastidor)){
            this.#bastidor=bastidor;
            this.marca = marca;
            this.modelo = modelo;
            this.kilometraje = 0;
            Vehiculo.totalFlota++;
        }else{
            throw new Error("El bastidor no es válido");
        }  
    }
    
    get bastidorOculto(){
        const ultimosCuatro = this.#bastidor.split("").slice(-4).join("");
        return "**********" + ultimosCuatro;
    }

    set sumarKilometros(km){
        if(km>=0){
            this.kilometraje += km;
        }
    }

    obtenerFicha(){
        return "Marca: " + this.marca + " Modelo: " + this.modelo +
        " Kilometraje: " + this.kilometraje + " Bastidor: " + this.bastidorOculto;
    }
}

const v1 = new Vehiculo("23abc123abc123abc","Ford", "Escort");
//console.log(v1.bastidorOculto);
//v1.sumarKilometros = 100;

//console.log(v1.obtenerFicha());

class Camion extends Vehiculo{
    
    constructor(bastidor, marca, modelo,cargaMaxima ){
        super(bastidor, marca, modelo);
        this.cargaMaxima=cargaMaxima;
        this.mercancias = [];
    }

    cargar(nombreMercancia, peso){
        const pesoTotal = this.mercancias.reduce((acc, n) => acc + n.peso, 0);
        if((pesoTotal+peso)>this.cargaMaxima){
            console.log("No se puede añadir, el peso supera la carga maxima");
        }else{
            this.mercancias.push({nombre: nombreMercancia, peso: peso});
        }
    }
    
    obtenerFicha(){
        const pesoTotal = this.mercancias.reduce((acc, n) => acc + n.peso, 0);
        return super.obtenerFicha() +
        " Carga Actual: " + pesoTotal + " Carga Maxima: " + this.cargaMaxima;
    }

    static compararKilometraje(v1, v2){
        if(v1.kilometraje>v2.kilometraje){
            return v1 + " tiene más kilometros";
        }else if(v2.kilometraje>v1.kilometraje){
            return v2 + " tiene más kilometros";
        }else{
            return "Estan empatados en kilometros";
        }
    }

}
