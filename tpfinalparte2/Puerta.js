class Puerta {

  // Recibe la posición, el tamaño y si la puerta es correcta.
  constructor(fila, columna, tamaño, correcta) {

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
    if (imgPuerta) {
      image(imgPuerta, this.posX, this.posY, this.tamaño, this.tamaño);
    } else {
      fill(this.miColor);
      // Dibuja un cuadrado en la posición correspondiente si no hay imagen.
      rect(this.posX, this.posY, this.tamaño, this.tamaño);
    }
  }

  // COLISIÓN CON EL PERSONAJE.
  colisionJugador(personaje) {

    // límites del personaje
    if (
      personaje.x * personaje.tamaño < this.posX + this.tamaño &&
      personaje.x * personaje.tamaño + personaje.tamaño > this.posX &&
      personaje.y * personaje.tamaño < this.posY + this.tamaño &&
      personaje.y * personaje.tamaño + personaje.tamaño > this.posY
    ) {

      if (this.correcta) {
        this.miColor = color(0, 255, 0);
        return "GANAR";

      } else {
        this.miColor = color(255, 0, 0);
        return "PERDER";
      }

    } else {

      this.miColor = color(200, 10, 100);
      return null;
    }
  }
}
