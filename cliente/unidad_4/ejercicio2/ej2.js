//2. Solicitar un fichero llamado noticias.xml 
//(descargar de Aeducar “Materiales Ajax”) y añadir el 
//cuerpo de cada noticia a una lista html 
//(crear elementos li a la lista con código Javascript,
//    la lista ul inicial se puede crear con html)
// mediante una petición GET al servidor. Usad
//responseXML para recuperar el XML.

function agregaNoticia(){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        let noticias = this.responseXML.getElementsByTagName("cuerpo");
        console.log("Entraste a la funcion");
        let noticia = "";
        let listaDentro ="";

        for(let i=0; i<noticias.length; i++){
            noticia += "<li>" +  noticias[i].textContent + "</li>";
        }

        document.getElementById("lista").innerHTML= noticia;
    }
    xhttp.open("GET", "noticias.xml", true);
    xhttp.send();
}