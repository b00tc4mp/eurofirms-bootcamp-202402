function Car(width, height, color) {
  var wheelSize = (width / 4, height / 3);

  Shape2D.call(this, width, height + wheelSize / 1);
  var spareWheel = new SpareWheel(width / 9.3, height / 1.7, color);
  spareWheel.setLocation(width / wheelSize, height * 0.2);
  this.add(spareWheel);

  var carBody = new CarBody(width - wheelSize / 2, height, color);
  carBody.setLocation(wheelSize / 1.5, wheelSize - wheelSize);
  this.add(carBody);

  var carFront = new CarFront(width * 0.55, height * 0.52, color);
  carFront.setLocation(width * 0.72, height * 0.48);
  this.add(carFront);

  var wheelRight = new Wheel(wheelSize, wheelSize);
  wheelRight.setLocation(width - wheelSize / 1.5, height - wheelSize / 1.5);
  this.add(wheelRight);

  var wheelLeft = new Wheel(wheelSize, wheelSize);
  wheelLeft.setLocation(width - wheelSize * 4, height - wheelSize / 1.5);
  this.add(wheelLeft);
}

Car.prototype = Object.create(Shape2D.prototype);
Car.prototype.constructor = Car;
