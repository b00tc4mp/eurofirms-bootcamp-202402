function Shape2D(width, height, color) {
  this.width = width;
  this.height = height;
  this.color = color;

  this.x = 0;
  this.y = 0;

  var container = document.createElement('div');

  container.style.position = 'absolute';
  container.style.left = this.x + 'px';
  container.style.top = this.y + 'px';
  container.style.width = this.width + 'px';
  container.style.height = this.height + 'px';
  container.style.backgroundColor = this.color;

  this.container = container;
}

// location

Shape2D.prototype.setX = function (x) {
  this.x = x;

  this.container.style.left = this.x + 'px';
};

Shape2D.prototype.getX = function () {
  return this.x;
};

Shape2D.prototype.setY = function (y) {
  this.y = y;

  this.container.style.top = this.y + 'px';
};

Shape2D.prototype.getY = function () {
  return this.y;
};

Shape2D.prototype.setLocation = function (x, y) {
  this.setX(x);
  this.setY(y);
};

// dimensions

Shape2D.prototype.setWidth = function (width) {
  this.width = width;

  this.container.style.width = this.width + 'px';
};

Shape2D.prototype.getWidth = function () {
  return this.width;
};

Shape2D.prototype.setHeight = function (height) {
  this.height = height;

  this.container.style.height = this.height + 'px';
};

Shape2D.prototype.getHeight = function () {
  return this.height;
};

Shape2D.prototype.setDimensions = function (width, height) {
  this.setWidth(width);
  this.setHeight(height);
};

function Skate(length) {
  Shape2D.call(this, length, 5, 'black');

  var leftWheel = new Shape2D(10, 10, 'black');
  leftWheel.container.style.borderRadius = '50%';
  leftWheel.setX(10);
  leftWheel.setY(7);

  var rightWheel = new Shape2D(10, 10, 'black');
  rightWheel.container.style.borderRadius = '50%';
  rightWheel.setX(this.getWidth() - 20);
  rightWheel.setY(7);

  this.container.appendChild(leftWheel.container);
  this.container.appendChild(rightWheel.container);
}

Skate.prototype = Object.create(Shape2D.prototype);
Skate.prototype.constructor = Skate;

// demo

var skate = new Skate(100);

skate.setLocation(180, 280);

document.body.appendChild(skate.container)