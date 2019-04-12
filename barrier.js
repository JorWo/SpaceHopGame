var w = window.innerWidth;
var h = window.innerHeight;
var barrier = new barrier();
var score;
var meteorImg;
var meteorSpr;

function barrier() {
  this.x = w;
  this.y = Math.floor(Math.random()*h);
  this.w = 50;
  this.randH = Math.floor(Math.random()*280) + 50;
  this.gravity = 0.5; //The force of gravity
  this.velocity = 0; //Velocity of barrier
  
  this.show = function() {
    meteorSpr = createSprite(this.x, this.y,
    random(100, 500), random(100, 500));
    }
    
  this.update = function() {
    this.velocity += this.gravity; //Gravity applied when not jumping
    this.x -= this.velocity;
    this.velocity *= 0.984; //air resistance
    
    if (this.x < -75) { //barrier hits the left side
      this.x = w;
      this.y = Math.floor(Math.random()*h);
      this.randH = Math.floor(Math.random()*280) + 50;
      score++;
      
      document.getElementById('scoreBox').innerHTML = "Score: " + score;
      
    }
  };
}
