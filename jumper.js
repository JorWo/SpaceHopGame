var w = window.innerWidth;
var h = window.innerHeight;
var jumper = new jumper();
var jumperImg;

      function jumper() {
        this.x = 50;
        this.y = 0;
        this.r = 75;
        this.gravity = 0.5; //The force of gravity
        this.lift = -14; //Opposing the force of gravity
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
          if (this.y > h+25) { //jumper falls through bottom
            blackholeSound.play();
            noLoop();
       
            if (scorePts == 1) {
              document.getElementById('finalScore').innerHTML = "You scored " + scorePts + " point!";
            }
            else if (scorePts > 1 || scorePts == 0) {
              document.getElementById('finalScore').innerHTML = "You scored " + scorePts + " points!";
            }
       
            document.getElementById('restartButton').style.visibility = "visible";
            var score = 0;
          }
          if (this.y < 0) { //jumper hits the top
            this.y = 0;
            this.velocity = 0;
          }
        }
        
        this.move = function() {
          if (keyIsDown(68) && this.x < w-55) {
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
          jumpSound.play();
        }
        if (keyCode === 82) {
          location.reload();
        }
      }

      function touchStarted() {
         jumper.up();
         jumpSound.play();
      }

      function swiped(event) {
         console.log(event);
         if (event.direction == 16) {
           jumper.y += 5;
         } 
      }
