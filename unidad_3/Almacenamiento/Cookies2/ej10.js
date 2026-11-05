function existeCookie(nombre){
    let cookies = document.cookie;
    let existe = false;
    
    if(cookies.includes(nombre+"=")){
        existe = true;
    }else{
        existe = false;
    }
}

let numVisitas="";

if(!existeCookie("visitas")){
    numVisitas=1;
    document.cookie=`visitas=${numVisitas}`;
    console.log(document.cookie);
    console.log("Cookie creada");
}else{
    numVisitas++;
    document.cookie=`visitas=${numVisitas}`;
    console.log();

}