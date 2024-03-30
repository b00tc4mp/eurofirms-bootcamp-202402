function SpareWheel(width, height) {
  Shape2D.call(this, width, height, "black");

  var spareWheel = width + height;

  this.setStyle("border", spareWheel);
  this.setStyle("zIndex", 0);
}

SpareWheel.prototype = Object.create(Shape2D.prototype);
SpareWheel.prototype.constructor = SpareWheel;
