
function reload() {
  anchoTexto = anchoPantalla * 0.8;
  tamTexto = altoPantalla * 0.10;
  inicioTexto = anchoPantalla * 0.05;

  textSize(tamTexto);
}
function pantalla1Boton(imagen, obtenerTextActual) {
  fill(200, 50, 40);
  image(misImagenes[imagen], 0, 0, anchoPantalla, altoPantalla);
  rect( posXBoton, posYBoton, anchoBoton, altoBoton );
  fill(0, 255, 255);
  text( misTextos[obtenerTextActual], inicioTexto, inicioTexto, anchoTexto );
}
function pantallaCon2Botones(imagen) {
  fill(255);
  image(misImagenes[imagen], 0, 0, anchoPantalla, altoPantalla);
  rect(160, 340, anchoBoton, altoBoton);
  rect(480, 340, anchoBoton, altoBoton);
}
function pantallaFinal(imagen) {
  fill(0, 150, 0),
    image(misImagenes[imagen], 0, 0, anchoPantalla, altoPantalla);
  rect(270, 340, 100, 50);
}
