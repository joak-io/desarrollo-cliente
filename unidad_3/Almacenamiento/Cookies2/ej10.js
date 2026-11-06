// function existeCookie(nombre){
//     let cookies = document.cookie;
//     let existe = false;
    
//     return (cookies.includes(nombre+"="));
    
// }

// console.log("hola");

// if(existeCookie("visitas")){
//     console.log("adios");
//     document.cookie"visitas"=document.cookie="visitas="+1;
//     console.log(document.cookie);
// }else{
//     document.cookie="visitas=1";
//     console.log(document.cookie);
//     console.log("Cookie creada");

// }

let cookies = document.cookie.split(";");
for(let i = 0; i < cookies.length; i++){
    let c = cookies[i].trim();
    
    let busqueda = "visitas=";
    if(c.indexOf(busqueda) == 0){
        let visitas = parseInt(c.substring(busqueda.length, c.length));
        visitas++;
        document.cookie = "visitas=" + visitas;
    }else{
    document.cookie = "visitas=1";
    }
}
