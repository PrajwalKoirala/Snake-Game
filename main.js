s=[];
var score=0;
var gameover;
function setup(){
  createCanvas(1000,1000);
  bound=new boundary;
  s[0]=new snake(random(20,width-55),random(20,height-55));
  fd=new food();
/*  var config = {
    apiKey: "AIzaSyBBIrfwstHvzxtjY24btNqAyGB5en6XB9I",
    authDomain: "ysnak3.firebaseapp.com",
    databaseURL: "https://ysnak3.firebaseio.com",
    projectId: "ysnak3",
    storageBucket: "ysnak3.appspot.com",
    messagingSenderId: "42582835603"
  };
  firebase.initializeApp(config); */
}

function draw(){
  frameRate(3+fr);
  background(250,250,10);
  fill(0);
  textSize(15);
  text(("SCORE = "+score),900,30);
  fd.show();
  bound.show();
  for(each of s){
    each.show();
  }

  for(let i=s.length-1;i>0;i--){

    /*if(s[i].lastmotion==UP_ARROW){
      s[i].y-=vel;
      s[i].x=s[i-1].x;
    }
    if(s[i].lastmotion==DOWN_ARROW){
      s[i].y+=vel;
      s[i].x=s[i-1].x;
    }
    if(s[i].lastmotion==LEFT_ARROW){
      s[i].x-=vel;
      s[i].y=s[i-1].y;
    }
    if(s[i].lastmotion==RIGHT_ARROW){
      s[i].x+=vel;
      s[i].y=s[i-1].y;
    }
    s[i].lastmotion=s[i-1].lastmotion;
*/
    s[i].x=s[i-1].x;
    s[i].y=s[i-1].y;
  }

  if(!gameover){
    s[0].move(keyCode);
  }
  if(s[0].touchboundary()||touchitself()){
    s[0].destroy();
  }
  if(s[0].touchfood()){
    fd.destroy();
  }

}

function grow(){
  if(s[0].lastmotion==UP_ARROW){
    s.splice(0,0,new snake(s[0].x,s[0].y-35))
  }
  if(s[0].lastmotion==DOWN_ARROW){
    s.splice(0,0,new snake(s[0].x,s[0].y+30))
  }
  if(s[0].lastmotion==LEFT_ARROW){
    s.splice(0,0,new snake(s[0].x-30,s[0].y))
  }
  if(s[0].lastmotion==RIGHT_ARROW){
    s.splice(0,0,new snake(s[0].x+30,s[0].y))
  }
}
function touchitself(){
  boolean=false;
  for(i=1;i<s.length;i++){
    if(abs(s[0].x-s[i].x)<25 && abs(s[0].y-s[i].y)<25){
      boolean=true;
      break;
    }
  }
  return boolean;
}
