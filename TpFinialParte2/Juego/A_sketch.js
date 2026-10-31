let objJuego;


function setup() {
  createCanvas (800, 450);
  objJuego = new Juego();
}


function draw() {
  background (200);
  objJuego.dibujar();
}



//El jugador debera surcar un laberinto y encotrar la salida correcta mientras lo persigen enemigos
//Elegimos la pantalla de seleccion de la tablilla
