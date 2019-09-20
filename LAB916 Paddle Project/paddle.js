// Calvin Kapral
// 9/16/19
// This is correct

class Paddle{

  constructor(x,y){
    this.loc=createVector(x,y);
    this.clr=color(random(255), random(255), random(255));
    // this.w=250
    // this.h=25

  }
  run(){
    this.render();
    this.move();
  }

  render(){
    fill(this.clr)
    rect(this.loc.x,this.loc.y,150,30)
  }
move(){
   mouseMoved(){

    if (this.x > 800)
}
    this.loc.x = this.loc.x +1;
    }



}//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
