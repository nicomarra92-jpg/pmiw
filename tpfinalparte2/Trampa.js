class Trampa {
  constructor(fila, columna, tamaño) {

    this.posX = fila * tamaño;
    this.posY = columna * tamaño;

    this.tamaño = tamaño;
  }

  dibujar() {

    image(imgSlime,
      this.posX,
      this.posY,
      this.tamaño,
      this.tamaño
    );
  }

  colisionar(personaje) {

    let jugadorX = personaje.x * personaje.tamaño;
    let jugadorY = personaje.y * personaje.tamaño;

    if (
      jugadorX < this.posX + this.tamaño &&
      jugadorX + personaje.tamaño > this.posX &&
      jugadorY < this.posY + this.tamaño &&
      jugadorY + personaje.tamaño > this.posY
    ) {

      personaje.recibirDaño();
    }
  }
}
