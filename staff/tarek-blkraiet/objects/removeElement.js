/*
RemovE element specified by index from interable object and returs it
*/

// la function not work i need to debugg

function removeElemnt( object, index) {
    
    var deletedElement =object[index]

    for(var i= index; i< object.length -1; i++) {
        object[i]= object[i+1]
    }
    object.length--

    delete object[object.length]

    return deletedElement
}



console.log('case1:remove renault in index 2 from cars')

var cars = {

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

var car = removeElement(cars,'2')

console.log(car)
//'renault'

console.log(cars)
/*
{
0:'peugeot',
1:'ford',
2:'audi',
3:'bmw',
4:'mercedez',
5:'bentley',
6:'ferrari'

length:7
}
*/
console.log('case2: remove 400 from nums')

var nums = {
    0:100,
    1:200,
    2:300,
    3:400,
    4:500,

    length:5
}

var num=removeElement(nums,3)

console.log(num)

// 400

console.log(nums)
/*
{
0:100,
1:200,
2:300,
3:500,

length:4
}
*/