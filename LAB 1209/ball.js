//ball.js

class Ball{
  constructor(x,y){
    this.loc=createVector(x,y);
    this.red= random(100,255);
    this.clr = color(this.red, 0 , 0);

  }
run(){
  this.render();

}

render(){
  //this.clr = color(random(255), random(255),random(255))
    fill(this.clr);
  ellipse(this.loc.x, this.loc.y, 30,30);
//ellipse(this.x, this.y, 50,50)
}

getR(){
  return this.clr;
}




}
//ellipse(this.x, this.y, 50,50)
