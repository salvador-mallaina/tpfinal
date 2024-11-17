class barco{
   constructor(posX, ubicacion) {
    this.posX = posX;
   
      this.posY = random(-200, -400);
      this.velocidad = random(0.5,0.3);
    
  }

  dibujar() {
    fill(0,0,220);
    rect(this.posX, this.posY, 15, 15);
   this.posY = this.posY + this.velocidad;
  }

  mover() {
  }
}
