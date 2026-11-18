const gestorTareas= {
    tareasPendientes: ["Hablar con Mama", "Comprar el pan", "Ir al gym"],
    intervaloId : null,

    agregarTarea(nombre){
        this.tareasPendientes.push(nombre);
        console.log("Tarea agregada");
        console.log(this.tareasPendientes);
    },

    iniciarProcesamiento(){
        console.log("Procesamiento iniciado");
        this.intervaloId= setInterval(() =>{
            console.log(this.tareasPendientes.shift());
            if(this.tareasPendientes.length===0){
                clearInterval(this.intervaloId);
            }
        }, 2000);
    },

    programarAlerta(segundos){
        setTimeout(()=>{
            console.log("El tiempo ha pasado");
        },segundos*1000);
    }
}

gestorTareas.agregarTarea("Hola");

gestorTareas.iniciarProcesamiento();

gestorTareas.programarAlerta(9);