class Box extends BaseClass {
    constructor(x, y){
      super(x,y,50,50);
      this.Visiblity = 255;
      
    }
  display(){
    console.log(this.body.speed);
    if(this.body.speed<3){
    super.display();
  }
  else{
    World.remove(world,this.body);
    push();
    this.Visiblity = this.Visiblity-5;
    tint(255,this.Visiblity);
    pop();
  }
  }
  score(){
    if(this.Visiblity<0 && this.Visiblity>-1005){
      score++;
    }
  }
  };