class Juego {
  constructor() {
    this.laberinto = new Laberinto();
    this.personaje = new Personaje();
    this.puerta = new Puerta();
    
    this.trampas = [];
    for (let i = 0; i < 5; i++) {
      this.trampas[i] = new Trampa();
    }
  }

  dibujar() {
    this.laberinto.dibujar();

    this.personaje.mover(this.laberinto);
    this.personaje.dibujar();
    this.puerta.dibujar();
    this.puerta.colisionJugador(this.personaje);
    
    for (let i = 0; i < 5; i++) {
      this.trampas[i].dibujar();
      this.trampas[i].colisionar(this.personaje);
    }
  }
}
