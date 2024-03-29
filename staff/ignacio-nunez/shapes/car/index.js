const body = new Component
body.container = document.body

const car = new Car(400, 200, 'red')
car.setLocation(300, 200)

body.add(car)
