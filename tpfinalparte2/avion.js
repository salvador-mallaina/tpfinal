class avion {
  constructor(posX) {
    this.posX = posX;
    this.posY = random(-200, -400);
    this.velocidad = random(0.5, 0.3);
    this.vida = true;
  }

  dibujar() {
    if ( this.vida) {
      fill(255, 0, 0);
      image(imgAviones,this.posX, this.posY, 30, 30);
      this.posY = this.posY + this.velocidad;
    }
  }
  matar() {
    this.vida= false
  }

  haTocadoLaBala(bala) {
    if ( dist(this.posX, this.posY, bala.posX, bala.posY) < 30) {
      this.matar()
        bala.destruir()
    }
  }
  reubicar() {
    if (this.posY > height && this.vida) {
      this.posY = random(-20, -40);
      this.posX = random(175, 460);
    }
  }
}
