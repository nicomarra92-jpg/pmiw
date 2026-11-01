class Juego {
  constructor() {

    this.crearPersonaje();
    this.crearTrampas();
  }

  iniciar() {
  }

  dibujar() {
    this.personaje.dibujar();

    this.personaje.controlarInvul();

    for (let i = 0; i < 5; i++) {
      this.trampas[i].dibujar();
      this.trampas[i].colisionar(this.personaje);
    }
  }
  crearTrampas() {


    // Creamos un arreglo para guardar las trampas.
    this.trampas = [];

    for (let i = 0; i < 5; i++) {
      this.trampas[i] = new Trampa();
    }
  }


  crearPersonaje() {
    this.personaje = new Personaje();
  }
}
