function Car(brand, model, year, color) {
    this.brand = brand
    this.model = model
    this.year = year
    this.color = color

    this.motor = 'stopped'
    this.status = 'new'
}

Car.prototype.start = function () {
    this.motor = 'started'
}

Car.prototype.stop = function () {
    this.motor = 'stopped'
}

Car.prototype.collideWith = function (car) {
    this.status = 'crashed'

    car.status = 'crashed'
}

var ferrari = new Car('Ferrari', 'F350', 2010, 'red')
var lambo = new Car('Lamborghini', 'Aventador', 2010, 'orange')
var delorean = new Car('DeLorean', 'DMC 12', 1980, 'plate')

ferrari.start()

console.log(ferrari, lambo, delorean)

ferrari.stop()

console.log(ferrari, lambo, delorean)

console.log('ferrari status', ferrari.status, 'delorean status', delorean.status)

ferrari.collideWith(delorean)

console.log('ferrari status', ferrari.status, 'delorean status', delorean.status)

console.log(ferrari, lambo, delorean)
// VM1158:31 Car {brand: 'Ferrari', model: 'F350', year: 2010, color: 'red', motor: 'started', …} Car {brand: 'Lamborghini', model: 'Aventador', year: 2010, color: 'orange', motor: 'stopped', …} Car {brand: 'DeLorean', model: 'DMC 12', year: 1980, color: 'plate', motor: 'stopped', …}
// VM1158:35 Car {brand: 'Ferrari', model: 'F350', year: 2010, color: 'red', motor: 'stopped', …} Car {brand: 'Lamborghini', model: 'Aventador', year: 2010, color: 'orange', motor: 'stopped', …} Car {brand: 'DeLorean', model: 'DMC 12', year: 1980, color: 'plate', motor: 'stopped', …}
// VM1158:37 ferrari status new delorean status new
// VM1158:41 ferrari status crashed delorean status crashed
// VM1158:43 Car {brand: 'Ferrari', model: 'F350', year: 2010, color: 'red', motor: 'stopped', …} Car {brand: 'Lamborghini', model: 'Aventador', year: 2010, color: 'orange', motor: 'stopped', …} Car {brand: 'DeLorean', model: 'DMC 12', year: 1980, color: 'plate', motor: 'stopped', …}