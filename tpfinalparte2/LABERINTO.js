class Laberinto {
  constructor() {
    this.tamañoCelda = 25;

    // Calcula cuántas columnas entran en el ancho del canvas.
    this.columnas = floor(width / this.tamañoCelda);

    // Calcula cuántas filas entran en el alto del canvas.
    this.filas = floor(height / this.tamañoCelda);

    // Crea un array vacío donde se guardarán todas las columnas
    // y dentro de ellas las diferentes casillas.
    this.celdas = [];

    // Primero se crean las columnas del laberinto.
    this.crearColumnas();

    // Después se agregan las casillas dentro de cada columna.
    this.crearFilas();

    // Finalmente se construyen las paredes negras.
    this.crearLaberinto();

    this.trampas = [];
  }

  // Recorre todas las casillas y las dibuja en pantalla.
  dibujar() {
    for (let x = 0; x < this.columnas; x++) {
      for (let y = 0; y < this.filas; y++) {

        // Accede a una casilla específica usando su columna y fila.
        this.celdas[x][y].dibujar();
      }
    }
  }

  crearTrampa(fila, columna) {

    // Busca la celda correspondiente y la convierte en trampa.
    this.celdas[fila][columna].convertirATrampa();
  }

  // CREA UNA PUERTA.
  crearPuerta(fila, columna, correcta) {

    // Busca la celda correspondiente y crea una puerta.
    this.celdas[fila][columna].convertirAPuerta(correcta);
  }

  // ACTUALIZA LAS PUERTAS.
  actualizarPuertas(personaje) {

    for (let x = 0; x < this.columnas; x++) {
      for (let y = 0; y < this.filas; y++) {

        let celda = this.celdas[x][y];

        if (celda.esPuerta()) {
          let resultado = celda.puerta.colisionJugador(personaje);
          if (resultado !== null) {
            return resultado;
          }
        }
      }
    }
    return null;
  }

  // Crea las columnas del laberinto.
  crearColumnas() {
    for (let x = 0; x < this.columnas; x++) {

      // Crea un array vacío que representará una columna.
      let columna = [];

      // Agrega esa columna al array principal.
      this.celdas.push(columna);
    }
  }

  // Agrega las filas (casillas) dentro de cada columna.
  crearFilas() {
    for (let x = 0; x < this.columnas; x++) {

      for (let y = 0; y < this.filas; y++) {

        // Crea una nueva casilla.
        let celda = new Celda(
          x,
          y,
          this.tamañoCelda
        );

        // Guarda la casilla dentro de su columna correspondiente.
        this.celdas[x].push(celda);
      }
    }
  }

  // CREA UNA PARED HORIZONTAL.
  crearParedHorizontal(fila, inicio, fin) {

    // Recorre todas las columnas comprendidas entre inicio y fin.
    for (let x = inicio; x <= fin; x++) {

      // Busca la casilla correspondiente y la convierte en pared.
      this.celdas[x][fila].convertirAPared();
    }
  }

  // CREA UNA PARED VERTICAL.
  crearParedVertical(columna, inicio, fin) {

    // Recorre todas las filas comprendidas entre inicio y fin.
    for (let y = inicio; y <= fin; y++) {

      // Busca la casilla correspondiente y la convierte en pared.
      this.celdas[columna][y].convertirAPared();
    }
  }

  // Comprueba si una posición determinada corresponde a una pared.
  esPared(x, y) {

    // Comprueba si la posición está fuera de los límites del laberinto.
    if (x < 0 || x >= this.columnas ||
      y < 0 || y >= this.filas) {
      return true;
    }

    // Si está dentro del laberinto, consulta si esa casilla es una pared.
    return this.celdas[x][y].esTipoPared();
  }

  // CONSTRUCCIÓN DEL LABERINTO.
  crearLaberinto() {

    // BORDE SUPERIOR E INFERIOR
    this.crearParedHorizontal(0, 0, this.columnas - 1);
    this.crearParedHorizontal(this.filas - 1, 0, this.columnas - 1);

    // BORDE IZQUIERDO Y DERECHO
    this.crearParedVertical(0, 0, this.filas - 1);
    this.crearParedVertical(this.columnas - 1, 0, this.filas - 1);

    // ZONA SUPERIOR
    this.crearParedHorizontal(2, 2, 8);
    this.crearParedHorizontal(2, 12, 18);
    this.crearParedVertical(4, 3, 6);
    this.crearParedVertical(10, 1, 4);
    this.crearParedVertical(16, 3, 6);

    // ZONA CENTRAL
    this.crearParedHorizontal(6, 2, 5);
    this.crearParedHorizontal(6, 9, 14);
    this.crearParedHorizontal(9, 5, 12);
    this.crearParedHorizontal(9, 17, 25);

    this.crearParedVertical(7, 7, 10);
    this.crearParedVertical(14, 6, 9);
    this.crearParedVertical(23, 3, 8);

    // ZONA INFERIOR
    this.crearParedHorizontal(13, 2, 9);
    this.crearParedHorizontal(13, 14, 21);
    this.crearParedHorizontal(15, 7, 15);

    this.crearParedVertical(4, 12, 16);
    this.crearParedVertical(12, 11, 14);
    this.crearParedVertical(20, 12, 16);
    this.crearParedVertical(27, 10, 15);

    // CREA TRAMPAS
    this.crearTrampa(3, 4);
    this.crearTrampa(8, 5);
    this.crearTrampa(12, 7);
    this.crearTrampa(18, 11);
    this.crearTrampa(24, 14);

    // CREA PUERTAS
    // Puerta superior: incorrecta.
    this.crearPuerta(29, 2, false);

    // Puerta inferior: correcta.
    this.crearPuerta(29, 13, true);
  }
}
