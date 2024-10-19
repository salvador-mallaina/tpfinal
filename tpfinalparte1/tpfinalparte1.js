let anchoPantalla =640;
let altoPantalla =480;
let misTextos =[];
let  anchoTexto ;
let tamTexto;
let  inicioTexto ;
let posTextoActual=0

  let pantallaActual =0;
let posXBoton =580;
let posYBoton =420;
let anchoBoton =80;
let altoBoton =80;
let misImagenes =[];
let cantImgs =18
  let y =4
  let t=1

  let musica;

function preload() {
  for (let i=0; i<cantImgs; i++) {
    misImagenes[i]=loadImage("data/Designer"+i+".jpg");
  }
  misTextos[posTextoActual]=  loadStrings('data/aventura.txt');
}

musica=loadSound("data/mario.mp3")

function setup() {
  createCanvas( anchoPantalla, altoPantalla);
  musica.loop();
}


function draw() {
  background(0);
  reload();
  if (pantallaActual==0) {
    pantalla1Boton(0)
  } else if (pantallaActual==1) {
    pantalla1Boton(1)
  } else if (pantallaActual==2) {
    pantalla1Boton(2)
  } else if (pantallaActual==3) {
    pantallaCon2Botones(3)
  } else if (pantallaActual==4) {
    pantalla1Boton(4)
  } else if (pantallaActual==5) {
    pantalla1Boton(5)
  } else if (pantallaActual==6) {
    pantallaFinal(6)
  } else if (pantallaActual==7) {
    pantalla1Boton(7)
  } else if (pantallaActual==8) {
    pantalla1Boton(8)
  } else if (pantallaActual==9) {
    pantallaCon2Botones(9)
  } else if (pantallaActual==10) {
    pantalla1Boton(10)
  } else if (pantallaActual==11) {
    pantalla1Boton(11)
  } else if (pantallaActual==12) {
    pantallaFinal(12)
  } else if (pantallaActual==13) {
    pantalla1Boton(13)
  } else if (pantallaActual==14) {
    y = 1
      t= -4
      pantallaCon2Botones(14)
  } else if (pantallaActual==15) {
    pantalla1Boton(15)
  } else if (pantallaActual==16) {
    pantalla1Boton(16)
  } else if (pantallaActual==17) {
    pantallaFinal(17)
  }
}
function mousePressed() {
  clickBotonCuadrado();
  clickBotonNo();
    clickBotonSi();
    BotonFinal();
}
