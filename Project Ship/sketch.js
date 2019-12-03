//Calvin Kapral
//10,31,19




function setup(){
  var cnv=createCanvas(800,800);
    cnv.position((windowWidth-width)/2,30);
      background(0);


}

  function draw(){
    runShip();
    runPlanet();
    background(0,0,0);
  }

  function loadShip(){
    ship=new Ship(500,500, 200,30);
  //for loop to load paddle
    }

  function runShip(){
      ship.run();
}

function loadPlanet(){
  planet=new Planet(500,500, 200,30);
//for loop to load paddle
  }

  function runPlanet(){
      planet.run();
}
