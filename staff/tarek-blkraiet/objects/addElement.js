
function addElement(object, element){
    object[object.length]= element // add the new propierty
    object.length++ // modify the length
}
console.log('case1:add a to chars')

var chars= {
    0:'h',
    1:'o',
    2:'l',
    length:3
}
addElement(chars,'a')

console.log(chars)

//{ 0;'h', 1:'o',2:'l',3:'a', length:4}

console.log('case2: add 500 to nums')

 var nums={
    0:100,
    1:200,
    2:300,
    3:400,

    length:4
 }
addElement(nums,500)
console.log(nums)
//{ 0:100,1:200,2:300,3:400,4:500, length:5}

console.log('case3 add ferrari to cars')
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
addElement(cars, 'ferrari')
console.log(cars)
/*
0:'peugeot',
1:'ford',
2:'renault',
3:'audi',
4:'bmw',
5:'mercedez',
6:'bently',
7:'ferrari',

length:8
*/