//Calvin Kapral
//10,31,19




function setup(){
  var cnv=createCanvas(800,800);
    cnv.position((windowWidth-width)/2,30);
      background(0);
      sliderSize = createSlider(0,400,200);
      sliderSize.position(200,400);
      sliderColor = createSlider(0,255,110);
      sliderColor.position(200,450);

}

  function draw(){
    background(0,0,0);
    fill(sliderColor.value(), 0, 0);
    ellipse(width/2, height/2, sliderSize.value(), sliderSize.value());
    runShip();
    runPlanet();

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
