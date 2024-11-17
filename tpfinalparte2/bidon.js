class bidon {
  constructor(posX, ubicacion) {
    this.posX = posX;
    this.radio = 10;
    this.posY = random(-200, -400);
    this.velocidad = random(0.7);
  }
  
 dibujar() {
    fill(150, 0, 150); 
    ellipse(this.posX, this.posY, this.radio * 2, this.radio * 2); 
    this.posY = this.posY + this.velocidad;
  }
  
}
