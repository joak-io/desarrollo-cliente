
function aplicarDescuento(event){
    event.preventDefault();

    let precio = parseInt(document.getElementById("precio").value);
    let descuento = 20;
    let precioFinal=0;


    if( precio<=0){
        alert("Precio inválido");
        console.log(precio);
        console.log(descuento);

    }else{
        precioFinal= precio - ((descuento/100)*precio);
        alert("El precio con descuento es de: " + precioFinal + " €");
    }

}