class Window extends Shape2D {
  constructor(width, height) {
    super(width * 0.35, height * 0.35, "skyblue");

    const windowBorder = "solid black " + (width + height) * 0.01 + "px";

    this.setStyle("border", windowBorder);
    this.setStyle("zIndex", 3);
  }
}
