//Calvin Kapral
//10/31/19

class Snake(){
  constructor(){
      this.loc=creaeVector(x,y,h,w);
      this.clr= color((random(255), random(255), random(255));
      this.s=25;

  }

run(){
  this.render();
  this.move();
  this.checkedges();
}

render(){
  fill(255,255,0)
  rect(this.loc.x, this.loc.y,20,20)
      }

  move(){
    if(keycode === LEFT_ARROW){
      this.loc.x = this.loc.x-this.s
    }
    if(keycode === RIGHT_ARROW){
      this.loc.x = this.loc.x+this.s
    }
    if(keycode === UP_ARROW){
    this.loc.y === this.loc.y +this.s
    }
    if(keyboard === DOWN_ARROW)
    this.loc.y === this.loc.y - this.s
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
        this.vel.y = -1.01*this.vel.y;

    //lives counter
        }
      }
  }

















  }//end code
