document.addEventListener("DOMContentLoaded", main);

function main() {
    let pa = new PixelArt();
    
    pa.dibujarTabla();
    pa.dibujarCuadrado(0, 0);

    let colors = document.getElementsByClassName("colors")[0].childNodes;

    for (const key in colors) {
        console.log(colors[key].nodeName);
        if (colors[key].nodeName === "DIV") {
            colors[key].onclick = function() {
                pa.color = colors[key].id;
                pa.dibujarCuadrado(pa.x, pa.y);
            }
        }
    }

    document.addEventListener("keydown", function(e)
    {
        switch (e.keyCode) 
        {
            case 32:
                pa.pintar();
                break;
            case 17:
                pa.borrar();
                break;
            case 37:
                pa.moverIzquierda();
                break;
            case 38:
                pa.moverArriba();
                break;
            case 39:
                pa.moverDerecha();
                break;
            case 40:
                pa.moverAbajo();
                break;
        }
    });

    document.addEventListener("keyup", function(e)
    {
        switch (e.keyCode)
        {
            case 17:
                pa.dibujarCuadrado(pa.x, pa.y, pa.color);
                break;
        }
    });
}