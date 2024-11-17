
function reload() {
  anchoTexto = anchoPantalla * 0.8;
  tamTexto = altoPantalla * 0.10;
  inicioTexto = anchoPantalla * 0.05;

  textSize(tamTexto);
}
function pantalla1Boton(imagen,texto) {
  fill(200, 50, 40);
  image(misImagenes[imagen], 0, 0, anchoPantalla, altoPantalla);
   image( misImagenes[19], posXBoton,posYBoton, anchoBoton, altoBoton );
  fill(0, 255, 255);
  text( misTextos[texto],  inicioTexto,   inicioTexto,   anchoTexto   );
}
function pantallaCon2Botones(imagen,texto) {
  fill(255);
  image(misImagenes[imagen], 0, 0, anchoPantalla, altoPantalla);
  image(misImagenes[20],160, 340, anchoBoton, 80);
  image(misImagenes[21],480, 340, anchoBoton,  80);
    text( misTextos[texto],  inicioTexto,   inicioTexto,   anchoTexto   );
   
 
}
function pantallaFinal(imagen,texto) {
  fill(0, 150, 0),
    image(misImagenes[imagen], 0, 0, anchoPantalla, altoPantalla);
   image(misImagenes[23],370, 340, 100, 50);
   text( misTextos[texto],  inicioTexto,   inicioTexto,   anchoTexto   );
    
}
