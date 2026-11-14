// https://youtu.be/z31C3MrliP0

let juego;

// Imágenes y sonidos globales
let imgPuerta;
let imgGanar;
let imgPerder;
let tituloEstacinario;
let tituloEstacinario_2;
let destello = [];
let veloDestello = 5;
let CancionMenu;

function preload() {
  
  imgPuerta = loadImage('data/puerta.png');
  imgGanar = loadImage('data/ganar.png');
  imgPerder = loadImage('data/perder.png');
  imgSlime = loadImage('data/Slime.png');
  imgJugador = loadImage('data/Jugador.png');
  imgPared = loadImage('data/Pared.png');
  
  tituloEstacinario = loadImage('data/titulo1.png');

  
   CancionMenu = loadSound('Sonido/CancionTitulo.mp3');
   musicaLaberinto = loadSound('Sonido/14_Battle_Theme.mp3');
   musicaGanadora = loadSound('Sonido/17_Battle_Victory.mp3');
   musicaPerdedora = loadSound('Sonido/18_Death_Theme.mp3');
}

function setup() {
  createCanvas(800, 450);

  juego = new Juego();
}

function draw() {
  background(200,100,0);

  juego.dibujar();
}

function keyPressed() {
  juego.manejarTeclas();
}

function mousePressed() {
  juego.manejarClick();
}
