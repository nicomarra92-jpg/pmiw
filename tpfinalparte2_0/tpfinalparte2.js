
let juego;

function setup() {
  createCanvas(800, 450);

  juego = new Juego();
}

function draw() {
  background(200);

  juego.dibujar();
}
