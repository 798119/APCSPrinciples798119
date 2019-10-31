
class Ship{
  constructor(x, y, dx,dy,id){
    this.loc=createVector(x,y);
    this.vel=createVector(dx, dy);
    this.acc=createVector(0,0);
      this.clr = color(random(255), random(255),random(255))
      this.id=id;
  this.angle = this.loc.dist(bigball.loc)

  }
run(){
  this.checkedges();
  this.update();
  this.render();
}
checkedges(){
  if(this.loc.x <0){
    this.vel.x = -this.vel.x;
    }
    if(this.loc.x > width){
    this.vel.x = -this.vel.x
    }
    if(this.loc.y < 0){
    this.vel.y = -this.vel.y
    }
    if(this.loc.y > height){
    this.vel.y = -this.vel.y
    }
  }

update(){
  var disttobigballs;
  if(this.id >=0){
  disttobigballs = this.loc.dist(bigball.loc);
}
  if(disttobigballs <250){


  this.acc = p5.Vector.sub( bigball.loc, this.loc);
  this.acc.normalize();
  this.acc.mult(0.5);

}
if(disttobigballs<150){
  this.acc = p5.Vector.sub( bigball.loc, this.loc);
  this.acc.normalize();
  this.acc.mult(0.1);

}
}

//this.vel.add(this.acc);
//this.loc.add(this.vel)


render(){
    //this.clr = color(random(255), random(255),random(255))

fill(this.clr);
triangle(this.loc.x, this.loc.y, this.sizeX, this.sizeY)

push();
translate(this.loc.x, this.loc.y);
rotate(this.angle);
triangle(-5, 8, 5, 8, 0, -8);
pop();

//ellipse(this.x, this.y, 50,50)
}


}
//ellipse(this.x, this.y, 50,50)
