var people =[

]
people[0] ={
    name:'pepito',
    age:20
}
people[1]={
    name:'campa',
    age:19
}
var pepito = people[0]
var campa =people[1]

console.log(people[0]['age'])
console.log(people[0].age)
console.log(pepito['age'])
console.log(pepito.age)

// 20
// 20
// 20
// 20

var cars = []

cars["0"] = "aston martin"
cars["1"] = "mitsubishi lancer evoluton 0"
cars["2"] = "renault clio 2004"
cars["3"] = "ford fiesta 2005"
cars["4"] = "land rover"

for (var j = 0; j < cars.length; j++) {
    var car = cars[j]

    console.log(car)
}

//aston martin
//mitsubishi lancer evoluton 0
//renault clio 2004
//ford fiesta 2005
//land rover


var fruits = {
    1: 'apple',
    2: 'lemon',
    3: 'watermelon',
    4: 'banana',
    5: 'pinneapple',
    count: 5
}

for (var index = 1; index <= fruits.count; index = index + 1) {
    var fruit = fruits[index]

    console.log(fruit)
}

function removeLastElement(object){
    delete object[object.length -1];
}
removeFirstElement(fruits)
console.log(fruits)
