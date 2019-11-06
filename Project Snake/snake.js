//Calvin Kapral
//10/31/19

class Snake{
  constructor(x,y){
      this.loc=createVector(x,y);
      this.clr= color((random(255), random(255), random(255)));
      this.s=20;
      this.vel=createVector(this.s,this.s);
      this.body=[];


  }

run(){
  this.render();
  this.move();
  // this.checkedges();

}

render(){
  fill(0,255,0);
  rect(this.loc.x, this.loc.y,20,20);
      }

  move(){
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
    if(smoothDirection===1){
    this.loc.x=this.loc.x - this.s
    }
    if(smoothDirection===2){
    this.loc.x=this.loc.x +this.s
    }
    if(smoothDirection===3){
    this.loc.y=this.loc.y + this.s
    }
    if(smoothDirection===4){
    this.loc.y=this.loc.y - this.s
    }
  }
  checkedges(){

      if(this.loc.x <0){
        this.vel.x = -this.vel.x;
        }
        if(this.loc.x > width){
        this.vel.x = -this.vel.x;
        }
        if(this.loc.y < 0){
        this.vel.y = -this.vel.y;
        }
        if(this.loc.y > height){
        this.vel.y = this.vel.y;
      }
    //lives counter

      }


















  }//end code
