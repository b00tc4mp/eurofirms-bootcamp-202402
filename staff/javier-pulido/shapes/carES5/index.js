var body = new Component
body.container = document.body

// var wheelRight = new Wheel(90, 90)
// wheelRight.setLocation(430, 380)
// body.add(wheelRight)

// var wheelLeft = new Wheel(90, 90)
// wheelLeft.setLocation(180, 380)
// body.add(wheelLeft)

// var carBody = new CarBody(350, 200, 'red')
// carBody.setLocation(150, 220)
// body.add(carBody)

// var carFront = new CarFront(100, 100, 'red')
// carFront.setLocation(500, 320)
// body.add(carFront)

var car = new Car(100, 100, 'green')
body.add(car)

var car2 = new Car(400, 50, 'blue')
car2.setLocation(300, 0)
body.add(car2)