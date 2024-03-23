
// the function does not work i need to chech it!! more and more.


function removeElements (object, index, count){

    var deletedElements={length:0}

    var objectLength=objectLength

    for(var i = index; i < objectLength; i++){
         if(i>= index && i< index + count) {
             deletedElements[deletedElements.length]= object[i]

             deletedElements.length++
         }
        
    }
}

console.log('case1: remove at index 3, 2 lements from cars')

var cars ={
    0:'puegeot',
    1:'ford',
    2:'renault',
    3:'audi',
    4:'bmw',
    5:'mercedez',
    6:'bentley',
    7:'ferrari',

    length:8
}

var removed= removeElements(cars, 3, 2)

console.log(removed)

/*
{
0:'audi',
1:'bmw',

length:2
}
*/

console.log(cars)
/*
0:'peugeot',
1:'ford',
2:'renault',
3:'mercedez',
4:'bentley',
5:'ferrari'

length:6
*/
console.log('case 2: remove at index 1,3 elements from nums')

var nums={
    0:100,
    1:200,
    2:300,
    3:400,
    4:500,

    length:5
}

var removed= removeElements(nums, 1,3)

console.og(removed)

/*
{
0:200,
1:300,
2:400,

length:3
}
*/

console.log(nums)
/*
{
0:100,
1:500,
length:2
}
*/