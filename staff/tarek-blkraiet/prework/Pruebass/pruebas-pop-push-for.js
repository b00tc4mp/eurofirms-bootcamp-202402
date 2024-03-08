var numbers= {
    '0': 20,
    '1': 30,
    '2': 40,
    '3': 40,
    length:4
}

function push(object, element) {
    // code that adds a new element
    var newIndex=object[length]
    object[newIndex]=element

    //code that modify the length
    object.length++

    // code that return a value 
    return object.length
}


function pop(object) {
    var lastIndex = object.length -1
    var deletedElement = object[lastIndex]

    //code that remove the last element
    delete object[lastIndex]
    object.length--
    return deletedElement
}


for(var i=0; i< number.count ; i++ ) {
var number= numbers[i]

console.log(number)

}


//multipplicar

x=5
y=5

function numbersOfCarsEnStock( x,y) {
return x*y;
console.log(x*y)
}
// sumar 
x=5
y=5

function numbersOfCarsEnStock( x,y) {
return x-y;
console.log(x-y)
}
// restar 
x=5
y=5

function numbersOfCarsEnStock( x,y) {
return x-y;
console.log(x-y)

}
function shift(object){
    var value = object[0]
    delete object(0);
    object.lenght--
    return value
}

function pop(object){
    var value= object[0]
    delete object(0);
    object.length++
    return value
}




