class CarFront extends Shape2D {
  constructor(width, heigth, color) {
    super(width, heigth, color);

    this.setStyle("borderRadius", "0 50px 10px 0");
    //to do (medidas relativas en el border radius)
  }
}
