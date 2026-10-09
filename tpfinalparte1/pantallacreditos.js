// 1. FUNCIÓN PRINCIPAL DE LA PANTALLA DE CRÉDITOS
function pantallacreditos() {
  push()
  imageMode(CENTER);
  background(0, 100, 100);


  // esta primera imagen (tituloEStacionario) es el titulo del juego sin el dragon
  image(tituloEstacinario, 400, tituloPosY, 500, 150);
  
  // esta, es el titulo con el dargon saliendo, replazando la pocision del dragon anterior
  image (tituloEstacinario_2, 400, tituloPosY_2, 500, 150)

// hace que suba (tituloEstacinario)
  if (frameCount < 190) {
    tituloPosY -= 2;
  }

  // Animación del destello (Llama a la función que está afuera)
  let dibujarDestello = elegirFrame(destello, veloDestello);
  if (dibujarDestello) {
    image(dibujarDestello, posX, posY);
  }


  // Si llega al frame 190, posiciona el texto de inicio
  if (frameCount >= 190 && !contadorActivo) {
    textoInicioX = 400;
    textoInicioY = 320;
  }

  // Lógica del contador de tiempo
  if (contadorActivo) {
    contador++;
  }
  if (contador >= 120) {
    posX = 583;
    posY = 166;
    botonTextoX = 400;
    botonTextoY = 300;
    creditoTextX = 120;
    creditoTextY = 270;
  }

  // Configuración de textos
  textAlign(CENTER, CENTER);
  textSize(26);
  fill(255, 162, 69);

  // Textos en pantalla
  text("Haga click para activar audio", textoInicioX, textoInicioY);
  text("Start", botonTextoX, botonTextoY);
  text("Desarrolladores: Nicolas Marra, Valentin Cavaller. Autor: Yuji Horii", creditoTextX, creditoTextY, 600, 200);

  pop()
}



// 2. FUNCIONES AUXILIARES (Van AFUERA de pantallacreditos)

function elegirFrame(frames, veloDestello) {
  if (!frames || frames.length === 0) return null; // Previene errores si el array está vacío
  let indice = floor(frameCount / veloDestello) % frames.length;
  return frames[indice];
}

function reproducirMusicaMenu() {
  // Despierta el audio si el navegador lo bloqueó
  if (getAudioContext().state !== 'running') {
    getAudioContext().resume();
  }
  // Reproduce la canción si existe y no está sonando
  if (CancionMenu && !CancionMenu.isPlaying()) {
    CancionMenu.loop();
  }
}
