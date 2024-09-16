class Car extends Shape2D {
  constructor(width, height, color) {
    const wheelSize = (width / 4, height / 3);

    super(width, height + wheelSize / 1);

    const spareWheel = new SpareWheel(width / 9.3, height / 1.7, color);
    spareWheel.setLocation(width / wheelSize, height * 0.2);
    this.add(spareWheel);

    const carBody = new CarBody(width - wheelSize / 2, height, color);
    carBody.setLocation(wheelSize / 1.5, wheelSize - wheelSize);
    this.add(carBody);

    const carFront = new CarFront(width * 0.55, height * 0.52, color);
    carFront.setLocation(width * 0.72, height * 0.48);
    this.add(carFront);

    const wheelRight = new Wheel(wheelSize, wheelSize);
    wheelRight.setLocation(width - wheelSize / 1.5, height - wheelSize / 1.5);
    this.add(wheelRight);

    const wheelLeft = new Wheel(wheelSize, wheelSize);
    wheelLeft.setLocation(width - wheelSize * 4, height - wheelSize / 1.5);
    this.add(wheelLeft);
  }
}
