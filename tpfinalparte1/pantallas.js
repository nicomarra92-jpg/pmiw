



function pantalla0() {

  cargarFondoPantalla(imagen1, "El protagonista extraño llega de casualidad a este castillo Tantegel, busca la manera de entrar al castillo")


    crearBotonImagen(puerta1, pospuertax, pospuertay, 128, 73, "entrar");
}

function pantalla1() {
  cargarFondoPantalla(imagen2, "Se encuentra un guardia del castillo y le dice que el Señor Dragon ha secuestrado a la princesa y la tiene cautiva en una cueva lejana. Busca mas instrucciones o el camino hacia otra aventura" )

    crearBotonImagen(guardia1, posguardiax, posguardiay, 85, 40, "hablar");


  crearBotonImagen(puente, pospuentex, pospuentey, 50, 25, "cruzar");
}





function pantalla2() {
  cargarFondoPantalla(imagen3, "Sigues las instrucciones del guardia y encuentras una tablilla escondida en una cueva, tienes la opcion de ver que dice o ignorarla y seguir el camino" )

    crearBotonImagen(tablilla, postabx, postaby, 180, 100, "leer");



  if (mouseX > posentrx && mouseX < posentrx + 50 && mouseY > posentry && mouseY < posentry + 50) {

    noStroke();
    fill(255, 255, 255, 180);
    rect(posentrx - 2, posentry - 2, 64, 74, 5);
  } else {
  }

  crearBotonImagen(entrada, posentrx, posentry, 60, 70, "seguir camino");
}


function pantalla3() {
  cargarFondoPantalla(imagen4, "Esta tablilla es de alguien llamado Erdrick que describe lo que debe hacer el heroe para derrotar al señor dragon, lee indicaciones de donde encontrar la espada y la armadura. equipado continua el camino para llegar a la princesa. Equipate y avanza")

    crearBotonImagen(mesa, posmesax, posmesay, 185, 50, "equiparse");
}

function pantalla4() {
  cargarFondoPantalla(imagen5, "Avanzas por la cueva y te encuentras con 3 enemigos bloqueando un camino pero logras vencerlos y encuentras a la princesa al final del camino")

    crearBotonImagen(princesa, posprinx, pospriny, 40, 40, "rescatar");
}

function pantalla5() {
  cargarFondoPantalla(imagen6, "Llevas la princesa al castillo de Tanteje y le pides recursos al Rey para poder derrotar al mago")


    crearBotonImagen(rey, posreyx, posreyy, 50, 40, "pedir recursos");
}

function pantalla6() {

  cargarFondoPantalla(imagen7, "Llegas a la entrada del castillo del Señor de los Dragones, busca la manera de entrar")
    crearBotonImagen(puerta1, pospuertax, pospuertay, 128, 73, "entrar");
}

function pantalla7() {

  cargarFondoPantalla(imagen8, "entraste al castillo y te pones cara a cara con El Señor de Los Dragones. Golpealo para abatirlo!")

    crearBotonImagen(mago1, posmagox, posmagoy, 50, 30, "atacar");
}

function pantalla8() {

  cargarFondoPantalla(imagen9, "Has matado al Señor Dragon! Dirigete hacia la proxima sala para terminar con todo este reino")


    if (mouseX > 735 && mouseX < 780  && mouseY > 130 && mouseY < 200) {

    noStroke();
    fill(255, 255, 255, 180);
    rect(740, 135, 40, 80, 5);
  } else {
  }
}
function pantalla9() {

  
  cargarFondoPantalla(imagen10, "pasas a la segunda fase del señor dragon. tienes que decidir si atacar o defender")

    crearBotonImagen(defender, posdefx, posdefy, 200, 115, "defender");

  
    crearBotonImagen(atacar, posatkx, posatky, 130, 270, "atacar");

}

function pantalla10() {

 cargarFondoPantalla(imagen11, "aciertas un golpe critico contra el cuello del dragon y ganas la batalla")

    crearBotonImagen(dragon, posdragx, posdragy, 220, 160,  "ir a buscar a ver a la princesa");

  
}

function pantalla11() {

  cargarFondoPantalla(imagen12, "volves al castillo con la noticia de que mataste al dragon. La princesa te propone casarte con ella. y tiene que decidir entre eso o seguir con las aventuras que tanto te gustan")

    crearBotonImagen(princesa2, posprincx, posprincy, 50, 50,  "casarse");
    crearBotonImagen(caballero, poscabx, poscaby, 80, 45,  "aventurarse");

  
  
}

function pantalla12() {
  cargarFondoPantalla(imagen12, "no te casaste y decidiste encontrar mas aventuras para rescatar princesas")

    crearBotonImagen(caballero2, poscab2x, poscab2y, 80, 50,  "hacia nuevas aventuras");
 
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

function pantalla411() {
  image(imagen06, 0, 0, 800, 350)
    text("armas una hermosa fiesta con todos tus invitados", 50, 380, 750, 70)
}
