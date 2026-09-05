let fondos = [];
let velocidades = [0.1, 0.2, 0.3, 0.4, 0.6, 1];
let movimiento = 0;
let correr = [];
let desplazarse = 0;
let quieto = [];
let giro = false;
let impacto = [];
let caido = [];
let muerte = [];
let estado = "CORRER";
let inicioquieto = 0;
let estado2 = "CORRER";
let frame2 = 0;
let inicioEstado2 = 0;
let desplazarse2 = 0;
let corre2 = [];
let quieto2 = [];
let dispara2 = [];
let flecha;
let gameOver;
let flechaX = 200;
let flechaY = 450;
let moverFlecha= false;
let gameOverY = -150;
let moverGameOver = false;


function preload() {
  cargarImagenes();
}



function setup() {
  createCanvas(800, 600);
}



function draw() {
  background(0);

  movimiento +=-0.2;

  dibujarfondos();

  dibujarpiso();

  arquero1();

  arquero2();

  flechazo();

  titulo();
}
