

let imagen1;
let imagen2;
let imagen3;
let imagen4;
let imagen5;
let imagen7;
let imagen01;
let imagen02;
let imagen03;
let imagen04;
let princesa;
let tablilla;
let puerta1;
let guardia1;
let puente;
let entrada;
let mesa;
let miTipografia;
let pospuertax = 338;
let pospuertay = 227;
let pantalla = 0;
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


function preload() {
  imagen1 = loadImage("data/imagen1.png");
  imagen2 = loadImage("data/imagen2.png");
  imagen3 = loadImage("data/imagen3.png");
  imagen4 = loadImage("data/imagen4.jpg");
  imagen5 = loadImage("data/imagen6.jpg");
  imagen6 = loadImage("data/imagen7.png");
  imagen7 = loadImage("data/imagen8.png");
  imagen8 = loadImage("data/imagen9.png");
  imagen9 = loadImage("data/imagen10.png");
  imagen01 = loadImage("data/imagenalt1-1.jpg");
  imagen02 = loadImage("data/imagenalt2-1.png");
  imagen03 = loadImage("data/imagenalt2-2.png");
  imagen04 = loadImage("data/imagenalt2-3.jpg");
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


  fill(255);
  textSize(30);
  text(mouseX + " - " + mouseY, mouseX, mouseY);
}

function mousePressed() {

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
    
  }  else if (pantalla == 5 && (mouseX > posreyx && mouseX < posreyx + 50 && mouseY > posreyy && mouseY < posreyy + 50)) {
    pantalla = 6;
    
    }  else if (pantalla == 6 && (mouseX > pospuertax && mouseX < pospuertax + 210 && mouseY > pospuertay && mouseY < pospuertay + 105)) {
    pantalla = 7;
    
     }  else if (pantalla == 7 && (mouseX > posmagox && mouseX < posmagox + 40 && mouseY > posmagoy && mouseY < posmagoy + 20)) {
    pantalla = 8;
    
    
    
  } else if (pantalla == 2 && (mouseX > posentrx && mouseX < posentrx + 50 && mouseY > posentry && mouseY < posentry + 50)) {
    pantalla = 211;
  } else if (pantalla == 211 && (dist(mouseX, mouseY, 775, 160) < 25/2)) {
    pantalla = 221;
  } else if (pantalla == 221 && (dist(mouseX, mouseY, 775, 210) < 50/2) ) {
    pantalla = 231;
  } else if (pantalla == 1 && (mouseX > pospuentex && mouseX < pospuentex + 50 && mouseY > pospuentey && mouseY < pospuentey + 25)) {
    pantalla = 111;
  }
}
