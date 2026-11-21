let nombre;
let apellido;
let edad;

nombre=prompt("Dime el nombre del alumno: ");
apellido=prompt("Dime el apellido del alumno: ");
edad= parseInt(prompt("Dime la edad del alumno: "));

let nacimiento= new Date().getFullYear() - edad;

alert(
    "El Alumno con nombre " + nombre
    + " " + apellido +
    " ha nacido en el año " +
    nacimiento
);

