var w = window.innerWidth;
var h = window.innerHeight;
var jumper = new jumper();
var jumperImg;

      function jumper() {
        this.x = 50;
        this.y = 0;
        this.r = 75;
        this.gravity = 0.5; //The force of gravity
        this.lift = -10; //Opposing the force of gravity
        this.velocity = 0; //Velocity of player
        
        this.show = function() {
          image(jumperImg, this.x, this.y, this.r, this.r);
        }
        
        this.up = function() {
          this.velocity += this.lift; //Jumping function
        }
        
        this.update = function() {
          this.velocity += this.gravity; //Gravity applied when not jumping
          this.y += this.velocity;
          this.velocity *= 0.98; //air resistance
          if (this.y > h) { //jumper hits the floor
            this.y = h;
            this.velocity = 0;
          }
          if (this.y < 0) {
            this.y = 0;
            this.velocity = 0;
          }
        }
        
        this.move = function() {
          if (keyIsDown(68) && this.x < w-80) {
          this.x += 5;
          }
          if (keyIsDown(65) && this.x > 0) {
          this.x -= 5;
          }
          if (keyIsDown(83)) {
            this.y += 5;
          }
        };
      } //Jumper object ends here
      
      function keyPressed() {
        if (keyCode === 32) {
          jumper.up();
        }
      }
