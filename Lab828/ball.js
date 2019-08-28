//ball.js

class Ball{
  constructor(x,y,dx,dy){
    this.loc=createVector(x,y);
    this.vel=createVector(dx, dy);
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
  this.clr = color(random(255), random(255),random(255))
this.loc.add(this.vel)
}
render(){
    //this.clr = color(random(255), random(255),random(255))
fill(this.clr);
ellipse(this.loc.x, this.loc.y)
//ellipse(this.x, this.y, 50,50)
}


}
//ellipse(this.x, this.y, 50,50)
