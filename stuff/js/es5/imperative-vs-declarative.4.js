var cart = [
    { brand: 'adidas', model: 'cool socks', price: 15, discount: 10, tags: ['socks', 'clothes', 'cotton', 'sport'] },
    { brand: 'nike', model: 'airforce', price: 120, discount: 15, tags: ['shoes', 'clothes', 'leader', 'casual'] },
    { brand: 'levis', model: '501', price: 70, discount: 10, tags: ['trousers', 'clothes', 'cotton', 'casual', 'mountain'] },
    { brand: 'dolce gabanna', model: 'cool glasses', discount: 0, price: 270, tags: ['complement', 'plastic', 'sun'] },
    { brand: 'converse', model: 'classic', price: 70, discount: 5, tags: ['shoes', 'clothes', 'cotton', 'casual'] }
]

function printWarn(value) {
    console.warn(value)
}

/*
adidas - cool socks (15€ - 10% = 13.5€)
- socks
- clothes
- cotton
- ...
*/

/*
// declarative
cart.forEach(function(product) {
    console.log(product.brand + ' - ' + product.model + ' (' + product.price + '€ - ' + product.discount + '% = ' + (product.price - product.price * product.discount/100) + '€)')

    product.tags.forEach(function(tag) {
        console.log('- ' + tag)
    })
})
*/

// imperative
for (var i = 0; i < cart.length; i++) {
    var product = cart[i]

    console.log(product.brand + ' - ' + product.model + ' (' + product.price + '€ - ' + product.discount + '% = ' + (product.price - product.price * product.discount / 100) + '€)')

    for (var j = 0; j < product.tags.length; j++) {
        var tag = product.tags[j]

        console.log('- ' + tag)
    }
}

// VM385:36 adidas - cool socks (15€ - 10% = 13.5€)
// VM385:41 - socks
// VM385:41 - clothes
// VM385:41 - cotton
// VM385:41 - sport
// VM385:36 nike - airforce (120€ - 15% = 102€)
// VM385:41 - shoes
// VM385:41 - clothes
// VM385:41 - leader
// VM385:41 - casual
// VM385:36 levis - 501 (70€ - 10% = 63€)
// VM385:41 - trousers
// VM385:41 - clothes
// VM385:41 - cotton
// VM385:41 - casual
// VM385:41 - mountain
// VM385:36 dolce gabanna - cool glasses (270€ - 0% = 270€)
// VM385:41 - complement
// VM385:41 - plastic
// VM385:41 - sun
// VM385:36 converse - classic (70€ - 5% = 66.5€)
// VM385:41 - shoes
// VM385:41 - clothes
// VM385:41 - cotton
// VM385:41 - casual
// undefined