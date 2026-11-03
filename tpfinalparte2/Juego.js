class Juego {
  constructor() {

    this.tCelda = 50;
    this.filas = 9;
    this.columnas = 16;

    // crea grilla. las celdas 0 no estan pintadas
    this.grilla = [];
    for (let f = 0; f < this.filas; f++) {
      this.grilla[f] = new Array(this.columnas).fill(0);
    }

    // las celdas que son pared se pintan y pintamos la fila 0 y la 8 que actue como marco

    this.grilla[0].fill(1);
    this.grilla[8].fill(1);

    // las paredes de los extremos derecho e izquierdo tambien forman parte del marco
    for (let f = 0; f < this.filas; f++) {
      this.grilla[f][0] = 1;
      this.grilla[f][15] = 1;
    }

    // Paredes internas del laberinto
    this.grilla[2][2] = 1;
    this.grilla[2][3] = 1;
    this.grilla[2][4] = 1;
    this.grilla[3][5] = 1;
    this.grilla[3][6] = 1;
    this.grilla[4][6] = 1;
    this.grilla[5][6] = 1;
    this.grilla[6][7] = 1;
    this.grilla[6][8] = 1;
    this.grilla[7][10] = 1;
    this.grilla[5][9] = 1;
    this.grilla[5][10] = 1;
    this.grilla[3][3] = 1;
    this.grilla[4][3] = 1;
    this.grilla[5][3] = 1;
    this.grilla[1][8] = 1;
    this.grilla[2][8] = 1;
    this.grilla[3][8] = 1;
    this.grilla[4][8] = 1;
    this.grilla[5][8] = 1;
    this.grilla[6][8] = 1;
    this.grilla[3][10] = 1;
    this.grilla[2][10] = 1;
    this.grilla[4][10] = 1;
    this.grilla[5][2] = 1;
    this.grilla[6][2] = 1;
    this.grilla[7][4] = 1;
    this.grilla[5][11] = 1;
    this.grilla[7][13] = 1;
    this.grilla[6][13] = 1;
    this.grilla[5][13] = 1;
    this.grilla[4][13] = 1;
    this.grilla[4][13] = 1;
    this.grilla[3][12] = 1;
    this.grilla[2][12] = 1;
    this.grilla[2][14] = 1;
    this.grilla[5][5] = 1;






    this.crearPersonaje();
    this.crearTrampas();
    this.crearPuertas();
  }

  iniciar() {
  }

  dibujar() {
    // DIBUJa DEL MAPA
    for (let f = 0; f < this.filas; f++) {
      // Este "if" es el escudo definitivo: si algo falla externamente, saltea y no rompe el draw
      if (!this.grilla[f]) continue;

      for (let c = 0; c < this.columnas; c++) {
        if (this.grilla[f][c] === 1) {
          fill(40); // Color de la pared
          noStroke();
          rect(c * this.tCelda, f * this.tCelda, this.tCelda, this.tCelda);
        }
      }
    }

    
    this.personaje.dibujar();
    this.personaje.controlarInvul();

    this.puertas.colisionJugador(this.personaje);
    this.puertas.dibujar();

    for (let i = 0; i < 5; i++) {
      this.trampas[i].dibujar();
      this.trampas[i].colisionar(this.personaje);
    }
  }

  crearTrampas() {
    this.trampas = [];
    for (let i = 0; i < 5; i++) {
      this.trampas[i] = new Trampa();
    }
  }

  crearPersonaje() {
    this.personaje = new Personaje();
  }

  crearPuertas() {
    this.puertas = new Puertas();
  }
}
