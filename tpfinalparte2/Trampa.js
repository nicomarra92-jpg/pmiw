class Trampa {
  constructor() {
    this.posX = random(20, 750);
    this.posY = random(10, 400);
    this.miColor = color(61, 72, 255);
  }


  dibujar() {
    fill(this.miColor);
    rect(this.posX, this.posY, 20, 20);
  }

  colisionar(personaje) {

    if ( personaje.posX < this.posX + 20 && personaje.posX + 30 > this.posX && personaje.posY < this.posY + 20 && personaje.posY + 30 > this.posY ) {

      // aqui sacamos una vida, y activamos el timepo de invulnerabilidad
      if (!personaje.invul && personaje.vida > 0) {
        personaje.vida -= 1;
        personaje.invul = true;
      }
    }
  }
}
