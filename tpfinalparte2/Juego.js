class Juego {
  constructor() {
    // Arrancamos siempre en la pantalla de inicio
    this.estadoActual = new EstadoInicio(this);
  }

  cambiarEstado(nuevoEstado) {
    this.estadoActual = nuevoEstado;
  }

  iniciarPartida() {
    this.laberinto = new Laberinto();

    this.personaje = new Personaje();

    // verificamos que todas las trampas se estén creando y que se puedan interactuar
    this.trampas = [];
    this.trampas[0] = new Trampa(3, 4, 25);
    this.trampas[1] = new Trampa(8, 5, 25);
    this.trampas[2] = new Trampa(12, 7, 25);
    this.trampas[3] = new Trampa(18, 11, 25);
    this.trampas[4] = new Trampa(24, 14, 25);
  }

  dibujar() {
    this.estadoActual.dibujar();
  }

  manejarTeclas() {
    if (this.estadoActual.manejarTeclas) {
      this.estadoActual.manejarTeclas();
    }
  }

  manejarClick() {
    if (this.estadoActual.manejarClick) {
      this.estadoActual.manejarClick();
    }
  }
}
