const usuarios = [
    {
        nombre: "Juan Pérez",
        email: "juan@gmail.com",
        rol: "administrador"
    },
    {
        nombre: "María López",
        email: "maria@gmail.com",
        rol: "usuario"
    },
    {
        nombre: "Carlos García",
        email: "carlos@gmail.es",
        rol: "editor"
    }
];

function sanearUsuarios(listaUsuarios){
    let emailValido = /^[a-zA-Z0-9]{3,}@[a-zA-Z]+\.com$/;


    for (let usuario of listaUsuarios ){
        
        if(!emailValido.test(usuario.email)){
            console.log("SUSPENDIDO")
            usuario.rol = "SUSPENDIDO";
            usuario.motivoError = "emailInvalido";
        }else{
            console.log("Usuario valido");
        }
    }
}

clonarYCorregir(usuarios[2]);
//sanearUsuarios(usuarios);
console.log(usuarios);

function clonarYCorregir(usuario){
    let copiaUsuario = {...usuario};
    
    let emailValido = /^[a-zA-Z0-9]{3,}@[a-zA-Z]+\.com$/;
    if(!emailValido.test(copiaUsuario.email)){
            copiaUsuario.rol = "SUSPENDIDO";
            copiaUsuario.motivoError = "emailInvalido";
        }
    console.log(copiaUsuario) ;
}
