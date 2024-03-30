class CarBody extends Shape2D {
  constructor(width, height, color) {
    super(width, height, color);

    const windowRight = new Window(width, height);

    windowRight.setLocation(
      this.width - windowRight.width / 0.92,
      this.height - windowRight.width / 0.63
    );
    windowRight.setStyle("borderTopRightRadius", "45%");

    this.add(windowRight);

    const windowLeft = new Window(width, height);

    windowLeft.setLocation(
      this.width - windowRight.width - windowLeft.width / 0.8,
      this.height - windowRight.width / 0.63
    );
    this.add(windowLeft);

    this.setStyle("borderRadius", "10% 20% 0 10%");
    this.setStyle("zIndex", 1);
  }
}
