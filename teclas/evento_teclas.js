var teclas = 
{
    UP : 38,
    DOWN : 40,
    RIGHT : 39,
    LEFT : 37
};
//VARIABLES DE LAS TECLAS

console.log(teclas);

var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("black", 149, 149, 151, 151, papel);


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

document.addEventListener("keyup", dibujarTeclado);

function dibujarTeclado(evento)
{
    var colorcito = "green";
    var movimiento = 10;
    switch(evento.keyCode)
    {
        case teclas.DOWN:
            dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
            y = y + movimiento;
        break;

        case teclas.UP:
            dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
            y = y - movimiento;
        break;

        case teclas.RIGHT:
            dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
            x = x + movimiento;
        break;

        case teclas.LEFT:
            dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
            x = x - movimiento;
        break;

        default:
            console.log("ESTA ES OTRA TECLA");
        break;
    }
}

