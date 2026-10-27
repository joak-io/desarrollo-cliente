class Estudiante{
    constructor(nombre, edad){
        this.nombre=nombre;
        this.edad=edad;
        this.cursos=[];
    }

    inscribirCurso(curso){ //Añade un curso al array
        this.cursos.push(curso);
        return "Curso añadido";
    }

    listarCursos(){ //Devuelve string con todos los cursos
        return this.cursos.toString();
    }

    esMayorDeEdad(){ //Devuelve true si es mayor de 18
        let esMayor= false;
        if(this.edad>=18){
            esMayor=true;
        }
        return esMayor;
    }
}

const ana = new Estudiante("Ana", 20);
ana.inscribirCurso("Matemáticas");
ana.inscribirCurso("Programacion");
console.log(ana.listarCursos()); 
console.log(ana.esMayorDeEdad()); 