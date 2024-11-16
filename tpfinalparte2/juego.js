class Juego {
  constructor() {
    this.juega = true;
    this.gana = false;
    this.personaje = new personaje();
    this.rio = new rio();
    this.rioDerecha = new rioDerecha();
    this.personaje.rio = this.rio;
 this.personaje.rioDerecha = this.rioDerecha;
    this.barcos = [];
    this.aviones = [];
    this.cantEnemigos = 10;

    for (let i=0; i<this.cantEnemigos; i++) {
      let posXAleatoria = random(50, width-50);
      let ubicacion = random(250) > 25;
      this.aviones.push(new avion(posXAleatoria, ubicacion));
    }

    for (let t=0; t<this.cantEnemigos; t++) {
      let posXAleatoria = random(50, width-50);
      let ubicacion = random(250) > 25;
      this.barcos.push(new barco(posXAleatoria, ubicacion));
    }
  }


  dibujar()
  {
    if (this.juega) {
      this.rioDerecha.dibujar();
      this.rio.dibujar();
      this.personaje.dibujar();

      for (let i=0; i<this.cantEnemigos; i++) {
        this.aviones[i].dibujar();
      }

      for (let t=0; t<this.cantEnemigos; t++) {
        this.barcos[t].dibujar();
      }
      this.evaluarColisionPersonajeConEnemigos();
    } else {
      if (!this.gana) {
        textSize(40);
        text("PERDISTE!", 200, 200);
      }
    }
  }





  teclaPresionada()
  {
    this.personaje.teclaPresionada();
  }

  evaluarColisionPersonajeConEnemigos()
  {
    for (let i=0; i<this.cantEnemigos; i++) {
      this.aviones[i].dibujar();
      if (
        dist(
        this.aviones[i].posX,
        this.aviones[i].posY,
        this.personaje.posX,
        this.personaje.posY
        ) < 20) {
        this.juega = false;
        this.gana = false;
      }
    }
  }
}
