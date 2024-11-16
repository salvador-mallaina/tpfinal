
function clickBotonCuadrado() {
  if (pantallaActual === 0 ||pantallaActual === 1 || pantallaActual === 2 || pantallaActual === 4 || pantallaActual === 5|| pantallaActual === 6|| pantallaActual === 8|| pantallaActual === 9
    || pantallaActual === 11|| pantallaActual === 12|| pantallaActual === 13|| pantallaActual === 15|| pantallaActual === 17|| pantallaActual === 18|| pantallaActual === 19) {

    if (
      mouseX > posXBoton &&
      mouseX < posXBoton+anchoBoton &&
      mouseY > posYBoton &&
      mouseY < posYBoton+altoBoton ) {
      pantallaActual= pantallaActual+1
    }
  }
}

function clickBotonNo() {
  if (pantallaActual === 3|| pantallaActual === 10|| pantallaActual === 14|| pantallaActual === 16 ) {
    if (
      mouseX >160 &&
      mouseX < 160+anchoBoton &&
      mouseY > 340 &&
      mouseY < 340+80) {
      pantallaActual= pantallaActual+t
    }
  }
}
function clickBotonSi() {
  if (pantallaActual === 3|| pantallaActual === 10|| pantallaActual === 14|| pantallaActual === 16) {
    if (
      mouseX >480 &&
      mouseX < 480+anchoBoton &&
      mouseY > 340 &&
      mouseY < 340+80) {
      pantallaActual= pantallaActual+y
    }
  }
}
function BotonFinal() {
   if (pantallaActual === 7|| pantallaActual === 14|| pantallaActual === 20)
  if (
    mouseX >370 &&
    mouseX < 370+100 &&
    mouseY > 340 &&
    mouseY < 340+50) {
    pantallaActual = 0
      t = 1
      y =5
      musica.pause();
  }
}
