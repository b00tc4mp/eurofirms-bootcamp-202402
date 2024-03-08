var people = {
    0: { name: 'Salva', lastname: 'Tortajada', city: 'Manises' },
    1: { name: 'Javi', lastname: 'Gallego', city: 'Manises' },
    2: { name: 'Maite', lastname: 'Albenca', city: 'Manises' },
    3: { name: 'Majose', lastname: 'Albenca', city: 'Manises' }
};

/**
 * 
 * @param {*} callback 
 * @returns 
 */
function map(callback){
    var result = {}
    var keys = object[i]

    for (var i = 0; i <keys. length;i++){
        var key = keys[i]
        var element = people[key]
        result.push (callback ( element))
    }
    return result

}
var onlyNames = function (people){
    return people.name + people.lastname
}
/**
 * map with numbers
 */
console.log('CASE 1: multiply numbers * 2')
function map(iterable, callback){
    var mapped = {length:0}
    for(var i =0; i< iterable.length;i++){
        var element =iterable[i]
        var mappedElement =callback(element)
        mapped[mapped.length] = mappedElement
        mapped.length++
    }
    return mapped
}
var nums = {
    0:1,
    1: 4,
    2:9,
    3: 16,
    length:4
}

var numsx2 = map(nums, function (x){return x *2})
console.log(nums)
console.log(numsx2)

/**
 * map with characters
 */
console.log('CASE 2: Convert names to uppercase')
var names ={
    0:'mary',
    1:'Estela',
    2:'Amanda',
    length:3
}
var namesInUppercase = map(names,function(name){
    return name.toUpperCase()
})
console.log(names)
console.log(namesInUppercase)
/**
 * precios de la compra
 */

console.log('CASE 3: Extract prices from cart')
var cart = {
    0:{ what: 'carrots, price : 1, quantity:5'},
    1:{ what: 'whine, price : 20, quantity:3'},
    2:{ what: 'fish, price : 6, quantity:7'},
    3:{ what: 'cabbage, price : 4, quantity:4'},
    length:4
}
var prices = map(cart, function(item){
    return item.price * item.quantity
})
console.log(prices)