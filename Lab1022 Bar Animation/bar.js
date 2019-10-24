//
// class Bar{
//   constructor(location{
//
//   this.loc = location;
//   this.w = barWidth
//   this.h = height - this.loc.y
//   }
//
//
//
// render(){
//
// fill(50,50,50)
// rect(this.loc.x, this.loc.y, this.w, this.h);
//
// }
//
//
//
//
//
//
// }//end function
class Bar{
  constructor(x,y,w,h,c){
    this.loc=createVector(x,y);
    this.w=w;
    this.h=h;
  }
run(){
  //main function in class
  this.render();

}
render(){
  fill(0,0,255);
  rect(this.loc.x,this.loc.y,this.w,this.h);
}
set(i){
  this.loc.x=i*25;
}
}
