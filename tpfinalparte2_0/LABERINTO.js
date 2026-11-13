
class Laberinto {
  constructor() {

    // Define el tamaño en píxeles de cada casilla.
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
        // Se envían su posición X, posición Y y tamaño.
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
  //
  // Recibe tres parámetros:
  // fila: indica en qué fila se construirá la pared.
  // inicio: indica en qué columna comienza.
  // fin: indica en qué columna termina.
  //
  // Ejemplo:
  // crearParedHorizontal(2, 2, 8);
  //
  // Construye una pared en la fila 2, ocupando las columnas
  // desde la 2 hasta la 8.

  crearParedHorizontal(fila, inicio, fin) {

    // Recorre todas las columnas comprendidas entre inicio y fin.
    for (let x = inicio; x <= fin; x++) {

      // Busca la casilla correspondiente y la convierte en pared.
      this.celdas[x][fila].convertirAPared();
    }
  }

  // CREA UNA PARED VERTICAL.
  //
  // Recibe tres parámetros:
  // columna: indica en qué columna se construirá la pared.
  // inicio: indica en qué fila comienza.
  // fin: indica en qué fila termina.
  //
  // Ejemplo:
  // crearParedVertical(4, 3, 6);
  //
  // Construye una pared en la columna 4, ocupando las filas
  // desde la 3 hasta la 6.

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
    // Si está fuera, devuelve true (se considera una pared).
    if (x < 0 || x >= this.columnas ||
        y < 0 || y >= this.filas) {
      return true;
    }

    // Si está dentro del laberinto, consulta si esa casilla es una pared.
    return this.celdas[x][y].esTipoPared();
  }

  // CONSTRUCCIÓN DEL LABERINTO.
  //
  // Aquí se determina la ubicación de todas las paredes.
  // Se utilizan los métodos anteriores para construirlas
  // indicando sus coordenadas.

  crearLaberinto() {

    // BORDE SUPERIOR E INFERIOR
    // Construye dos paredes horizontales.
    // La primera ocupa toda la fila 0.
    // La segunda ocupa toda la última fila.

    this.crearParedHorizontal(0, 0, this.columnas - 1);
    this.crearParedHorizontal(this.filas - 1, 0, this.columnas - 1);

    // BORDE IZQUIERDO Y DERECHO
    // Construye dos paredes verticales.
    // La primera ocupa toda la columna 0.
    // La segunda ocupa toda la última columna.

    this.crearParedVertical(0, 0, this.filas - 1);
    this.crearParedVertical(this.columnas - 1, 0, this.filas - 1);


    // ZONA SUPERIOR
    // Se crean diferentes paredes dentro de la parte superior.
    // Cada número representa una fila o columna de casillas.

    // Pared horizontal en la fila 2, desde la columna 2 hasta la 8.
    this.crearParedHorizontal(2, 2, 8);

    // Otra pared horizontal en la misma fila, desde la columna 12 hasta la 18.
    this.crearParedHorizontal(2, 12, 18);

    // Pared vertical en la columna 4, desde la fila 3 hasta la 6.
    this.crearParedVertical(4, 3, 6);

    // Pared vertical en la columna 10, desde la fila 1 hasta la 4.
    this.crearParedVertical(10, 1, 4);

    // Pared vertical en la columna 16, desde la fila 3 hasta la 6.
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
  }
}
