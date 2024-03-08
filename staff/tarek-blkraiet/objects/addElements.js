
function removeElements(object, index, count){}
console.log('CASE 1: remove at index 3, 2 elments from cars')

var cars = {0:'peugeot',1:'ford',2:'renault',3:'audi',4:'bmw',5:'mercedez',6:'bentley',7:'ferrari',
    length: 8
}

var removed = removeElements(cars, 3, 2)

console.log('CASE 2: remove at index 1, 3 elements from nums')

var nums = {
    0: 100,
    1: 200,
    2: 300,
    3: 400,
    4: 500,
    length: 5
}

var removed = removeElements(nums, 1, 3)

console.log(removed)