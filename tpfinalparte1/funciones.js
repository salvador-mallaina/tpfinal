
function reload() {
  anchoTexto = anchoPantalla * 0.8;
  tamTexto = altoPantalla * 0.10;
  inicioTexto = anchoPantalla * 0.05;

  textSize(tamTexto);
}
function pantalla1Boton(imagen,texto) {
  fill(200, 50, 40);
  image(misImagenes[imagen], 0, 0, anchoPantalla, altoPantalla);
  rect( posXBoton, posYBoton, anchoBoton, altoBoton );
  fill(0, 255, 255);
  text( misTextos[texto],  inicioTexto,   inicioTexto,   anchoTexto   );
}
function pantallaCon2Botones(imagen,texto) {
  fill(255);
  image(misImagenes[imagen], 0, 0, anchoPantalla, altoPantalla);
  rect(160, 340, anchoBoton, altoBoton);
  rect(480, 340, anchoBoton, altoBoton);
    text( misTextos[texto],  inicioTexto,   inicioTexto,   anchoTexto   );
     fill(0);
  text(accion2,170,395);
   text(accion1,495,395);
}
function pantallaFinal(imagen,texto) {
  fill(0, 150, 0),
    image(misImagenes[imagen], 0, 0, anchoPantalla, altoPantalla);
  rect(270, 340, 100, 50);
   text( misTextos[texto],  inicioTexto,   inicioTexto,   anchoTexto   );
    fill(0);
  text(accion3,290,380);
}
