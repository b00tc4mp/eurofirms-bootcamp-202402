class SpareWheel extends Shape2D {
  constructor(width, height) {
    super(width, height, "black");

    const spareWheel = width + height;

    this.setStyle("border", spareWheel);
    this.setStyle("zIndex", 0);
  }
}
