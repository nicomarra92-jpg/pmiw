class Puerta {

  // Recibe la posición, el tamaño y si la puerta es correcta.
  constructor(fila, columna, tamaño, correcta) {

    // Convierte la posición de la celda a píxeles.
    this.posX = fila * tamaño;
    this.posY = columna * tamaño;

    this.tamaño = tamaño;

    // Indica si la puerta es correcta o incorrecta.
    this.correcta = correcta;

    // Establece el color inicial de la puerta.
    this.miColor = color(200, 10, 100);
  }

  // DIBUJA LA PUERTA.
  dibujar() {
    fill(this.miColor);

    // Dibuja un cuadrado en la posición correspondiente.
    rect(this.posX, this.posY, this.tamaño, this.tamaño);
  }

  // DETECTA LA COLISIÓN CON EL PERSONAJE.
  colisionJugador(personaje) {

    // Comprueba si los límites del personaje
    // se superponen con los límites de la puerta.
    if (
      personaje.x * personaje.tamaño < this.posX + this.tamaño &&
      personaje.x * personaje.tamaño + personaje.tamaño > this.posX &&
      personaje.y * personaje.tamaño < this.posY + this.tamaño &&
      personaje.y * personaje.tamaño + personaje.tamaño > this.posY
    ) {

      // Si toca una puerta correcta, cambia a verde.
      if (this.correcta) {
        this.miColor = color(0, 255, 0);

      // Si toca una puerta incorrecta, cambia a rojo.
      } else {
        this.miColor = color(255, 0, 0);
      }

    } else {

      // Si el personaje se aleja, recupera el color inicial.
      this.miColor = color(200, 10, 100);
    }
  }
}
