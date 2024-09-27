function Window(width, height) {
  Shape2D.call(this, width * 0.35, height * 0.4, 'skyblue');

  var windowBorder = 'solid black ' + (width + height) * 0.02 + 'px';

  this.setStyle('border', windowBorder);
}

Window.prototype = Object.create(Shape2D.prototype);
Window.prototype.constructor = Window;
