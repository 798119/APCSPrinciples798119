//ball.js

class Ball{
  constructor(x,y,dx,dy){
    this.x=x;
    this.y=y;
    this.dx=dx;
    this.dy = dy;
    this.clr = color(random(255), random(255),random(255))
    }
run(){
  this.checkedges();
  this.update();
  this.render();

}
checkedges(){
  if(this.x<0){
    this.dx = -this.dx;
    }
    if(this.x > width){
    this.dx = -this.dx
    }
    if(this.y < 0){
    this.dy = -this.dy
    }
    if(this.y > height){
    this.dy = -this.dy
    }
  }

update(){
  //this.clr = color(random(255), random(255),random(255))
this.x = this.x + this.dx;
this.y = this.y + this.dy;
}
render(){
    //this.clr = color(random(255), random(255),random(255))
fill(this.clr);
rect(this.x, this.y, 50,50)
//ellipse(this.x, this.y, 50,50)

}
}
class Triangle{
  constructor(x,y,z,dx,dy,dz){
    this.x=x;
    this.y=y;
    this.z = z;
    this.dx=dx;
    this.dy = dy;
    this.dz =dz;
    this.clr = color(random(255), random(255),random(255))
    }
run(){
  this.checkedges();
  this.update();
  this.render();

}
checkedges(){
  if(this.x<0){
    this.dx = -this.dx;
    }
    if(this.x > width){
    this.dx = -this.dx
    }
    if(this.y < 0){
    this.dy = -this.dy
    }
    if(this.y > height){
    this.dy = -this.dy
    }
  }

update(){
  //this.clr = color(random(255), random(255),random(255))
this.x = this.x + this.dx;
this.y = this.y + this.dy;
this.z =this.z + this.dz;
}
render(){
    //this.clr = color(random(255), random(255),random(255))
fill(this.clr);
triangle(this.x, this.y, this.dz)
//ellipse(this.x, this.y, 50,50)

}
}
