
class Laberinto {
  constructor() {
    this.tamañoCelda = 25;
    this.columnas = floor(width / this.tamañoCelda);
    this.filas = floor(height / this.tamañoCelda);

    this.celdas = [];

    this.crearColumnas();
    this.crearFilas();
  }

  dibujar() {
    for (let x = 0; x < this.columnas; x++) {
      for (let y = 0; y < this.filas; y++) {
        this.celdas[x][y].dibujar();
      }
    }
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
        let celda = new Celda(
          x * this.tamañoCelda,
          y * this.tamañoCelda,
          this.tamañoCelda
          );

        this.celdas[x].push(celda);
      }
    }
  }
}
