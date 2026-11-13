
class Celda {
  constructor(fila, columna, tamaño) {
    this.pared = false;
    this.tamañoCelda = tamaño;
    this.fila = fila;
    this.columna = columna;
  }

  dibujar() {
    if (this.esTipoPared()) {
      fill(0);
    } else {
      fill(200);
    }

    rect(
      this.fila * this.tamañoCelda,
      this.columna * this.tamañoCelda,
      this.tamañoCelda,
      this.tamañoCelda
    );
  }

  esTipoPared() {
    return this.pared == true;
  }

  convertirAPared() {
    this.pared = true;
  }
}
