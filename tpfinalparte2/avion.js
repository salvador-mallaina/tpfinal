class avion {
  constructor(posX, ubicacion) {
    this.posX = posX;

    this.posY = random(-200, -400);
    this.velocidad = random(0.5, 0.3);
  }

  dibujar() {
    fill(255, 0, 0);
    rect(this.posX, this.posY, 30, 30);
    this.posY = this.posY + this.velocidad;
  }

  mover() {
  }
}
