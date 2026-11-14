// ==========================================
// 1. PANTALLA DE INICIO
// ==========================================
class EstadoInicio {
  constructor(juego) {
    this.juego = juego;

    this.tiempo = 0;
    this.tituloPosY = 550;   // Ajustá la Y inicial si arrancaba en otra altura

    this.posX = -500;
    this.posY = -500;
    this.textoInicioX = -500;
    this.textoInicioY = -500;
    this.botonTextoX = -500;
    this.botonTextoY = -500;
    this.creditoTextX = -500;
    this.creditoTextY = -500;

    this.contadorActivo = false;
    this.contador = 0;
  }

  dibujar() {
    push();
    imageMode(CENTER);
    background(0, 100, 100);

    // esta primera imagen (tituloEstacinario) es el titulo del juego sin el dragon
    if (tituloEstacinario) {
      image(tituloEstacinario, 400, this.tituloPosY, 500, 150);
    }

    // hace que suba (tituloEstacinario)
    if (this.tiempo < 190) {
      this.tituloPosY -= 2;
    }

    // Animación del destello
    let dibujarDestello = elegirFrame(destello, veloDestello);
    if (dibujarDestello) {
      image(dibujarDestello, this.posX, this.posY);
    }

    // Si llega al tiempo 190, posiciona el texto de inicio
    if (this.tiempo >= 190 && !this.contadorActivo) {
      this.textoInicioX = 400;
      this.textoInicioY = 320;
    }

    // Lógica del contador de tiempo
    if (this.contadorActivo) {
      this.contador++;
    }
    if (this.contador >= 120) {
      this.posX = 583;
      this.posY = 166;
      this.botonTextoX = 400;
      this.botonTextoY = 300;
      this.creditoTextX = 120;
      this.creditoTextY = 270;
    }

    // Configuración de textos
    textAlign(CENTER, CENTER);
    textSize(26);
    fill(255, 162, 69);

    // Textos en pantalla
    text("Haga click para activar audio", this.textoInicioX, this.textoInicioY);
    text("Start", this.botonTextoX, this.botonTextoY);
    text("Desarrolladores: Nicolas Marra, Valentin Cavaller. Autor: Yuji Horii", this.creditoTextX, this.creditoTextY, 600, 200);

    this.tiempo++;
    pop();
  }

  manejarClick() {
    // Clic en "Haga click para activar audio"
    if (
      !this.contadorActivo &&
      dist(mouseX, mouseY, this.textoInicioX, this.textoInicioY) < 150
      ) {
      reproducirMusicaMenu();
      this.contadorActivo = true;
      this.textoInicioX = -500;
    }

    // Clic en "Start"
    if (
      this.contador >= 120 &&
      dist(mouseX, mouseY, this.botonTextoX, this.botonTextoY) < 60
      ) {
      if (CancionMenu && CancionMenu.isPlaying()) {
        CancionMenu.stop();
      }
      this.juego.iniciarPartida();
      this.juego.cambiarEstado(new EstadoJugando(this.juego));
    }
  }

  manejarTeclas() {
  }
}

// ==========================================
// 2. PANTALLA DE JUEGO
// ==========================================
class EstadoJugando {
  constructor(juego) {
    this.juego = juego;

    // Inicia la música de batalla.
    if (!musicaLaberinto.isPlaying()) {
      musicaLaberinto.loop();
    }
    
  }
  
      dibujar() {
      this.juego.personaje.mover(this.juego.laberinto);
      this.juego.personaje.controlarInvulnerabilidad();

      let resultadoPuerta = this.juego.laberinto.actualizarPuertas(this.juego.personaje);

      this.juego.laberinto.dibujar();

      for (let i = 0; i < this.juego.trampas.length; i++) {
        this.juego.trampas[i].dibujar();
        this.juego.trampas[i].colisionar(this.juego.personaje);
      }

      this.juego.personaje.dibujar();

      if (this.juego.personaje.vida <= 0) {
        this.juego.cambiarEstado(new EstadoPerder(this.juego));
        return;
      }

      if (resultadoPuerta === "GANAR") {
        this.juego.cambiarEstado(new EstadoGanar(this.juego));
      } else if (resultadoPuerta === "PERDER") {
        this.juego.cambiarEstado(new EstadoPerder(this.juego));
      }
    }

  detenerMusica() {
    musicaLaberinto.stop();
  }

  manejarTeclas() {
  }
  manejarClick() {
  }
}

// ==========================================
// 3. PANTALLA GANAR
// ==========================================
class EstadoGanar {
  constructor(juego) {
    this.juego = juego;

    // Reproduce la música de victoria una sola vez.
    musicaGanadora.play();
  }

  detenerMusica() {
    musicaGanadora.stop();
  }

  dibujar() {
    push();
    background(0);

    if (imgGanar) {
      imageMode(CORNER);
      image(imgGanar, 0, 0, width, height);
    }

    textAlign(CENTER, CENTER);
    textSize(20);
    fill(255);
    text("Hacé clic o presioná R para volver al inicio", width / 2, height - 15);

    pop();
  }

  manejarClick() {
    this.juego.cambiarEstado(new EstadoInicio(this.juego));
  }

  manejarTeclas() {
    if (key === 'r' || key === 'R') {
      this.juego.cambiarEstado(new EstadoInicio(this.juego));
    }
  }
}

// ==========================================
// 4. PANTALLA PERDER
// ==========================================
class EstadoPerder {
  constructor(juego) {
    this.juego = juego;

    // Reproduce la música de derrota una sola vez.
    musicaPerdedora.play();
  }

  detenerMusica() {
    musicaPerdedora.stop();
  }

  dibujar() {
    push();
    background(0);

    if (imgPerder) {
      imageMode(CORNER);
      image(imgPerder, 0, 0, width, height);
    }

    textAlign(CENTER, CENTER);
    textSize(20);
    fill(255);
    text("Hacé clic o presioná R para volver al inicio", width / 2, height - 25);

    pop();
  }

  manejarClick() {
    this.juego.cambiarEstado(new EstadoInicio(this.juego));
  }

  manejarTeclas() {
    if (key === 'r' || key === 'R') {
      this.juego.cambiarEstado(new EstadoInicio(this.juego));
    }
  }
}

// ==========================================
// FUNCIONES AUXILIARES
// ==========================================
function elegirFrame(frames, veloDestello) {
  if (!frames || frames.length === 0) return null;
  let indice = floor(frameCount / veloDestello) % frames.length;
  return frames[indice];
}

function reproducirMusicaMenu() {
  if (getAudioContext().state !== 'running') {
    getAudioContext().resume();
  }
  if (CancionMenu && !CancionMenu.isPlaying()) {
    CancionMenu.loop();
  }
}
