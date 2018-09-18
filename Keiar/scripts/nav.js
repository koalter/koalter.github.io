$(document).ready(function()
{
//START NAV

    let main = document.querySelector("main");

    $('#btn_inicio').click(function()
    {
        main.innerHTML = '<section id="ads"><div class="bullets"><div class="button active"></div><div class="button"></div><div class="button"></div></div><img id="first" class="item" src="img/slide1.jpg"><img class="item" src="img/slide2.jpg"><img class="item" src="img/slide3.jpg"></section><section><h2 align="center">¡Encontrá todo lo que necesitas para lucir más bella!</h2><div class="row"><div class="category"><img src="img/maquillaje.jpg" alt="maquillaje"><p>Maquillaje</p></div><div class="category"><img src="img/labiales.jpg" alt="labiales"><p>Labiales</p></div></div><div class="row"><div class="category"><img src="img/esmaltes.jpg" alt="esmaltes"><p>Esmaltes</p></div><div class="category"><img src="img/accesorios.jpg" alt="accesorios"><p>Accesorios</p></div></div><div class="row"><div class="category"><img src="img/salud.jpg" alt="salud"><p>Salud</p></div><div class="category"><img src="img/mas.jpg" alt="mas"><p>¡y más!</p></div></div></section>';
    });
    $('#btn_novedades').click(function()
    {
        main.innerHTML = '<div class="container"><div class="news-box"><img src="https://img.banggood.com/images/oaupload/banggood/images/FA/8D/3ad22348-17db-4b7f-afcd-3ccee4e769d0.jpg"><div class="news-content"><h2>¡¡Llegaron los labiales peel-off!!</h2><p>¡Lo que tanto estaban esperando ya esta acá! ¡¡Aprovechá y llevate el tuyo con un 25% de descuento por esta semana!!</p></div></div><div class="news-box"><img src="https://http2.mlstatic.com/3x2-esmalte-color-unas-revlon-manicuria-esmaltado-D_NQ_NP_587825-MLA25514976504_042017-F.jpg"><div class="news-content"><h2>¡¡3x2 en esmaltes seleccionados!!</h2><p>¡Durante este mes llevate dos esmaltes y el tercero va de regalo!</p></div></div><div class="news-box"><img src="https://facebookbrand.com/wp-content/themes/fb-branding/prj-fb-branding/assets/images/fb-art.png"><div class="news-content"><h2>Ya tenemos nuestra propia página en Facebook.</h2><p>Visitanos haciendo click <a>acá</a></p></div></div></div>';
    });
    $('#btn_catalogo').click(function(){});
    $('#btn_contacto').click(function()
    {
        main.innerHTML = '<section><h2>Contactate con nosotros</h2><form><div><label for="nombre">Nombre:</label><input type="text" id="nombre"></div><div><label for="email">Email:</label><input type="text" id="email"></div><div><label for="mensaje">Mensaje:</label><textarea id="mensaje"></textarea></div><div><button type="submit">Enviar</button></div></form></section>';
    });

    //END NAV
});