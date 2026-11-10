class Celda {
  constructor(x, y, tamaño) {
    this.x = x;
    this.y = y;
    this.tamaño = tamaño;
  }

  dibujar() {
    stroke(0);
    noFill();
    rect(this.x, this.y, this.tamaño, this.tamaño);
  }
}
