class Juego {
  constructor() {
    this.tCelda = 50; 
    this.filas = 9;   
    this.columnas = 16; 

    // 1. CREACIÓN BLINDADA: Creamos la grilla vacía (todo caminos libres '0') vía código
    this.grilla = [];
    for (let f = 0; f < this.filas; f++) {
      this.grilla[f] = new Array(this.columnas).fill(0);
    }

    // 2. DISEÑO DEL LABERINTO: Convertimos en pared (1) las filas que queramos
    // Hacemos que la fila 0 (techo) y la fila 8 (piso) sean todas paredes de un solo golpe
    this.grilla[0].fill(1);
    this.grilla[8].fill(1);

    // Hacemos que la primera y última columna también sean paredes de arriba a abajo
    for (let f = 0; f < this.filas; f++) {
      this.grilla[f][0] = 1;
      this.grilla[f][15] = 1;
    }

    // Paredes internas de tu laberinto (podés agregar o sacar las que quieras)
    this.grilla[2][2] = 1; this.grilla[2][3] = 1; this.grilla[2][4] = 1;
    this.grilla[3][5] = 1; this.grilla[3][6] = 1; this.grilla[4][6] = 1;
    this.grilla[5][6] = 1; this.grilla[6][7] = 1; this.grilla[6][8] = 1;
    this.grilla[7][10] = 1; this.grilla[5][9] = 1; this.grilla[5][10] = 1;
    this.grilla[3][3] = 1; this.grilla[4][3] = 1; this.grilla[5][3] = 1;
    this.grilla[1][8] = 1; this.grilla[2][8] = 1; this.grilla[3][8] = 1;
    this.grilla[4][8] = 1; this.grilla[5][8] = 1; this.grilla[6][8] = 1;
    this.grilla[3][10] = 1; this.grilla[2][10] = 1; this.grilla[4][10] = 1;
    this.grilla[5][2] = 1; this.grilla[6][2] = 1; this.grilla[7][4] = 1;
    this.grilla[5][11] = 1; this.grilla[7][13] = 1; this.grilla[6][13] = 1;
    this.grilla[5][13] = 1; this.grilla[4][13] = 1; this.grilla[4][13] = 1;
    this.grilla[3][12] = 1; this.grilla[2][12] = 1; this.grilla[2][14] = 1;
    this.grilla[5][5] = 1;
    





    this.crearPersonaje();
    this.crearTrampas();
  }

  iniciar() {
  }

  dibujar() {
    // DIBUJO DEL MAPA
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

    // TUS OBJETOS ORIGINALES (Se dibujan arriba)
    this.personaje.dibujar();
    this.personaje.controlarInvul();

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
}
