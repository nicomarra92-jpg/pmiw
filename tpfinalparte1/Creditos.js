let titulo = [];
const aniTitulo = [2];
let tituloEstacinario;

let destello = [];
const aniDestello = [4];
const veloDestello = 9;

let CancionMenu;

function setup() {
  createCanvas (800, 450);
  imageMode(CENTER);
}

// este codigo se encarga de generar la funcion que me permite cambiar la velocidad de animacion del destello
function elegirFrame(frames, veloDestello) {
  let indice = floor(frameCount / veloDestello) % frames.length;

  return frames[indice];
}


function preload() {
  
  CancionMenu = loadSound("Sonido/CancionTitulo.mp3");

  // 'i' es el valor que mientras aumenta, en el areglo de aniDestello va a circular las animaciones
  //sumando hasta llegar al valor definido en aniDestello
  for (let i = 0; i < aniDestello; i++) {
    destello.push(loadImage('Sprites/Destello/destello_' + i + '.png'));
  }

  tituloEstacinario= loadImage('Sprites/Titulo/Titulo_0.png');
  
}

function draw () {
  background(0, 100, 100);
  image (tituloEstacinario, 400, 110, 500, 150);

  let dibujarDestello = elegirFrame(destello, veloDestello);
  image (dibujarDestello, 583, 166)
  
  //CancionMenu.play();



  fill(255);
  textSize(30);
  text(mouseX + " - " + mouseY, mouseX, mouseY);
}
