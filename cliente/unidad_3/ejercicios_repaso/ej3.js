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
