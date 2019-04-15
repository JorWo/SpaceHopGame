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
  this.h = 300;
  this.gravity = 0.5; //The force of gravity
  this.velocity = 0; //Velocity of barrier
  
  this.show = function() {
      meteorSpr.position.x = this.x;
      meteorSpr.position.y = this.y;
      meteorSpr.scale = rand;
    }
    
  this.update = function() {
    this.velocity += this.gravity; //Gravity applied when not jumping
    this.x -= this.velocity;
    this.velocity *= 0.984; //air resistance
    
    if (this.x < -75) { //barrier hits the left side
      this.x = w+75;
      this.y = Math.floor(Math.random()*h);
      rand = random(0.3,2.5);
      this.h = 200*rand;
      scorePts += 1;
      document.getElementById('scoreBox').innerHTML = "Score: " + scorePts;
    }
    
    hitBarrier = collideRectRect(barrier.x-(150*rand),barrier.y,barrier.h*0.9,barrier.h*0.3,jumper.x,jumper.y,jumper.r-30,jumper.r-40);
      
     if (hitBarrier == true) {
       document.getElementById('finalScore').innerHTML = "You scored " + scorePts + " points!";
       button.style.visibility = "visible";
       noLoop();
       var score = 0;
     }
  };
}
