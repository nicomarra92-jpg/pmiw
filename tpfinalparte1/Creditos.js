let tituloEstacinario;
let tituloPosY = 500;

let destello = [];
const aniDestello = [4];
const veloDestello = 9;
let posX = 900;
let posY = 900;

let textoInicioX = 900;
let textoInicioY = 900;

let botonTextoX = 900;
let botonTextoY = 900;

let creditoTextX = 900;
let creditoTextY = 900;

let CancionMenu;

let miTipografia;

let contadorActivo = false;
let contador = 0;


function preload() {

  CancionMenu = loadSound("Sonido/CancionTitulo.mp3");

  // 'i' es el valor que mientras aumenta, en el areglo de aniDestello va a circular las animaciones
  //sumando hasta llegar al valor definido en aniDestello
  for (let i = 0; i < aniDestello; i++) {

    destello.push(loadImage('Sprites/Destello/destello_' + i + '.png'));
  }


  tituloEstacinario = loadImage('Sprites/Titulo/Titulo_0.png');

  //miTipografia = loadFont("data/VCR_OSD_MONO_1.001.ttf");
}


function setup() {
  createCanvas (800, 450);
  imageMode(CENTER);
  reproducirMusicaMenu();
}

// .loop() reproduce y reinicia automáticamente al terminar
function reproducirMusicaMenu() {
  if (CancionMenu && !CancionMenu.isPlaying()) {
    CancionMenu.loop();
  }
}

// este codigo se encarga de generar la funcion que me permite cambiar la velocidad de animacion del destello
function elegirFrame(frames, veloDestello) {

  let indice = floor(frameCount / veloDestello) % frames.length;

  return frames[indice];
}



function draw () {
  background(0, 100, 100);
  image (tituloEstacinario, 400, tituloPosY, 500, 150);

  // si los frames ejecutados hasta ahora son menores que en este caso 190, repite el contenido if.
  //este if es para el movimiento del titulo
  if (frameCount < 190) {
    tituloPosY -= 2;
  }


  //Aqui defines dibujar destello, que tiene la info de los frames y su velocidad
  let dibujarDestello = elegirFrame(destello, veloDestello);
  image (dibujarDestello, posX, posY)


    //si la cantidad de frames es = 190 aparece el texto
    if (frameCount == 190) {
    textoInicioX = 400;
    textoInicioY = 320;
  }

  textAlign(CENTER, CENTER);
  textSize(26);
  fill(255, 162, 69);

  //para aclarar este boton de texto en realidad esta para poder iniciar la cancion, no funciona como los botones que haz programado antes nico
  text("Haga click", textoInicioX, textoInicioY);

  //esto por ejemplo deberia ser rempalazado por el boton que vayas a hacer
  text("Start", botonTextoX, botonTextoY);
  //


  text ("Desarolladores: Nicolas Marrra, Valentin Cavaller. Autor: Yuji Hor", creditoTextX, creditoTextY)

    // esto funciona junta al click del mouse, al hacer click contadorActivo es = a true y empieza a sumar al contador
    if (contadorActivo) {
    contador++;
    if (contador === 720) {
      posX = 583;
      posY = 166;

      botonTextoX = 400;
      botonTextoY = 240;

      creditoTextX = 400;
      creditoTextY = 270;
    }
  }

  fill(255);
  textSize(30);
  text(mouseX + " - " + mouseY, mouseX, mouseY);
}

//Al hacer click definimos, que el texto se vaya a un lugar que no pu=odemos ver
//Inicia el audiom(esto se tuvo que hacer por que los sitios web tienen una medida de seguridad con audio)
//Inicia el contador
function mousePressed() {
  textoInicioX = 900;
  textoInicioY = 900;


  if (getAudioContext().state !== 'running') {
    userStartAudio();
  }
  reproducirMusicaMenu();
  contadorActivo = true;
  contador = 0;
}
