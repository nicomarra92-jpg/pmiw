class Personaje {
  constructor() {
    this.x = 1;
    this.y = 1;
    this.tamaño = 25;

    this.velocidad = 150;
    this.tiempoAnterior = 0;
  }

  mover(laberinto) {
    if (millis() - this.tiempoAnterior > this.velocidad) {

      let nuevaX = this.x;
      let nuevaY = this.y;

      if (keyIsDown(LEFT_ARROW)) {
        nuevaX--;
      }
      else if (keyIsDown(RIGHT_ARROW)) {
        nuevaX++;
      }
      else if (keyIsDown(UP_ARROW)) {
        nuevaY--;
      }
      else if (keyIsDown(DOWN_ARROW)) {
        nuevaY++;
      }

      if (!laberinto.esPared(nuevaX, nuevaY)) {
        this.x = nuevaX;
        this.y = nuevaY;
      }

      this.tiempoAnterior = millis();
    }
  }

  dibujar() {
    fill(0, 0, 255);
    noStroke();

    rect(
      this.x * this.tamaño,
      this.y * this.tamaño,
      this.tamaño,
      this.tamaño
    );
  }
}
