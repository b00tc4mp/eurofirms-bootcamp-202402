const body = new Component();
body.container = document.body;

const wheelRight = new Wheel(90, 90);
wheelRight.setLocation(800, 380);
body.add(wheelRight);

const wheelLeft = new Wheel(90, 90);
wheelLeft.setLocation(580, 380);
body.add(wheelLeft);

const carBody = new CarBody(350, 210, "red");
carBody.setLocation(540, 220);
body.add(carBody);

const carFront = new CarFront(100, 110, "red");
carFront.setLocation(880, 320);
body.add(carFront);

const spareWheel = new SpareWheel(40, 130);
spareWheel.setLocation(500, 260);
body.add(spareWheel);

const car = new Car(380, 210, "purple");
car.setLocation(10, 20);
body.add(car);

const carTwo = new Car(110, 60, "orange");
car.setLocation(10, 100);
body.add(carTwo);
