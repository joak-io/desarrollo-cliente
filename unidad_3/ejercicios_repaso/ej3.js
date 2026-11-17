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

