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

    if (product.price > 100)
        printWarn(product)
}
*/

// declarative
cart.forEach(function (product) {
    if (product.price > 100)
        printWarn(product)
})




// VM965:10 {brand: 'nike', model: 'airforce', price: 120}
// VM965:10 {brand: 'dolce gabanna', model: 'cool glasses', price: 270}