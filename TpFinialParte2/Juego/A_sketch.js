let objJuego;


function setup(){
 objJuego = new Juego();
 fill(200);
 createCanvas (800, 450);
 
}


function draw(){
 objJuego.dibujar();
 
}



//El jugador debera surcar un laberinto y encotrar la salida correcta mientras lo persigen enemigos
//Elegimos la pantalla de seleccion de la tablilla
