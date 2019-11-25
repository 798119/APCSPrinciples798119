//Calvin Kapral
//10/31/19

class Snake{
  constructor(x,y,dx,dy,s,clr){
      this.head=createVector(x,y);
      this.clr= color((random(255), random(255), random(255)));
      this.s=20;
      this.vel=createVector(dx,dy);
      this.body=[];




  }

run(){
  this.render();
  this.move();
  this.update();
  this.checkedges();

}

render(){
// render head
fill (0,250,0);
rect(this.head.x, this.head.y,20,20);
// render the body
for(var i = 0; i < this.body.length; i++){
  rect(this.body[i].x, this.body[i].y, 20,20);
  }
}


  move(){

    //  traverse the array setting each segment to the headation of
    //  segment before setInterval(function () {


    var smoothDirection
    if(keyCode === LEFT_ARROW){
      smoothDirection=1
    }
    if(keyCode === RIGHT_ARROW){
      smoothDirection=2
    }
    if(keyCode === UP_ARROW){
      smoothDirection=4
    }
    if(keyCode === DOWN_ARROW){
      smoothDirection=3
    }
    if(smoothDirection===1){ //left
    this.head.x=this.head.x - this.s
    }
    if(smoothDirection===2){ //right
    this.head.x=this.head.x +this.s
    }
    if(smoothDirection===3){ //down
    this.head.y=this.head.y + this.s
    }
    if(smoothDirection===4){ //up
    this.head.y=this.head.y - this.s
  }
  }

  update(){
    // update the body
    for(var i = this.body.length-1; i >= 0; i--){
      if(i===0){
        this.body[0].x = this.head.x;
        this.body[0].y = this.head.y;
        }
      else{
        this.body[i].x = this.body[i-1].x;
        this.body[i].y = this.body[i-1].y;
         }
       }
    // update the head
    this.head.add(this.vel);
    // add segment
    if(this.head.x === food.x &&
      this.head.y === food.y){
         this.loadSegment();// lengthens the body
      }
}

  checkedges(){

      if(this.head.x <0){
        gameState = 2 //endgame
        }
        if(this.head.x > width){
        gameState = 2
        }
        if(this.head.y < 0){
        gameState = 2
        }
        if(this.head.y > height){
        gameState = 2
      }
    //lives counter

  }




















  }//end code
