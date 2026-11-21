function cargaCatalogo(){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        let artistasDiscos = this.responseXML.getElementsByTagName("CD");
        console.log("Hola");
        
        let art = "";
        let disc = "";
        let contenidoTabla="<tr><th>Artista</th> <th>Titulo</th></tr>";

        for (let i=0; i<artistasDiscos.length; i++) {
            disc += "<td>" + artistasDiscos[i].getElementsByTagName("TITLE").childNodes[0].nodeValue + "</td>";
            art += "<td>" + artistasDiscos[i].getElementsByTagName("ARTIST").childNodes[1].nodeValue + "</td>";

            let tabla = disc + art;
        }

        document.getElementById("demo").innerHTML= tabla;
    }
    xhttp.open("GET", "cd_catalog.xml", true);
    xhttp.send();
}