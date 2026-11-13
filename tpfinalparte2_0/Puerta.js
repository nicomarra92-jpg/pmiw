class Puerta {
  constructor() {
     this.posX = 736;
    this.miColor = color(200, 10, 100);

    this.color1 = color(200, 10, 100);
    this.color2 = color(200, 10, 100);
  }

  dibujar() {
    this.puerta1();
    this.puerta2();
  }

  colisionJugador(personaje) {
    //puerta superior mala
    if (personaje.posX < this.posX + 40 && personaje.posX + 30 > this.posX && personaje.posY < 110 && personaje.posY + 30 > 50 ) {
      this.color1 = color(255, 0, 0);
    } else {
      this.color1 = color(200, 10, 100);
    }

    //puerta inferior buena
    if (personaje.posX < this.posX + 40 && personaje.posX + 30 > this.posX && personaje.posY < 400 && personaje.posY + 30 > 340 ) {
      this.color2 = color(0, 255, 0);
    } else {
      this.color2 = color(200, 10, 100);
    }
  }

  puerta1() {
    fill(this.color1);
    rect(this.posX, 50, 40, 60);
  }

  puerta2() {
    fill(this.color2);
    rect(this.posX, 340, 40, 60);
  }
}
