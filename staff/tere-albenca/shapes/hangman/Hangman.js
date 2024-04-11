class Hangman extends Shape2D {
  constructor(width, height) {
    super(width, height, "transparent");

    const gallowBase = new Shape2D(100, 0);
    gallowBase.setStyle("border", "1px solid blue");
    gallowBase.setLocation(this.width - gallowBase.width - 5, this.height);
    this.add(gallowBase);

    const gallowBar1 = new Shape2D(0, 200);
    gallowBar1.setStyle("border", "1px solid red");
    gallowBar1.setLocation(
      this.width - 5 - gallowBase.width / 2,
      this.height - gallowBar1.height
    );
    this.add(gallowBar1);

    const gallowBar2 = new Shape2D(50, 0);
    gallowBar2.setStyle("border", "1px solid green");
    gallowBar2.setLocation(
      this.width - 5 - gallowBase.width / 2 - gallowBar2.width,
      0
    );
    this.add(gallowBar2);

    const gallowBar3 = new Shape2D(0, 50);
    gallowBar3.setStyle("border", "1px solid orange");
    gallowBar3.setLocation(
      this.width - 5 - gallowBase.width / 2 - gallowBar2.width,
      0
    );
    this.add(gallowBar3);

    const head = new Shape2D(20, 20);
    head.setStyle("border", "1px solid brown");
    head.setStyle("borderRadius", "50%");
    head.setLocation(
      this.width - 5 - gallowBase.width / 2 - gallowBar2.width - head.width / 2,
      gallowBar3.height
    );

    const body = new Shape2D(0, 50);
    body.setStyle("border", "1px solid gray");
    //this.add(body)
    body.setLocation(
      this.width - 5 - gallowBase.width / 2 - gallowBar2.width,
      gallowBar3.height + head.height
    );

    const rightArm = new Shape2D(25, 0);
    rightArm.setStyle("border", "1px solid pink");
    rightArm.setLocation(
      this.width - 5 - gallowBase.width / 2 - gallowBar2.width,
      gallowBar3.height + head.height + body.height * 0.25
    );

    const leftArm = new Shape2D(25, 0);
    leftArm.setStyle("border", "1px solid purple");
    leftArm.setLocation(
      this.width - 5 - gallowBase.width / 2 - gallowBar2.width - leftArm.width,
      gallowBar3.height + head.height + body.height * 0.25
    );

    const rightLeg = new Shape2D(0, 25);
    rightLeg.setStyle("border", "1px solid yellowgreen");
    rightLeg.setStyle("transform-origin", "top left");
    rightLeg.setStyle("transform", "rotate(45deg)");
    rightLeg.setLocation(
      this.width - 5 - gallowBase.width / 2 - gallowBar2.width,
      gallowBar3.height + head.height + body.height
    );
    //this.add(rightLeg)

    const leftLeg = new Shape2D(0, 25);
    leftLeg.setStyle("border", "1px solid magenta");
    leftLeg.setStyle("transform-origin", "top left");
    leftLeg.setStyle("transform", "rotate(-45deg)");
    leftLeg.setLocation(
      this.width - 5 - gallowBase.width / 2 - gallowBar2.width,
      gallowBar3.height + head.height + body.height
    );

    this.parts = [head, body, rightArm, leftArm, rightLeg, leftLeg];
  }

  setFails(count) {
    const part = this.parts[count - 1];

    this.add(part);
  }
}
