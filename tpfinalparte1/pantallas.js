



function pantalla0() {
  image(imagen1, 0, 0, 800, 350);
  text("El protagonista extraño llega de casualidad a este castillo Tantegel, busca la manera de entrar al castillo", 50, 400, 750, 50);
  tint(255);


  //botonpantalla0
  image(puerta1, pospuertax, pospuertay, 128, 73);
  if (mouseX > pospuertax && mouseX < pospuertax + 210 && mouseY > pospuertay && mouseY < pospuertay + 105) {
    text("entrar", mouseX, mouseY);

    tint(100)
  } else {
    tint(255)
  }
}

function pantalla1() {
  tint(255);

  image(imagen2, 0, 0, 800, 350)
    text("Se encuentra un guardia del castillo y le dice que el Señor Dragon ha secuestrado a la princesa y la tiene cautiva en una cueva lejana. Busca mas instrucciones o el camino hacia otra aventura", 50, 380, 750, 70);


  //botones pantalla1
  if (mouseX > posguardiax && mouseX < posguardiax + 85 && mouseY > posguardiay && mouseY < posguardiay + 40) {
    text("hablar", mouseX, mouseY);

    tint(100)
  } else {
    tint(255)
  }

  image(guardia1, posguardiax, posguardiay, 85, 40);


  if (mouseX > pospuentex && mouseX < pospuentex + 50 && mouseY > pospuentey && mouseY < pospuentey + 25) {
    text("cruzar", mouseX, mouseY);

    tint(100)
  } else {
    tint(255)
  }

  image(puente, pospuentex, pospuentey, 50, 25)
}



function pantalla2() {
  tint(255);
  image(imagen3, 0, 0, 800, 350);
  text("Sigues las instrucciones del guardia y encuentras una tablilla escondida en una cueva, tienes la opcion de ver que dice o ignorarla y seguir el camino", 50, 380, 750, 70)

    //boton pantalla 2
    push();
  if (mouseX > postabx && mouseX < postabx + 180 && mouseY > postaby && mouseY < postaby + 100) {

    tint(100)
  } else {
    tint(255)
  }

  image(tablilla, postabx, postaby, 180, 100);
  text("leer", mouseX, mouseY);

  pop();


  //boton entrada cueva
  push();
  if (mouseX > posentrx && mouseX < posentrx + 50 && mouseY > posentry && mouseY < posentry + 50) {

    noStroke();
    fill(255, 255, 255, 180);
    rect(posentrx - 2, posentry - 2, 64, 74, 5);
  } else {
  }

  image(entrada, posentrx, posentry, 60, 70);
  text("seguir camino", mouseX, mouseY);

  pop();
}
function pantalla3() {
  tint(255);
  image(imagen4, 0, 0, 800, 350);
  text("Esta tablilla es de alguien llamado Erdrick que describe lo que debe hacer el heroe para derrotar al señor dragon, lee indicaciones de donde encontrar la espada y la armadura. equipado continua el camino para llegar a la princesa. Equipate y avanza", 50, 380, 750, 70)

    if (mouseX > posmesax && mouseX < posmesax + 185 && mouseY > posmesay && mouseY < posmesay + 50) {
    tint(100)
  } else {
    tint(255)
  }
  image(mesa, posmesax, posmesay, 185, 50)
}

function pantalla4() {
  tint(255);
  image(imagen5, 0, 0, 800, 350);
  text("Avanzas por la cueva y te encuentras con 3 enemigos bloqueando un camino pero logras vencerlos y encuentras a la princesa al final del camino", 50, 380, 750, 70)

    if (mouseX > posprinx && mouseX < posprinx + 50 && mouseY > pospriny && mouseY < pospriny + 50) {
    tint(100)
  } else {
    tint(255)
  }
  image(princesa, posprinx, pospriny, 40, 40)
}

function pantalla5() {
  tint(255);
  image(imagen6, 0, 0, 800, 350);
  text("Llevas la princesa al castillo de Tanteje y le pides recursos al Rey para poder derrotar al mago", 50, 380, 750, 70)

    if (mouseX > posreyx && mouseX < posreyx + 50 && mouseY > posreyy && mouseY < posreyy + 50) {
    tint(100)
  } else {
    tint(255)
  }
  image(rey, posreyx, posreyy, 50, 40)
}

