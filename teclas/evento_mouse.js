var cuadrito = document.getElementById("area_de_dibujo");
var papel =cuadrito.getContext("2d");


var eleccion_color = document.getElementById("eleccion_color");
eleccion_color.addEventListener("input", cambiar_color, false);

function cambiar_color(evento)
{
  var colorcito = cambiar_color.value;

  cuadrito.addEventListener("mousedown", dibujarMouse);


  function dibujarMouse(evento)
  {
    cuadrito.addEventListener("mousemove", moverMouse);

    function moverMouse(evento)
    {
      var x = evento.layerX;
      var y = evento.layerY;

      if(evento.bubbles)
      {
        dibujarLinea(colorcito, x - 1, y - 1, x + 1, y + 1, papel);
      }
      console.log(dibujarMouse);
      console.log(evento);
    }
    cuadrito.addEventListener("mouseup", soltarmouse);
    function soltarmouse(evento)
    {
      cuadrito.removeEventListener("mousemove", moverMouse);
    }
  }
  dibujarLinea(colorcito, 1, 1, 1, 299, papel);
  dibujarLinea(colorcito, 1, 299, 299, 299, papel);
  dibujarLinea(colorcito, 1, 1, 299, 1, papel);
  dibujarLinea(colorcito, 299, 1, 299, 299, papel);
}