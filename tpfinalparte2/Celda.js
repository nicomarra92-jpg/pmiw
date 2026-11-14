class Celda {
  constructor(fila, columna, tamaño) {

    //en estas operaciones booleanas podemos definir que es la celda
    this.pared = false;
    this.trampa = false;
    this.puerta = null;

    this.tamañoCelda = tamaño;
    this.fila = fila;
    this.columna = columna;
  }

  dibujar() {

    // Comprueba si la celda es una pared.
    if (this.esTipoPared()) {

      image(imgPared,
        this.fila * this.tamañoCelda,
        this.columna * this.tamañoCelda,
        this.tamañoCelda,
        this.tamañoCelda
        );
    } else {

      fill(224, 211, 146);

      rect(
        this.fila * this.tamañoCelda,
        this.columna * this.tamañoCelda,
        this.tamañoCelda,
        this.tamañoCelda
        );
    }

    // Comprueba si la celda actual es una trampa.
    if (this.esTrampa()) {

      rect(
        this.fila * this.tamañoCelda,
        this.columna * this.tamañoCelda,
        this.tamañoCelda,
        this.tamañoCelda
        );
    }

    // Dibuja la puerta si existe.
    if (this.esPuerta()) {
      this.puerta.dibujar();
    }
  }


  //aca definimos en acciones que puede ser una celda
  esTipoPared() {
    return this.pared == true;
  }

  convertirAPared() {
    this.pared = true;
  }

  esTrampa() {
    return this.trampa == true;
  }

  convertirATrampa() {
    this.trampa = true;
  }

  esPuerta() {
    return this.puerta != null;
  }

  convertirAPuerta(correcta) {
    this.puerta = new Puerta(
      this.fila,
      this.columna,
      this.tamañoCelda,
      correcta
      );
  }
}
