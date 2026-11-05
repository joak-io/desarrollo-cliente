function existeCookie(nombre){
    let cookies = document.cookie;
    let existe = false;
    
    if(cookies.includes(nombre+"=")){
        existe = true;
    }else{
        existe = false;

    }
    console.log(existe);
}

existeCookie()


function existeCookie(nombre){
    let cookies = document.cookie.split(";");
    let existe = false;
    for(cookie of cookies){
        if(nombre === cookie.split("=")[0]){
            existe = true;
        }
    }
    return existe;
}