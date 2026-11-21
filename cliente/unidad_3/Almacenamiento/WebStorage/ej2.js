// Crea un ítem en el sessionStorage con la clave "usuario_temporal" 
// y valor "invitado123".
sessionStorage.setItem("usuario_temporal","invitado123");
// 2. Comprueba que se ha guardado mostrándolo en consola.
console.log(sessionStorage.getItem("usuario_temporal"));
// 3. Elimina explícitamente ese ítem utilizando el método adecuado.
sessionStorage.removeItem("usuario_temporal");
// 4. Intenta recuperarlo de nuevo para verificar que devuelve null.
console.log(sessionStorage.getItem("usuario_temporal"));