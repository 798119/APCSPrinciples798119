// Calvin Kapral
// 9/16/19
// This is correct


class Paddle{

  constructor(x,y,h,w){
    this.loc=createVector(x,y);
    this.clr=color(random(255), random(255), random(255));
    this.w=width;
    this.h=height;

  }

  run(){
    this.render();
    this.update();
    this.checkedges();


  }

  render(){
    fill(this.clr);
    rect(this.loc.x,this.loc.y,200,30);
  }
  update(){
    this.loc.x = lerp(this.loc.x, mouseX-(150/2), .15);
  }
   checkedges(){
 if (mouseX <= 1 ){
   mouseX = 1;
 }
 if (mouseX>= 800){
    mouseX = 600;

 }

   }









// move(){
//    mouseMoved(){
//
//     if (this.x > 800)
// }
//     this.loc.x = this.loc.x +1;
//     }



}//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
