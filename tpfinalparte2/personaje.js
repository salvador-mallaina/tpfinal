
class personaje {
  constructor() {
    this.posX = width/2;
    this.posY = 440;
    this.vidas = 1;
   
  }

  dibujar() {
    fill(0, 255, 0);
    ellipse(this.posX, this.posY, 30, 30);
  }

  moverDerecha() {
    if (this.posX < this.rioDerecha.posX+22) {
      this.posX = this.posX + 3;
    }
  }
  moverIzquierda() {
    if (this.posX > this.rio.posX+22) {
      this.posX = this.posX -3 ;
    }
  }
  teclaPresionada() {
    if (keyCode === RIGHT_ARROW) {
      this.moverDerecha();
    } else if (keyCode === LEFT_ARROW) {
      this.moverIzquierda();
    }
  }
}
