// Calvin kapral
//12/3
//Planet class

class Planet{
  constructor(x,y,dx,dy){
    this.loc=createVector(x,y);
    this.vel=createVector(dx, dy);
    this.acc=createVector(0,.1);
  }

  run(){
    this.render();
    this.update();
  }


  render(){
    fill(200,200,0);
    ellipse(this.loc.x, this.loc.y, 20,20);

  }

  update(){

  }


}//
