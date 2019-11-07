//Food class //
//10/31/19


  class Food{
    constructor(x,y,w,h){
      this.loc=createVector(x,y);
      this.w=width;
      this.h=height;


    }
run(){
  this.render();
  this.update();
}
render(){
  fill(0,0,200);
  rect(this.loc.x,this.loc.y, 20,20);
}

update(){


}









}//end class
