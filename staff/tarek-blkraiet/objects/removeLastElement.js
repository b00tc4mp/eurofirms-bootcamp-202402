function removeLastElement(object){
    object.length--
    var element = object[object.length]

    delete object[object.length]

    return element

}

console.log('case1:remove l to chars')

var chars= {
    0:'h',
    1:'o',
    2:'l',
    length:3
}
var lastChars=removeLastElement(chars)
console.log(lastChars)
// 'l'

console.log(chars)

//{ 0;'h', 1:'o',2:, length:3}

console.log('case2: remove 400 to nums')

 var nums={
    0:100,
    1:200,
    2:300,
    3:400,

    length:4
 }
var lastNums= removeLastElement(nums)
console.log(lastNums)
// 400
console.log(nums)
//{ 0:100,1:200,2:300, length:3}

console.log('case3 remove bently to cars')
var cars={
    0:'peugeot',
    1:'ford',
    2:'renault',
    3:'audi',
    4:'bmw',
    5:'mercedez',
    6:'bently',

    length:7
}
var lastCars = removeLastElement(cars)
console.log(lastCars)
// bently
console.log(cars)
/*
0:'peugeot',
1:'ford',
2:'renault',
3:'audi',
4:'bmw',
5:'mercedez',
6:'bently',

length:7
*/