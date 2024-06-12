//TODO
function addElements(object) {

    // #1 { 0: 'peugeot', 1: 'ford', 2: 'renault', 3: 'audi, 4:'bmw', 5:'mercedez', length :6 }
    // object -> #1
    // arguments -> { 0: '#1', 1: 'ford', 2: 'renault', 3: 'audi, 4:'bmw', 5:'mercedez', length :6 }


    for (var i = 1; i < arguments.length; i++) {
        //para que serve el arguments
        var elem = arguments[i]

        object[object.length] = elem

        object.length++

    }
    // #1 { 0: 'peugeot', 1: 'ford', 2: 'renault', 3: 'audi, 4:'bmw', 5:'mercedez', 6:'bentley', length: 6 }
    // #1 { 0: 'peugeot', 1: 'ford', 2: 'renault', 3: 'audi, 4:'bmw', 5:'mercedez', 6:'bentley', length: 7 }
    // #1 { 0: 'peugeot', 1: 'ford', 2: 'renault', 3: 'audi, 4:'bmw', 5:'mercedez', 6:'bentley', 7:'ferrari' length: 7 }
    // #1 { 0: 'peugeot', 1: 'ford', 2: 'renault', 3: 'audi, 4:'bmw', 5:'mercedez', 6:'bentley', 7:'ferrari' length: 8 }

}
console.log('CASE 1: add "bentley", "ferrari" to cars')

var cars = {
    0: 'peugeot',
    1: 'ford',
    2: 'renault',
    3: 'audi',
    4: 'bmw',
    5: 'mercedez',

    length: 6
}
addElements(cars, "bentley", "ferrari")

console.log(cars)



console.log('CASE 2: add 600,700 1 to nums')

var nums = {
    0: 100,
    1: 200,
    2: 300,
    3: 400,
    4: 500,
    length: 5
}

addElements(nums, 600, 700)

console.log(nums)