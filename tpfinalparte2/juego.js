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
    this.combustible= new combustible();


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
      this.combustible.dibujar();
      this.combustible.gastoDeCombustible();
     

        for (let i=0; i<this.cantEnemigos; i++) {
        this.aviones[i].dibujar();
      }

      for (let t=0; t<this.cantEnemigos; t++) {
        this.barcos[t].dibujar();
      }
      this.evaluarCombustible();

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
    for (let i=0; i<this.cantEnemigos; i++) {
      this.barcos[i].dibujar();
      if (
        dist(
        this.barcos[i].posX,
        this.barcos[i].posY,
        this.personaje.posX,
        this.personaje.posY
        ) < 20) {
        this.juega = false;
        this.gana = false;
      }
    }
  }


  evaluarCombustible() {
    if ( this.combustible.alto <= 1) {

      this.juega = false;
      this.gana = false;
    }
  }
}
