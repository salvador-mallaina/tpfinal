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
    this.cantBidones = 10;
    this.combustible= new combustible();
    this.bidones = [];


    //creacion de enemigos y bidones
    for (let i=0; i<this.cantBidones; i++) {
      let posXAleatoria = random(50, width-50);
      let ubicacion = random(-20, -30);
      this.bidones.push(new bidon(posXAleatoria, ubicacion));
    }

    for (let i=0; i<this.cantEnemigos; i++) {
      let posXAleatoria = random(50, width-50);
      let ubicacion =random(-20, -40);
      this.aviones.push(new avion(posXAleatoria, ubicacion));
    }

    for (let t=0; t<this.cantEnemigos; t++) {
      let posXAleatoria = random(50, width-50);
      let ubicacion = random(-20, -40);
      this.barcos.push(new barco(posXAleatoria, ubicacion));
    }
  }


  dibujar()
  {
    if (this.juega) {
      image(imgRio, 0, 0, 640, 480);
      this.rioDerecha.dibujar();
      this.rio.dibujar();
      this.personaje.dibujar();
      this.combustible.dibujar();
      this.combustible.gastoDeCombustible();
      this.controlarDisparosAEnemigos();
      this.reubicarEnemigos();
      this.reubicarBidones();
      this.verificarVidaDeEnemigos();


      for (let i=0; i<this.cantBidones; i++) {
        this.bidones[i].dibujar();
      }


      for (let i=0; i<this.cantEnemigos; i++) {
        this.aviones[i].dibujar();
      }

      for (let t=0; t<this.cantEnemigos; t++) {
        this.barcos[t].dibujar();
      }
      this.evaluarCombustible();
      this.evaluarColisionPersonajeConBidones()
        this.evaluarColisionPersonajeConEnemigos();
    } else {
      if (!this.gana) {
        this.pantallaDePerdiste();
      }
      if (this.gana) {
        this.pantallaDeGanaste();
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
        ) < 22) {
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
        ) < 22) {
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


  evaluarColisionPersonajeConBidones() {
    for (let i = 0; i < this.cantBidones; i++) {

      if (
        dist(
        this.bidones[i].posX,
        this.bidones[i].posY,
        this.personaje.posX,
        this.personaje.posY
        ) < 30
        ) {

        this.combustible.alto = 150;
        this.bidones[i].destruir()
      }
    }
  }

  controlarDisparosAEnemigos() {
    if (this.personaje.haDisparadoBala()) {
      for (let i=0; i<this.cantEnemigos; i++) {
        this.aviones[i].haTocadoLaBala(this.personaje.bala);
      }
      for (let i=0; i<this.cantEnemigos; i++) {
        this.barcos[i].haTocadoLaBala(this.personaje.bala);
      }
    }
  }

  reubicarEnemigos() {
    for (let i = 0; i < this.cantEnemigos; i++) {
      this.barcos[i].reubicar();
      this.aviones[i].reubicar();
    }
  }
  reubicarBidones() {
    for (let i = 0; i < this.cantBidones; i++) {
      this.bidones[i].reubicar();
    }
  }

  verificarVidaDeEnemigos() {
    let enemigosVivos = 0;
    for (let i = 0; i < this.cantEnemigos; i++) {
      if (   this.barcos[i].vida) {
        enemigosVivos++;
      }
    }
    for (let i = 0; i < this.cantEnemigos; i++) {
      if (this.aviones[i].vida) {
        enemigosVivos++;
      }
    }
    if (enemigosVivos === 0) {
      this.juega = false;
      this.gana = true;
    }
  }
  pantallaDeGanaste() {
    image(portadaGanaste, 0, 0, 640, 480);
    let  titulo = "has derrota a los enemigos felicitaciones"
      let  subtitulo =   "bien jugado"
      let   boton =     "inicior"


      fill(0);
    textAlign(CENTER);
    textSize(22);
    text(titulo, width / 2, height / 2 - 125);
    rect( 130, 300, 60, 30);
    text(subtitulo, width / 2, height / 2 - 80);
    fill(0, 0, 255);
    textSize(18);

    text(boton, 160, 320);

    if (mouseIsPressed) {
      if (mouseX > 130 &&
        mouseX < 130 + 60 &&
        mouseY > 300 &&
        mouseY < 300 + 30) {
        principal.estado = "inicio";
        this.regresarAlInicio();
      }
    }
  }
  pantallaDePerdiste() {
    image(portadaPerdiste, 0, 0, 640, 480);
    let  titulo = "fuiste derribado"
      let  subtitulo =   "quizas lo logres en la proxima"
      let   boton =     "inicio"


      fill(0);

    rect( 130, 300, 60, 30);
    fill(0, 0, 255);
    textAlign(CENTER);
    textSize(22);
    text(titulo, width / 2, height / 2 - 125);
    textSize(22);
    text(subtitulo, width / 2, height / 2 - 80);
    textSize(18);

    text(boton, 160, 320);

    if (mouseIsPressed) {
      if (mouseX > 130 &&
        mouseX < 130 + 60 &&
        mouseY > 300 &&
        mouseY < 300 + 30) {
        principal.estado = "inicio";
        this.regresarAlInicio();
      }
    }
  }

  regresarAlInicio() {

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
    this.cantBidones = 10;
    this.combustible= new combustible();
    this.bidones = [];


    for (let i = 0; i < this.cantBidones; i++) {
      let posXAleatoria = random(50, width - 50);
      let ubicacion = random(-20, -30);
      this.bidones.push(new bidon(posXAleatoria, ubicacion));
    }

    for (let i = 0; i < this.cantEnemigos; i++) {
      let posXAleatoria = random(50, width - 50);
      let ubicacion = random(-20, -40);
      this.aviones.push(new avion(posXAleatoria, ubicacion));
    }

    for (let t = 0; t < this.cantEnemigos; t++) {
      let posXAleatoria = random(50, width - 50);
      let ubicacion = random(-20, -40);
      this.barcos.push(new barco(posXAleatoria, ubicacion));
    }

    principal.estado = "inicio";
  }
}
