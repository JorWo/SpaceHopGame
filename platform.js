var w = window.innerWidth;
var h = window.innerHeight;
var platform = new platform();

function platform() {
  this.w = 100;
  this.h = 100;
  this.x = w/2-(this.w/2);
  this.y = h/2-(this.h/2);
  
  
  this.show = function() {
    fill(color('lime'));
    rect(this.x,this.y,this.w,this.h,10,10);
  }
}