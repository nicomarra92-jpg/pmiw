class Laberinto {
  constructor() {
    this.tamañoCelda = 25;

    // Calcula columnas
    this.columnas = floor(width / this.tamañoCelda);

    // Calcula filas 
    this.filas = floor(height / this.tamañoCelda);

    // Crea un array vacío donde se guardarán todas las columnas
    // y dentro de ellas las diferentes casillas.
    this.celdas = [];

    this.crearColumnas();

    this.crearFilas();

    this.crearLaberinto();

    this.trampas = [];
  }

  dibujar() {
    for (let x = 0; x < this.columnas; x++) {
      for (let y = 0; y < this.filas; y++) {

        this.celdas[x][y].dibujar();
      }
    }
  }
  
    //  PUERTA.
  crearPuerta(fila, columna, correcta) {

    this.celdas[fila][columna].convertirAPuerta(correcta);
  }

  crearTrampa(fila, columna) {

    this.celdas[fila][columna].convertirATrampa();
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

  crearColumnas() {
    for (let x = 0; x < this.columnas; x++) {

      let columna = [];

      this.celdas.push(columna);
    }
  }

  crearFilas() {
    for (let x = 0; x < this.columnas; x++) {

      for (let y = 0; y < this.filas; y++) {

        // Crea una nueva casilla.
        let celda = new Celda(
          x,
          y,
          this.tamañoCelda
        );

        this.celdas[x].push(celda);
      }
    }
  }

  crearParedHorizontal(fila, inicio, fin) {

    for (let x = inicio; x <= fin; x++) {

      this.celdas[x][fila].convertirAPared();
    }
  }

  crearParedVertical(columna, inicio, fin) {

    for (let y = inicio; y <= fin; y++) {

      this.celdas[columna][y].convertirAPared();
    }
  }

  esPared(x, y) {

    if (x < 0 || x >= this.columnas ||
      y < 0 || y >= this.filas) {
      return true;
    }

    return this.celdas[x][y].esTipoPared();
  }
//LABERINTO
  crearLaberinto() {

    this.crearParedHorizontal(0, 0, this.columnas - 1);
    this.crearParedHorizontal(this.filas - 1, 0, this.columnas - 1);

    this.crearParedVertical(0, 0, this.filas - 1);
    this.crearParedVertical(this.columnas - 1, 0, this.filas - 1);

    this.crearParedHorizontal(2, 2, 8);
    this.crearParedHorizontal(2, 12, 18);
    this.crearParedVertical(4, 3, 6);
    this.crearParedVertical(10, 1, 4);
    this.crearParedVertical(16, 3, 6);

    this.crearParedHorizontal(6, 2, 5);
    this.crearParedHorizontal(6, 9, 14);
    this.crearParedHorizontal(9, 5, 12);
    this.crearParedHorizontal(9, 17, 25);

    this.crearParedVertical(7, 7, 10);
    this.crearParedVertical(14, 6, 9);
    this.crearParedVertical(23, 3, 8);

    this.crearParedHorizontal(13, 2, 9);
    this.crearParedHorizontal(13, 14, 21);
    this.crearParedHorizontal(15, 7, 15);

    this.crearParedVertical(4, 12, 16);
    this.crearParedVertical(12, 11, 14);
    this.crearParedVertical(20, 12, 16);
    this.crearParedVertical(27, 10, 15);

    this.crearTrampa(3, 4);
    this.crearTrampa(8, 5);
    this.crearTrampa(12, 7);
    this.crearTrampa(18, 11);
    this.crearTrampa(24, 14);

    // CREA PUERTAS
    this.crearPuerta(29, 2, false);

    this.crearPuerta(29, 13, true);
  }
}
