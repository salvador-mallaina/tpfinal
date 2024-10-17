let anchoPantalla =640;
let altoPantalla =480;
let misTextos;
let  anchoTexto ;
let tamTexto;
let  inicioTexto ;

let pantallaActual =0;
let posXBoton =580;
let posYBoton =420;
let anchoBoton =80;
let altoBoton =80;
let misImagenes =[];
let i = 1
  let y =4

  function preload() {
  misImagenes[0]=loadImage("data/Designer0.jpg");
  misImagenes[1]=loadImage("data/Designer1.jpg");
  misImagenes[2]=loadImage("data/Designer2.jpg");
  misImagenes[3]=loadImage("data/designer3.jpg");
  misImagenes[4]=loadImage("data/designer4.jpg");
  misImagenes[5]=loadImage("data/designer5.jpg");
  misImagenes[6]=loadImage("data/designer6.jpg");
  misImagenes[7]=loadImage("data/designer7.jpg");
  misImagenes[8]=loadImage("data/designer8.jpg");
  misImagenes[9]=loadImage("data/designer9.jpg");
  misImagenes[10]=loadImage("data/designer10.jpg");
  misImagenes[11]=loadImage("data/designer11.jpg");
  misImagenes[12]=loadImage("data/designer12.jpg");
  misImagenes[13]=loadImage("data/designer13.jpg");
  misImagenes[14]=loadImage("data/designer14.jpg");
  misImagenes[15]=loadImage("data/designer15.jpg");
  misImagenes[16]=loadImage("data/designer16.jpg");
  misImagenes[17]=loadImage("data/designer17.jpg");
  //misTextos =  loadStrings('data/aventura.odt');
}


function setup() {
  createCanvas( anchoPantalla, altoPantalla);
}


function draw() {
  background(0);

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
      i= -4
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
  clickBotonNo()
    clickBotonSi()
    BotonFinal()
}
