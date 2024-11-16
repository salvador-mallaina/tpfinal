class combustible {
  constructor() {
    this.posY = 450;
    this.posX = 213;
    this.ancho = 10;
    this.alto =5;
    this.cantidadComnustible = 100;
  }


  gastoDeCombustible() {
    if ( this.cantidadComnustible > 0) {
      this.combustible === this.combustible - 0.10;
      
    }
  }
}
