
class Bar{
  constructor(x,w,y,c,h){
      this.loc=createVector(x,y);
      this.w=w;
      this.h=h;

  }
run(){
  this.render();
  this.update();

}

render(){

fill(50,50,50)
rect(this.loc.x, this.loc.y, this.w, this.h,)

}






}//end function
