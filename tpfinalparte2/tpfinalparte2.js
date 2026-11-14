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
  // Reemplazá los nombres de archivo por los que subiste a tu proyecto
  imgPuerta = loadImage('data/puerta.png');
  imgGanar = loadImage('data/ganar.png');
  imgPerder = loadImage('data/perder.png');
  imgSlime = loadImage('data/Slime.png');
  imgJugador = loadImage('data/Jugador.png');
  imgPared = loadImage('data/Pared.png');
  
  tituloEstacinario = loadImage('data/titulo1.png');

  
  // Si tenés los frames del destello y la canción, cargalos acá:
  // destello[0] = loadImage('destello0.png');
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
