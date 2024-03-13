/**
 * Maps each element from iterable object to another iterable object.
 * 
 * @param {*} iterable 
 * @param {*} callback 
 * 
 */


function map(iterable, callback) {
    var mapped =  {length: 0}


    for (var i = 0; i < iterable.length; i++) {
        var element = iterable[i]

        var mappedElement = callback(element)

        mapped[mapped.length] = mappedElement
        mapped.length++
    }


    return mapped
}

console.log('TEST map')

console.log('CASE 1: multiply numbers by 2')

var nums = {
    0: 1,
    1: 4,
    2: 9,
    3: 16,
    length: 4
}

var numsX2 = map(nums, function (n) { return n * 2})

console.log(numsX2);
/*
{

    0: 2,
    1: 8,
    2: 18,
    3: 32,
    length: 4
}
*/

console.log ('CASE 2: map lower case to upper case')

var names = {
    0: 'Mary',
    1: 'Stella',
    2: 'Amanda',
    length: 3
}

var namesInUppercase = map(names, function (name) {
    return name.toUpperCase()
    
})

console.log(namesInUppercase)


/*
{
    0: 'MARY',
    1: 'STELLA',
    2: 'AMANDA,
    length: 3
}

*/ 
console.log('CASE 3: extract prices from cart')

var cart = {
    0: { what: 'carrots', price: 1, quantity: 5 },
    1: { what: 'potatoes', price: .5, quantity: 10 },
    2: { what: 'cabbage', price : 5, quantity: 2 },
    3: { what: 'rioja top', price: 40, quantity: 3},
    length: 4
}

var prices = map(cart, function (item) {
    return item.price * item.quantity
})

console.log(prices)
/*
{
    0: 5,
    1: 5,
    2: 10,
    3: 120,
    length: 4
}
*/