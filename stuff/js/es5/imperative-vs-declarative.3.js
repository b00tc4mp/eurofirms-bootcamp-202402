var cart = [
    { brand: 'adidas', model: 'cool socks', price: 15 },
    { brand: 'nike', model: 'airforce', price: 120 },
    { brand: 'levis', model: '501', price: 70 },
    { brand: 'dolce gabanna', model: 'cool glasses', price: 270 },
    { brand: 'converse', model: 'classic', price: 70 }
]

function printWarn(value) {
    console.warn(value)
}

/*
// imperative
for (var i = 0; i < cart.length; i++) {
    var product = cart[i]

    if (product.price > 100) {
        printWarn(product)
        
        break
    }
}
*/

/*
// ERROR! here this for-loop wouldn't work, because it wouldn't stop (it would loop until the end of the array)
// declarative
cart.forEach(function(product) {
    if (product.price > 100) {
        printWarn(product)

        break
    }
})
*/

// this would work
var product = cart.find(function (product) {
    return product.price > 100
})

printWarn(product)
// {brand: 'nike', model: 'airforce', price: 120}













