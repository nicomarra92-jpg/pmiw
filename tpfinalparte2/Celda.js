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

    if (this.esTipoPared()) {
      fill(135, 101, 22);
    } else {
      fill(224, 211, 146);
    }

// Dibuja un rectángulo que representa la celda del laberinto.
// La posición se calcula multiplicando la fila y la columna
// por el tamaño de cada celda.
rect(
  this.fila * this.tamañoCelda,
  this.columna * this.tamañoCelda,
  this.tamañoCelda,
  this.tamañoCelda
);

// Comprueba si la celda actual está marcada como una trampa.
if (this.esTrampa()) {

  // Establece el color rojo para identificar visualmente la trampa.
  fill(255, 0, 0);

  // Dibuja nuevamente un rectángulo en la misma posición,
  // pero esta vez con el color rojo para representar la trampa.
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
