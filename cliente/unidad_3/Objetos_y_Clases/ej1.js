const libro ={
    titulo: "El Aleph",
    autor: "Jorge Luis Borges",
    publicacion: 1945,
    precio: 10.99,

    mostrarInfo: function (){
        return "Titulo: "+ this.titulo+
        " Autor: "+ this.autor + " Año de publicacion: "+ 
        this.publicacion + " Precio: " + this.precio;
    }

}

console.log(libro.mostrarInfo());