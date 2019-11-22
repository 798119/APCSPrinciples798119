//Food class //
//10/31/19


  class Food{
    constructor(x,y,w,h){
      this.head=createVector(x,y);
      this.w=width;
      this.h=height;



    }
run(){
  this.render();
  this.update();
}
render(){
  fill(0,0,200);
  rect(this.head.x,this.head.y, 20,20);
}

update(){
   if(this.head.x === snake.head.x && this.head.y === snake.head.y){
      //  jump to new location
      this.head = createVector(Math.floor(Math.random()*26)*20,Math.floor(Math.random()*26)*20);

      //  push segment into snake
      snake.body.push(createVector(0, 0));
   }

}









}//end class
