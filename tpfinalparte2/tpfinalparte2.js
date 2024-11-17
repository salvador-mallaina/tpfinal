//salvador mallaina
//comision 4
//profe se que esta incompleto el tp pero no llegue con el tiempo 




let juego;

function setup() {
  createCanvas(640,480);
  juego = new Juego();
}


function draw() {
  background(255);
  juego.dibujar();
  
  if(keyIsPressed){
    juego.teclaPresionada();
  }
}
