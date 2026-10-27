class Personaje {
  constructor() {
    this.posX = 10;
    this.posY = 450;
    this.miColor = color(200,10,100);
    this.vida = 3;
    this.colision;
  }
  
  dibujar(){
    fill(this.miColor);
    rect(this.posX, this.posY, 50,50);
  }
  
  moverDerecha(){
  
  }
  
  moverIzquierda(){
  
  }
  
  moverArriba(){
  
  }
  
  moverAbajo(){
  
  }
  
  //por ahora dejo esto como nota asi discutimos di el personaje muere
  Vivo(){
  
  }
}