function pantalla6() {

  tint(255);
  image(imagen7, 0, 0, 800, 350);
  text("Llegas a la entrada del castillo del Señor de los Dragones, busca la manera de entrar", 50, 380, 750, 70)

    if (mouseX > pospuertax && mouseX < pospuertax + 210 && mouseY > pospuertay && mouseY < pospuertay + 105) {
    text("entrar", mouseX, mouseY);

    tint(100)
  } else {
    tint(255)
  }

  image(puerta1, pospuertax, pospuertay, 128, 73);
}

function pantalla7() {


  tint(255);
  image(imagen8, 0, 0, 800, 350);
  text("entraste al castillo y te pones cara a cara con El Señor de Los Dragones. Golpealo para abatirlo!", 50, 380, 750, 70)

    if (mouseX > posmagox && mouseX < posmagox + 40 && mouseY > posmagoy && mouseY < posmagoy + 20) {
    text("entrar", mouseX, mouseY);
    tint(100)
  } else {
    tint(255)
  }

  image(mago1, posmagox, posmagoy);
}

function pantalla8() {


  tint(255);
  image(imagen9, 0, 0, 800, 350);
  text("Has matado al Señor Dragon! Dirigete hacia la proxima sala para terminar con todo este reino", 50, 380, 750, 70)

    if (mouseX > 735 && mouseX < 780  && mouseY > 130 && mouseY < 200) {

    noStroke();
    fill(255, 255, 255, 180);
    rect(740, 135, 40, 80, 5);
  } else {
  }
}
function pantalla9() {


  tint(255);
  image(imagen10, 0, 0, 800, 350);
  text("entraste al castillo y te pones cara a cara con El Señor de Los Dragones. Golpealo para abatirlo!", 50, 380, 750, 70)




    push();
  if (mouseX > posdefx && mouseX < posdefx + 180 && mouseY > posdefy && mouseY < posdefy + 150) {

    tint(100)
  } else {
    tint(255)
  }

  image(defender, posdefx, posdefy);
  text("leer", mouseX, mouseY);

  pop();


  //boton entrada cueva
  push();
  if (mouseX > posatkx && mouseX < posatkx + 120 && mouseY > posatky && mouseY < posatky + 280) {

    tint(100)
  } else {
    tint(255)
  }

  image(atacar, posatkx, posatky);
  text("seguir camino", mouseX, mouseY);

  pop();
}


function pantalla10() {

  tint(255);
  image(imagen11, 0, 0, 800, 350);
  text("entraste al castillo y te pones cara a cara con El Señor de Los Dragones. Golpealo para abatirlo!", 50, 380, 750, 70)
}
//////////////////////////////////////////////////////////
//pantallas finales alternativos/////////////////////////////
/////////////////////////////////////////////////////////


function pantalla111() {
  tint(255)
    image(imagen01, 0, 0, 800, 350);
  text("Decides que no tienes ganas de salvar a nadie y sigues tu camino vagando por los bosques", 50, 380, 750, 70)
}

function pantalla211() {
  image(imagen02, 0, 0, 800, 350);
  text("Piensas 'Un viejo cartel no me va a enseñar a matar al dragon' y sigues el camino en busca de la princesa", 50, 380, 750, 70)

    if (dist(mouseX, mouseY, 775, 160) < 25/2) {
    fill(255, 255, 255, 180);

    ellipse(775, 160, 25, 25);
  } else {
  }
}
function pantalla221() {
  image(imagen03, 0, 0, 800, 350);
  text("Te encuentras con un grupo de enemigos mucho mas fuertes que vos y no tienes el equipo suficiente como para pelear, buscas la manera de escapar", 50, 380, 750, 70)
    if (dist(mouseX, mouseY, 775, 210) < 50/2) {
    fill(255, 255, 255, 180);

    ellipse(775, 210, 50, 80);
    fill(0)
      textSize(12)
      text("a Tantegel", 725, 240)
  } else {
  }
}

function pantalla231() {
  image(imagen04, 0, 0, 800, 350);
  text("Vuelves al castillo con una vergüenza inigualable, decides no contarle a nadie de tu intrépida y corta aventura y decides pasar el resto de tus dias como un mendigo", 50, 380, 750, 70)
}


function pantalla311() {
  image(imagen05, 0, 0, 800, 350)
}
