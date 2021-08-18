let btn_inicio = document.getElementById("btn_inicio");
let btn_menu = document.getElementById("btn_menu");
let btn_3 = document.getElementById("btn_3");
let btn_contacto = document.getElementById("btn_contacto");
let main = document.querySelector("#main");

EnviarSolicitud("inicio.html");

btn_inicio.addEventListener("click",function(e){
    e.preventDefault();
    EnviarSolicitud("inicio.html");
});
btn_menu.addEventListener("click",function(e){
    e.preventDefault();
    EnviarSolicitud("otro.html");
});
btn_3.addEventListener("click",function(e){
    e.preventDefault();
    EnviarSolicitud("otro2.html");
});
btn_contacto.addEventListener("click",function(e){
    e.preventDefault();
    EnviarSolicitud("otro3.html");
});

function EnviarSolicitud(url)
{
    let xhr = new XMLHttpRequest();

    xhr.open("GET", url);

    xhr.addEventListener("load", function(){
        main.innerHTML = xhr.responseText;
    });

    xhr.send();
}