

function setup() {
  createCanvas (800, 450);
}


function draw() {
  background (200);
  let tamañoCelda = 25;

  for (let x = 0; x < width; x += tamañoCelda) {
    for (let y = 0; y < height; y += tamañoCelda) {

      stroke(0);
      noFill();

      rect(x, y, tamañoCelda, tamañoCelda);
    }
  }
}
