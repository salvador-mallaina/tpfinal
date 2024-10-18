
function clickBotonCuadrado() {
  if (
    mouseX > posXBoton &&
    mouseX < posXBoton+anchoBoton &&
    mouseY > posYBoton &&
    mouseY < posYBoton+altoBoton) {
    pantallaActual= pantallaActual+1
  }
}

function clickBotonNo() {
  if (
    mouseX >160 &&
    mouseX < 160+anchoBoton &&
    mouseY > 340 &&
    mouseY < 340+altoBoton) {
    pantallaActual= pantallaActual+t
  }
}
function clickBotonSi() {
  if (
    mouseX >480 &&
    mouseX < 480+anchoBoton &&
    mouseY > 340 &&
    mouseY < 340+altoBoton) {
    pantallaActual= pantallaActual+y
  }
}


function BotonFinal() {
  if (
    mouseX >270 &&
    mouseX < 270+100 &&
    mouseY > 340 &&
    mouseY < 340+50) {
    pantallaActual = 0
      t = 1
      y =4
  }
}
