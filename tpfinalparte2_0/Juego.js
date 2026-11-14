class Juego {
  constructor() {

    this.laberinto = new Laberinto();

    this.personaje = new Personaje();

    //verificamos que todas la strampas se esten creando y que se puedan interactuar
    this.trampas = [];
    this.trampas[0] = new Trampa(3, 4, 25);
    this.trampas[1] = new Trampa(8, 5, 25);
    this.trampas[2] = new Trampa(12, 7, 25);
    this.trampas[3] = new Trampa(18, 11, 25);
    this.trampas[4] = new Trampa(24, 14, 25);
  }

  dibujar() {

    this.personaje.mover(this.laberinto);
    this.personaje.controlarInvulnerabilidad();

    // Comprueba las puertas.
    this.laberinto.actualizarPuertas(this.personaje);

    // Dibuja el laberinto.
    this.laberinto.dibujar();

    // Dibuja y comprueba las trampas.
    for (let i = 0; i < this.trampas.length; i++) {
      this.trampas[i].dibujar();
      this.trampas[i].colisionar(this.personaje);
    }

    // Dibuja el personaje.
    this.personaje.dibujar();
  }
}
