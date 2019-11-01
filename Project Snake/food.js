//Food class //
//10/31/19


  class Food{
    constuctor(x,y){
      this.loc=createVector(x,y);

    }
run(){
  this.render();
  this.update();
}
render(){
  fill(0,0,200)
  rect(this.loc.x,this.loc.y, 20,20)
}

update(){


}









}//end class
