
class Juego {
  constructor() {
    this.laberinto = new Laberinto();
    this.personaje = new Personaje();
  }

  dibujar() {
    this.laberinto.dibujar();

    this.personaje.mover();
    this.personaje.dibujar();
  }
}
