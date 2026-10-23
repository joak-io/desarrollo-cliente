let prefijo=prompt("Dime un prefijo telefónico (ej: +34): ");

if(prefijo.startsWith("+34")){
    alert("Teléfono español");
}else if(prefijo.startsWith("+54")){
    alert("Teléfono Argentino 🤥");
}else if(prefijo.startsWith("+235")){
    alert("Teléfono Chadiano");
}
