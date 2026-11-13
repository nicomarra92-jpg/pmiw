
class Trampa {
  constructor() {
    this.posX = random(20, 750);
    this.posY = random(10, 400);
    this.miColor = color(255, 0, 0);
  }


  dibujar() {
    fill(this.miColor);
    rect(this.posX, this.posY, 20, 20);
  }

  colisionar(personaje) {

    //esta es la colicion del personaje con la trampa en base a su pocision
    //donde sumamos 20 es el tamaño de la trapa
    //donde sumamos 30 el tamaño del jugador

    if ( personaje.posX < this.posX + 20 && personaje.posX + 30 > this.posX && personaje.posY < this.posY + 20 && personaje.posY + 30 > this.posY ) {

      // aqui sacamos una vida, y activamos el timepo de invulnerabilidad
      if (!personaje.invul && personaje.vida > 0) {
        personaje.vida -= 1;
        personaje.invul = true;
      }
    }
  }
}
