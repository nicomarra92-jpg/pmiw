// fondos del camino pricipal de juego
let imagen1;
let imagen2;
let imagen3;
let imagen4;
let imagen5;
let imagen7;

//fondos de los caminos alternativos
let imagen01;
let imagen02;
let imagen03;
let imagen04;

//imagenes de los botones
let princesa;
let tablilla;
let puerta1;
let guardia1;
let puente;
let entrada;
let mesa;

//tipografia
let miTipografia;

//esto dicta que la pantalla incial sea la de creditos
let pantalla = pantallacreditos;

//posiciones de los boton
let pospuertax = 338;
let pospuertay = 227;
let posguardiax = 372;
let posguardiay = 141;
let pospuentex = 592;
let pospuentey = 200;
let postabx = 314;
let postaby = 98;
let posentrx = 45;
let posentry = 147;
let posmesax = 311;
let posmesay = 160;
let posprinx = 448;
let pospriny = 185;
let posreyx = 673;
let posreyy = 200;
let posmagox = 330;
let posmagoy = 160;
let posdefx = 517;
let posdefy = 240;
let posatkx = 90;
let posatky = 80;


//varibales del titulo
let tituloEstacinario;
let tituloEstacinario_2;

let destello = [];
const aniDestello = 4;
const veloDestello = 9;
let posX = 900;
let posY = 900;

let tituloPosY = 500;

let tituloPosY_2 = 900;

let textoInicioX = 900;
let textoInicioY = 900;

let botonTextoX = 900;
let botonTextoY = 900;

let creditoTextX = 900;
let creditoTextY = 900;

let CancionMenu;


let contadorActivo = false;
let contador = 0;



function preload() {
  // Fondos del camino principal del juego
  imagen1 = loadImage("data/imagen1.png");
  imagen2 = loadImage("data/imagen2.png");
  imagen3 = loadImage("data/imagen3.png");
  imagen4 = loadImage("data/imagen4.jpg");
  imagen5 = loadImage("data/imagen6.jpg");
  imagen6 = loadImage("data/imagen7.png");
  imagen7 = loadImage("data/imagen8.png");
  imagen8 = loadImage("data/imagen9.png");
  imagen9 = loadImage("data/imagen10.png");
  imagen10 = loadImage("data/imagen11.png");
  imagen11 = loadImage("data/imagen12.png");
  imagen12 = loadImage("data/imagen13.jpg");

  //Fondos de caminos alternativos
  imagen01 = loadImage("data/imagenalt1-1.jpg");
  imagen02 = loadImage("data/imagenalt2-1.png");
  imagen03 = loadImage("data/imagenalt2-2.png");
  imagen04 = loadImage("data/imagenalt2-3.jpg");
  imagen05 = loadImage("data/imagenalt3-1.jpg");

  //Imagenes de botones
  defender = loadImage("data/defender.png");
  atacar = loadImage("data/atacar.png");
  mago1 = loadImage("data/mago1.png");
  tablilla = loadImage("data/tablilla.png");
  entrada = loadImage("data/entrada.png");
  mesa = loadImage("data/mesa.png");
  rey = loadImage("data/rey.png");
  princesa = loadImage("data/princesa.png");
  puerta1 = loadImage("data/puerta1.png");
  guardia1 = loadImage("data/guardia1.png");
  puente= loadImage("data/puente.png");
  miTipografia = loadFont("data/VCR_OSD_MONO_1.001.ttf");

  CancionMenu = loadSound("Sonido/CancionTitulo.mp3");

  // 'i' es el valor que mientras aumenta, en el areglo de aniDestello va a circular las animaciones
  //sumando hasta llegar al valor definido en aniDestello
  for (let i = 0; i < aniDestello; i++) {

    destello.push(loadImage('Sprites/Destello/destello_' + i + '.png'));
  }

  //
  tituloEstacinario = loadImage('Sprites/Titulo/Titulo_0.png');
  tituloEstacinario_2 = loadImage('Sprites/Titulo/Titulo_1.png')
}


function setup() {
  createCanvas(800, 450);
}


