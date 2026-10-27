class Juego {
  constructor() {

    this.crearPersonaje();
    this.crearTrampas();
    
  }


  iniciar() {
    
  }



  dibujar() {
    this.personaje.dibujar();

    for (let i=0; i < 5; i++) {
      this.trampas[i].dibujar();
    }
  }



  crearEnemigos() {
    
    this.enemigos = [];
    
    for (let i=0; i < 5; i++) {
      this.trampas[i] = new Trampas();
    } 
  }



  crearPersonaje() {
    this.personaje = new Personaje();
  }
  
  
}
