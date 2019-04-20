var w = window.innerWidth;
var h = window.innerHeight;
var barrier = new barrier();
var scorePts = 0;
var meteorImg;
var meteorSpr;
var rand;

function setup() {
  meteorSpr.addAnimation("default", meteorImg); 
  meteorSpr = createSprite(this.x, this.y, this.randH, this.randH);
}

function barrier() {
  this.x = w;
  this.y = Math.floor(Math.random()*h);
  this.w = 50;
  this.h = 250;
  this.gravity = 0.5; //The force of gravity
  this.velocity = 0; //Velocity of barrier
  rand = 1;
  
  this.show = function() {
      meteorSpr.position.x = this.x;
      meteorSpr.position.y = this.y;
      meteorSpr.scale = rand;
    }
    
  this.update = function() {
    hitBarrier = collideRectRect(this.x-(140*rand),this.y,this.h*0.9,this.h*0.4,jumper.x,jumper.y,jumper.r-30,jumper.r);
    this.velocity += this.gravity; //Gravity applied when not jumping
    this.x -= this.velocity;
    this.velocity *= 0.985; //air resistance
    
    if (hitBarrier == true) {
      exploadSound.play();
      noLoop();
       
      if (scorePts == 1) {
        document.getElementById('finalScore').innerHTML = "You scored " + scorePts + " point!";
      }
      else if (scorePts > 1  || scorePts == 0) {
        document.getElementById('finalScore').innerHTML = "You scored " + scorePts + " points!";
      }
       
      document.getElementById('restartButton').style.visibility = "visible";
      var score = 0;
    }
    
    if (this.x < -75) { //barrier hits the left side
      this.x = w+75;
      this.y = Math.floor(Math.random()*h);
      rand = random(0.3,2.5);
      this.h = 200*rand;
      meteorWhoosh.play();
      scorePts += 1;
      document.getElementById('scoreBox').innerHTML = "Score: " + scorePts;
    }
  };
}
