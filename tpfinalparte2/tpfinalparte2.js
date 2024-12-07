//salvador mallaina
//comision 4
//profe se que esta incompleto el tp pero no llegue con el tiempo


let principal
  let musica;
let juego

  let imgRio;
let imgJugador;
let imgBidon;
let imgAviones;
let imgBarcos;

let portada;
let portadaPerdiste;
let portadaGanaste;
let portadaTutorial;
let portadaCreditos;


function preload() {
  soundFormats('mp3');
  musica=loadSound("data/bala.mp3")

    imgRio=loadImage("data/rio.jpg");
  imgJugador=loadImage("data/personaje.png");
  imgBidon=loadImage("data/bidon.png");
  imgAviones=loadImage("data/aviones.png");
  imgBarcos=loadImage("data/barcos.png");
  portada=loadImage("data/portada.jpg");
  portadaPerdiste=loadImage("data/portadaPerdiste.jpg");
  portadaGanaste=loadImage("data/portadaGanaste.jpg");
  portadaTutorial=loadImage("data/portadaTutorial.jpg");
  portadaCreditos=loadImage("data/portadaCreditos.jpg");
}


function setup() {
  createCanvas(640, 480);
  principal = new Principal();
  juego = new Juego();
}


function draw() {
  background(170, 0, 170);
  principal.mostrar();


  if (keyIsPressed) {
    juego.teclaPresionada();
  }
}
function mousePressed() {
  principal.cambioDePantallas()
}
