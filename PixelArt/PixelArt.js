class PixelArt 
{
    constructor() {
        this.canvas = document.getElementById('main');
        this.px = 20;
        this.canvas.width = window.innerWidth - 10*this.px;
        this.canvas.height = window.innerHeight - 10*this.px;
        this.ctx = this.canvas.getContext('2d');
        this.filas = parseInt(this.canvas.height / this.px);
        this.columnas = parseInt(this.canvas.width / this.px);
        this.x = 0;
        this.y = 0;
        this.color = "white";
        this.tabla = [];
    }

    dibujarCuadrado(x, y, color = this.color, strokeColor = "black") {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x*this.px, y*this.px, this.px, this.px);
        this.ctx.strokeStyle = strokeColor;
        this.ctx.strokeRect(x*this.px, y*this.px, this.px, this.px);
    }

    dibujarTabla() {
        for (let r = 0; r < this.filas; r++) 
        {
            this.tabla[r] = [];
            for (let c = 0; c < this.columnas; c++) 
            {
                this.tabla[r][c] = "white";
                this.dibujarCuadrado(c, r, this.tabla[r][c]);
                this.dibujarCuadrado(c, r, this.tabla[r][c], "grey");
            }
        }
    }

    moverIzquierda() {
        if (this.x > 0) {
            this.dibujarCuadrado(this.x, this.y, this.tabla[this.y][this.x], "grey");
            this.x--;
            this.dibujarCuadrado(this.x, this.y);
        }
    }

    moverDerecha() {
        if (this.x < this.columnas - 1) {
            this.dibujarCuadrado(this.x, this.y, this.tabla[this.y][this.x], "grey");
            this.x++;
            this.dibujarCuadrado(this.x, this.y);
        }
    }

    moverArriba() {
        if (this.y > 0) {
            this.dibujarCuadrado(this.x, this.y, this.tabla[this.y][this.x], "grey");
            this.y--;
            this.dibujarCuadrado(this.x, this.y);
        }
    }

    moverAbajo() {
        if (this.y < this.filas - 1) {
            this.dibujarCuadrado(this.x, this.y, this.tabla[this.y][this.x], "grey");
            this.y++;
            this.dibujarCuadrado(this.x, this.y);
        }
    }

    pintar() {
        this.tabla[this.y][this.x] = this.color;
    }

    borrar() {
        this.tabla[this.y][this.x] = "white";
        this.dibujarCuadrado(this.x, this.y, "white");
    }
}