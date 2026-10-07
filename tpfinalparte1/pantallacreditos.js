let titulo = [];
const aniTitulo = [2];
let tituloEstacinario;

let destello = [];
const aniDestello = [4];
const veloDestello = 9;



function pantallacreditos() {

  push();
  imageMode(CENTER);


  // este codigo se encarga de generar la funcion que me permite cambiar la velocidad de animacion del destello
  function elegirFrame(frames, veloDestello) {
    let indice = floor(frameCount / veloDestello) % frames.length;

    return frames[indice];
  }
  background(0, 100, 100);
  image (tituloEstacinario, 400, 110, 500, 150);

  let dibujarDestello = elegirFrame(destello, veloDestello);
  image (dibujarDestello, 583, 166)

    //CancionMenu.play();
pop();


    fill(255);
  textSize(30);
  text(mouseX + " - " + mouseY, mouseX, mouseY);
}
