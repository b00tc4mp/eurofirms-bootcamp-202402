function Wheel(width, height) {
  Shape2D.call(this, width, height, "gray");

  this.setStyle("borderRadius", "50%");

  var wheel = "solid black " + (width + height) * 0.15 + "px";

  this.setStyle("border", wheel);
  this.setStyle("zIndex", 2);
}

Wheel.prototype = Object.create(Shape2D.prototype);
Wheel.prototype.constructor = Wheel;
