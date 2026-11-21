class Alumno{

    constructor(nombre, edad, curso, tieneBeca){
        this.nombre=nombre;
        this.edad=edad;
        this.curso= curso;
        this.tieneBeca=tieneBeca;
    }

    get resumen(){
        return "Nombre: " + this.nombre + " Edad: " + this.edad + " Curso: " 
        + this.curso + " Tiene beca? " + this.tieneBeca;
    }

    static validarDatos(nombre, edad){
        let valido=false;
        if (!isNaN(edad) && edad>=16){
            let nombreValido = nombre.trim();
            if(nombreValido.length>0){
                valido = true;
            }
        }
        return valido;
    }
}

class GestorUI{

    constructor(formRegistro, listaAlumnos, btnBorrarUltimo){
        this.formRegistro=document.getElementById("formRegistro");
        this.listaAlumnos=document.getElementById("listaAlumnos");
        this.btnBorrarUltimo=document.getElementById("btnBorrarUltimo");

        this.formRegistro.addEventListener("submit", (e)=>this.agregarAlumno(e));
        this.btnBorrarUltimo.addEventListener("click", this.eliminarNodo.bind(this));
        console.log("hola");
    }

        agregarAlumno(event){
            event.preventDefault();
            console.log("evento");

            const nombre = document.getElementById("nombre").value;
            const edad = document.getElementById("edad").value;
            const curso = document.getElementById("curso").value;
            const beca = document.getElementById("beca").checked;

            if(Alumno.validarDatos(nombre,edad)){
                const alumno = new Alumno(nombre, edad, curso, beca);
                console.log("validados");
                document.getElementById("listaAlumnos").innerHTML+="<li>" + alumno.resumen + "</li>";
            }else{
                alert("Datos invalidos");
            }
        }

        eliminarNodo(){
            console.log("evento borrar");
            let items = document.getElementById("listaAlumnos").getElementsByTagName("li");
            if(items.length>0){
                let ultimo = items[items.length - 1];
                ultimo.parentNode.removeChild(ultimo);
            }else{alert("No hay alumnos para borrar")};
        }
    }

new GestorUI;