function draw() {
  background(0);
  textFont(miTipografia);
  textSize(18);
  fill(255);
  noStroke();

  //aqui se faman las funciones de Pantallas
  if (pantalla == pantallacreditos) {
    pantallacreditos();
  }

  if (pantalla == 0) {
    pantalla0();
  }
  if (pantalla == 1) {
    pantalla1();
  }

  if (pantalla == 2) {
    pantalla2();
  }

  if (pantalla == 3) {
    pantalla3();
  }
  if (pantalla == 4) {
    pantalla4();
  }

  if (pantalla == 5) {
    pantalla5();
  }

  if (pantalla == 6) {
    pantalla6();
  }

  if (pantalla == 7) {
    pantalla7();
  }

  if (pantalla == 8) {
    pantalla8();
  }


  if (pantalla == 9) {
    pantalla9();
  }

  if (pantalla == 10) {
    pantalla10();
  }


  //finales alternativos
  if (pantalla == 111) {
    pantalla111();
  }
  if (pantalla == 211) {
    pantalla211();
  }
  if (pantalla == 221) {
    pantalla221();
  }
  if (pantalla == 231) {
    pantalla231();
  }

  if (pantalla == 311) {
    pantalla311();
  }


  fill(255);
  textSize(30);
  text(mouseX + " - " + mouseY, mouseX, mouseY);
}

function mousePressed() {

  if (getAudioContext().state !== 'running') {
    userStartAudio();
  }
  
  tituloPosY = 900;
  tituloPosY_2 = 120;
  


  if (pantalla == pantallacreditos) {
    if (contador >= 120) {
      if (mouseX > 200 && mouseX <  600 && mouseY > 100 && mouseY < 350) {
        pantalla = 0
      }
      
    } else if (!contadorActivo) {
      reproducirMusicaMenu();
      contadorActivo = true;
      contador = 0;
      textoInicioX = 900;
      textoInicioY = 900;
    }
  }



  //botones de las pantallAS
  if (pantalla == 0 && (mouseX > pospuertax && mouseX < pospuertax + 210 && mouseY > pospuertay && mouseY < pospuertay + 105)) {
    pantalla = 1;
  } else if (pantalla == 1 && (mouseX > posguardiax && mouseX < posguardiax + 85 && mouseY > posguardiay && mouseY < posguardiay + 40)) {
    pantalla = 2;
  } else if (pantalla == 2 && (mouseX > postabx && mouseX < postabx + 180 && mouseY > postaby && mouseY < postaby + 100)) {
    pantalla = 3;
  } else if (pantalla == 3 && (mouseX > posmesax && mouseX < posmesax + 185 && mouseY > posmesay && mouseY < posmesay + 50)) {
    pantalla = 4;
  } else if (pantalla == 4 && (mouseX > posprinx && mouseX < posprinx + 50 && mouseY > pospriny && mouseY < pospriny + 50)) {
    pantalla = 5;
  } else if (pantalla == 5 && (mouseX > posreyx && mouseX < posreyx + 50 && mouseY > posreyy && mouseY < posreyy + 50)) {
    pantalla = 6;
  } else if (pantalla == 6 && (mouseX > pospuertax && mouseX < pospuertax + 210 && mouseY > pospuertay && mouseY < pospuertay + 105)) {
    pantalla = 7;
  } else if (pantalla == 7 && (mouseX > posmagox && mouseX < posmagox + 40 && mouseY > posmagoy && mouseY < posmagoy + 20)) {
    pantalla = 8;
  } else if (pantalla == 8 && (mouseX > 735 && mouseX < 780  && mouseY > 130 && mouseY < 200)) {
    pantalla = 9;
  } else if (pantalla == 9 && (mouseX > posatkx && mouseX < posatkx + 120 && mouseY > posatky && mouseY < posatky + 280)) {
    pantalla = 10;
  } else if (pantalla == 10 && (mouseX > posatkx && mouseX < posatkx + 120 && mouseY > posatky && mouseY < posatky + 280)) {
    pantalla = 11;





    //pantallas alternativas
  } else if (pantalla == 2 && (mouseX > posentrx && mouseX < posentrx + 50 && mouseY > posentry && mouseY < posentry + 50)) {
    pantalla = 211;
  } else if (pantalla == 211 && (dist(mouseX, mouseY, 775, 160) < 25/2)) {
    pantalla = 221;
  } else if (pantalla == 221 && (dist(mouseX, mouseY, 775, 210) < 50/2) ) {
    pantalla = 231;
  } else if (pantalla == 1 && (mouseX > pospuentex && mouseX < pospuentex + 50 && mouseY > pospuentey && mouseY < pospuentey + 25)) {
    pantalla = 111;
  } else if (pantalla == 9 && (mouseX > posdefx && mouseX < posdefx + 180 && mouseY > posdefy && mouseY < posdefy + 150)) {
    pantalla = 311;
  }
}
