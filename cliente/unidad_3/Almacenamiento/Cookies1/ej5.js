// 1. Seleccionamos la cookie que queremos borrar por su nombre.
// 2. IMPORTANTE: Si le pusiste un path o domain al crearla, debes ponerlos igual aquí.
// 3. Establecemos max-age=0 (vida de 0 segundos)

document.cookie="usuario=;max-age=0"; //ELIMINA UNA COOKIE

console.log("Cookie 'usuario' eliminada");
console.log("Cookies restantes: ", document.cookie);
