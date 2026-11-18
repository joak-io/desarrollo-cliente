<<<<<<< HEAD
function Libro(autor, titulo, isbn){
    this.autor=autor;
    this.titulo=titulo;
    this.isbn=isbn;
    this.prestado = false;
}

Libro.prototype.prestar= function(){
    if(!this.prestado){
        this.prestado=true;
    }else{
        console.log("El libro ya estaba prestado");
    }
}

Libro.prototype.devolver= function(){
    if(this.prestado){
        this.prestado=false;
    }else{
        console.log("El libro ya estaba libre");
    }
}

Libro.prototype.exportarJSON = function (){
    return `{Titulo: ${this.titulo}, Autor: ${this.autor}, IBSN: ${this.isbn}, Prestado: ${this.prestado ? "Si" : "No"} }`;
}

const libros = [
    new Libro("JK Rowling", "Harry Potter 1", "978-123"),
    new Libro("Patrick Rothfuss", "El nombre del viento", "647-321")
];


function algunosPrestados(libros){
   if( libros.some(libro=> libro.prestado) ){
    console.log("Si hay un libro prestado");
   }else{console.log("No se prestó ningun libro")}
}

function buscarLibro(libros, isbn){
    return libros.find(libro=> libro.isbn === isbn);
}

let libroJSON = libros[1].exportarJSON();
libroJSON = JSON.parse(libroJSON);
if(libroJSON instanceof Libro){
    console.log("Es un libro");
}else{console.log("Ya no es un libro")};



=======
function Libro(titulo, autor, isbn){
    this.titulo=titulo;
    this.autor=autor;
    this.isbn=isbn;
    let prestado = false;
}

Libro.prototype.prestar = function(){
    if(prestado==true){
        alert("Ya se ha prestado el libro");
    }else{
        prestado=true;
    }
}

Libro.prototype.devolver = function(){
    if(prestado==false){
        alert("No se puede devolver un libro que no ha sido prestado");
    }else{
        prestado=false;
    }
}

Libro.prototype.exportarJSON = function(){
    return JSON.stringify(this); //IA
}

const libros =[
    new Libro ("JK Rowling", "Harry Potter 1", "978-123"),
    new Libro ("Patrick Rothfuss", "El nombre del viento", "647-312")
];

let libroJson = libros[1].exportarJSON();
let libroReconstruido = JSON.parse(libroJson);
console.log(libroReconstruido instanceof Libro);

const Biblioteca={
algunoPrestado(libros){
    return libros.some(libro => libro.prestado);
},

buscarLibros(libros, isbn){
    return libros.find(libro => libro.isbn === isbn);
}

}

>>>>>>> 1ce59be2b23f25b20b39e83b420720e69751200a
