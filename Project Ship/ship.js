class Ship{
  constructor(x, y, dx, dy){
   this.loc = createVector(x, y);
   this.vel = createVector(dx, dy);
   this.acc = createVector(0,0);
   this.angle = 0;
   this.clr = color(183, 255, 0);
  }

  run(){
    this.checkedges();
    this.update();
    this.render();
  }

  checkedges(){
    if(this.loc.x < 0){
  this.vel.x = -this.vel.x;
    }
    if(this.loc.x > width){
      this.vel.x = -this.vel.x;
    }
    if(this.loc.y < 0){
      this.vel.y = -this.vel.y;
    }
    if(this.loc.y > height){
      this.vel.y = -this.vel.y;
    }

  }
  update(){
    var distToPlanet;

     distToPlanet = this.loc.dist(planet.loc);


       this.acc = p5.Vector.sub(planet.loc, this.loc);
       this.acc.normalize();
       this.acc.mult(0.1);

    this.vel.limit(3);
     this.vel.add(this.acc);
   this.loc.add(this.vel);

 if (distToPlanet < 100){
   planet.loc.x = random(800);
   planet.loc.y = random (800);
 }

  }

  render(){
    this.heading = this.vel.heading();
    fill(this.clr);
    this.angle = this.angle +1;
    push();
    translate (this.loc.x, this.loc.y);
    rect (20,20,20,20);

  }


} // end ship class
