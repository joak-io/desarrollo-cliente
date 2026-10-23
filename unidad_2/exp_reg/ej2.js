const userRrss = /^\@\w{3,15}$/;
const hashtag = /^\#\w+$/;
const urlYt = /^https:\/\/www\.youtube\.com\//;
const urlGithub = /^https:\/\/www\.github\.com\//;
const domWeb = /(.com|.es|.org|.net)$/;
const correoDominio = /\@gmail\.com$/;


var useRRSS=prompt("Dime un nombre de usuario: ");
if(userRrss.test(useRRSS)){
    alert("Nombre de usuario válido");
}
else{
    alert("Nombre de usuario inválido")
}

var hashTag=prompt("Dime un Hashtag: ");
if(hashtag.test(hashTag)){
    alert("Hashtag válido");
}
else{
    alert("Hashtag inválido")
}


var urlYtube=prompt("Dime una URL de YouTube: ");
if(urlYt.test(urlYtube)){
    alert("URL de youtube válida");
}
else{
    alert("URL de youtube inválida")
}


var urlGithu=prompt("Dime una URL de Github: ");
if(urlGithub.test(urlGithu)){
    alert("URL de Github válida");
}
else{
    alert("URL de Github inválida")
}


var dominio=prompt("Dime una dominio web: ");
if(domWeb.test(dominio)){
    alert("Dominio web válido");
}
else{
    alert("Dominio web inválido")
}

var correo=prompt("Dime un correo: ");
if(correoDominio.test(correo)){
    alert("Correo válido");
}
else{
    alert("Correo inválido")
}