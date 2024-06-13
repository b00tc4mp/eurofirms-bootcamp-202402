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

function printProductTitle(product) {
    console.log(product.brand + ' - ' + product.model + ' (' + product.price + '€ - ' + product.discount + '% = ' + (product.price - product.price * product.discount / 100) + '€)')
}

function printProductTag(tag) {
    console.log('- ' + tag)
}

/*
// declarative
cart.forEach(function(product) {
    printProductTitle(product)

    product.tags.forEach(function(tag) {
        printProductTag(tag)
    })
})
*/


// imperative
for (var i = 0; i < cart.length; i++) {
    var product = cart[i]

    printProductTitle(product)

    for (var j = 0; j < product.tags.length; j++) {
        var tag = product.tags[j]

        printProductTag(tag)
    }
}

// VM414: 22 adidas - cool socks(15€ - 10 % = 13.5€)
// VM414: 26 - socks
// VM414: 26 - clothes
// VM414: 26 - cotton
// VM414: 26 - sport
// VM414: 22 nike - airforce(120€ - 15 % = 102€)
// VM414: 26 - shoes
// VM414: 26 - clothes
// VM414: 26 - leader
// VM414: 26 - casual
// VM414: 22 levis - 501(70€ - 10 % = 63€)
// VM414: 26 - trousers
// VM414: 26 - clothes
// VM414: 26 - cotton
// VM414: 26 - casual
// VM414: 26 - mountain
// VM414: 22 dolce gabanna - cool glasses(270€ - 0 % = 270€)
// VM414: 26 - complement
// VM414: 26 - plastic
// VM414: 26 - sun
// VM414: 22 converse - classic(70€ - 5 % = 66.5€)
// VM414: 26 - shoes
// VM414: 26 - clothes
// VM414: 26 - cotton
// VM414: 26 - casual
// undefined