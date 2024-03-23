
//to ask in class

function insertElement(object, index){
    for( var i= object.length; i>index; i--) {
        
        object[i]=object[i-1]
        
    }
}
console.log('case1: inserts citroen in cars  at index 3')

var cars = {
    0:'peugeot',
    1:'ford',
    2:'renault',
    3:'audi',
    4:'bmw',
    5:'mercedez',
    6:'bentley',
    7:'ferrari',

    length:8 
}
insertElement(cars, 3,'citroen')
console.log(cars)
/*

    0:'peugeot',
    1:'ford',
    2:'renault',
    3:citroen
    4:'audi',
    5:'bmw',
    6:'mercedez',
    7:'bentley',
    8:'ferrari',

    length:8 
*/
console.log('case2: add 250 in nums at index 2')
var nums ={
    0:100,
    1:200,
    2:300,
    3:400,
    4:500,

    length:5
}
insertElement(nums, 2, 250)

console.log(nums)
/*

    0:100,
    1:200,
    2:250
    3:300,
    4:400,
    5:500,

    length:6
*/