var eleccion_color = document.getElementById("caja_color");



var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);


var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}


function dibujoPorClick()
{
    var number = parseInt(texto.value);
    var lineas = number;
    var l = 0;
    var yi, xf;
    var colorcito = "rgb(0, 252, 13)";
    var colorcito2 = "rgb(25, 0, 252)";
    var espacio = ancho / lineas;

    //LINEAS DEL DIBUJO DEL MEDIO

    for(l = 0; l < lineas / 2; l++)
    {
      yi = espacio * l;
      xf = 200 - (espacio *(l + 1));
      dibujarLinea(colorcito2, 200, yi, xf, 200)
    }

    for(l = 0; l < lineas / 2; l++)
    {
        yi = 400 -(espacio * l);
        xf = 200 -(espacio *(l + 1));
        dibujarLinea(colorcito2, 200, yi, xf, 200)
    }

    for(l = 0; l < lineas / 2; l++)
    {
        yi = espacio *l;
        xf = 200 +(espacio *(l + 1));
        dibujarLinea(colorcito2, 200, yi, xf, 200)
    }



    for(l = 0; l < lineas / 2; l++)
    {
        yi = 400 -(espacio *l);
        xf = 200 +(espacio*(l + 1));
        dibujarLinea(colorcito2, 200, yi, xf, 200)
    }


    //4 LADOS :) ESQUINAS

    for(l = 0; l < lineas; l++)
  {
    yi = 200 -(espacio *l);
    xf = espacio *(l + 1);
    dibujarLinea(colorcito, 0, yi, xf, 0);
  }

    for(l = 0; l < lineas; l++)
  {
    yi = 200 -(espacio * l);
    xf = 400 -(espacio *(l + 1));
    dibujarLinea(colorcito, 400, yi, xf, 0);
  }

    for(l = 0; l < lineas; l++)
    {
    yi = 200 +(espacio *l);
    xf = espacio *(l + 1);
    dibujarLinea(colorcito, 0, yi, xf, 400);
    }


    for(l = 0; l < lineas; l++)
    {
        yi = 200 + (espacio * l);
        xf = 400 - (espacio * (l+1));
        dibujarLinea(colorcito, 400, yi, xf, 400);
    }
    dibujarLinea(colorcito, 200, 0, 200, 400);
    dibujarLinea(colorcito, 0, 200, 400, 200);
    dibujarLinea(colorcito, 1, 1, 1, 399);
    dibujarLinea(colorcito, 399, 399, 399, 1);
    dibujarLinea(colorcito, 1, 1, 399, 1);
}