function removeFirstElement(object) {
    //primer valor del objeto
    var first = object[0];

    for (var i = 1; i <= object.length; i++) {
        //esto recorrera los elementos del objeto
        object[i- 1]= object[i];
    }
    // { 0:'orange', 1: 'tomato', 2: 'apple', 3: 'grapes', 4: 'strawberry', 5: 'pear', 6: 'cherry',7: 'banana' length: 8 }
    // { 0: 'tomato', 1: 'apple', 2: 'grapes', 3: 'strawberry', 4: 'pear', 5: 'cherry', 6: 'banana', length: 8 }
    // { 0: 'tomato', 1: 'apple', 2: 'grapes', 3: 'strawberry', 4: 'pear', 5: 'cherry', 6: 'banana', length: 7 }
    

    delete object[object.length - 1]
        // { 0: 'tomato', 1: 'apple', 2: 'grapes', 3: 'strawberry', 4: 'pear', 5: 'cherry', 6: 'banana', length: 8 }

    object.length--
        // { 0: 'tomato', 1: 'apple', 2: 'grapes', 3: 'strawberry', 4: 'pear', 5: 'cherry', 6: 'banana', length: 7 }
    return first;
}

console.log('CASE 1: remove orange from fruits')

var fruits = {
    0: 'orange',
    1: 'tomate',
    2: 'apple',
    3: 'grapes',
    4: 'strawberry',
    5: 'pear',
    6: 'cherry',
    7: 'banana',

    length: 8
}

var firstFruit = removeFirstElement(fruits)


console.log(fruits)

console.log('CASE 2: remove baby from ages')

var ages = {
    0: 'baby',
    1: 'child',
    2: 'teenager',
    3: 'young',
    4: 'adult',
    5:'old',

    length: 6
}

var firstAge = removeFirstElement(ages)

console.log(firstAge)

console.log(ages)
