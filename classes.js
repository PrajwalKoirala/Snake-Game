var vel=30;
var fr=0;
var gameover;
class boundary{
  show(){
    fill(10);
    rect(0,0,10,height);
    rect(0,0,width,10);
    rect(width-10,0,10,height);
    rect(0,height-10,width,10);
  }
}

class snake{
  constructor(x,y){
    this.x=floor(x/vel)*vel;
    this.y=floor(y/vel)*vel;
    //this.lastmotion=null;
  }
  show(){
    strokeWeight(2);
    fill(100,50,100);
    rect(this.x,this.y,30,30)
  }
  move(key){
    if((key==UP_ARROW||this.lastmotion==UP_ARROW)&&this.lastmotion!=DOWN_ARROW){
      this.y-=vel;
      this.lastmotion=UP_ARROW;
    }
    if((key==DOWN_ARROW||this.lastmotion==DOWN_ARROW)&&this.lastmotion!=UP_ARROW){
      this.y+=vel;
      this.lastmotion=DOWN_ARROW;
    }
    if((key==LEFT_ARROW||this.lastmotion==LEFT_ARROW)&&this.lastmotion!=RIGHT_ARROW){
      this.x-=vel;
      this.lastmotion=LEFT_ARROW;
    }
    if((key==RIGHT_ARROW||this.lastmotion==RIGHT_ARROW)&&this.lastmotion!=LEFT_ARROW){
      this.x+=vel;
      this.lastmotion=RIGHT_ARROW;
    }

  }
  touchboundary(){
    if(this.x<10||this.x>(width-40)||this.y<10||this.y>(height-40)){
      return true;
    }
  }
  destroy(){
    background(100,0,0);
    textSize(100);
    fill(255);
    text("GAME OVER",100,100);
    gameover=true;
    text(("SCORE = "+score),100,300);

  }
/*  touchfood(){
    if(this.lastmotion==RIGHT_ARROW&&(this.x+15)==fd.x&&abs(this.y-fd.y)<14){
      return true;
    }
    else if(this.lastmotion==LEFT_ARROW&&(this.x-15)==fd.x&&abs(this.y-fd.y)<14){
      return true;
    }
    else if(this.lastmotion==UP_ARROW&&(this.y-15)==fd.x&&abs(this.x-fd.x)<14){
      return true;
    }
    else if(this.lastmotion==DOWN_ARROW&&(this.x+15)==fd.x&&abs(this.x-fd.x)<14){
      return true;
    }
    else{
      return false;
    }
  } */
  touchfood(){
    if(abs(this.x-fd.x)<28 && abs(this.y-fd.y)<28){
      return true;
    }
    else{
      return false;
    }
  }

}

class food{
  constructor(){
    this.x=floor(random(10,width-40)/vel)*vel;
    this.y=floor(random(10,height-40)/vel)*vel;
  }
  show(){
    fill(255);
    rect(this.x,this.y,30,30)
  }
  destroy(){
    this.x=floor(random(10,width-40)/vel)*vel;
    this.y=floor(random(10,height-40)/vel)*vel;
    grow();
    fr+=0.5;
    score+=1;
  }
}
