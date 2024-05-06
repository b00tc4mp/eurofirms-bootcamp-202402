import errors from './errors.js'

const { ContentError, MatchError } = errors

function validateName(name) {
    if(typeof name !== 'string') throw new TypeError('name is not a string')

    if(name.length < 1) 
        throw new RangeError('name is lower than 1 character')

    var nameIsBlank = true 

    for (var i=0; i < name.length && nameIsBlank; i++) {
        var char = name[i]

        if (char !== ' ')
            nameIsBlank = false 
    }

    if (nameIsBlank)
        throw new ContentError('name is blank')

}

function validateEmail(email) {
    if (typeof email !== 'string') throw new TypeError('email is not string')

    if (email.length < 6)
        throw new RangeError('email is lower than 6 characters')

    if (!email.includes('@'))
        throw new ContentError('email has no @')

    if (!email.includes('.'))
        throw new ContentError('email has no .')

    if (email.lastIndexOf('.') < email.indexOf('@'))
        throw new ContentError('email has . before @')

    if (email.lastIndexOf('.') - email.indexOf('@') < 2)
        throw new ContentError('email has . next to @')

    if (email.length - 1 - email.indexOf('.') < 2)
        throw new ContentError('email domain is lower than 2 characters')

    if (email.includes(' '))
        throw new ContentError('email has space character')
}

function validateAddress(address) {
    if (typeof address !== 'string') 
        throw new TypeError('address is not a string')

    if (address.length < 8)
        throw new RangeError('address is lower than 8 characters')

    
}

function validateCountry(country) { 
    if (typeof country === 'string') 
        throw new TypeError('country is not a string')

    if (address.length < 4)
        throw new RangeError('country is lower than 8 characters')

}

function validateId(id) {
    if (typeof id !== 'string')
        throw new TypeError('country is not a string')

    if (id.length < 24 )
        throw new RangeError('id is lower than 24 characters')
}

function validateString(string) {
    if (typeof string !== 'string')
        throw new TypeError('the text is not correct')

    if (string.length < 3 )
        throw new RangeError('the text is too short')
}

function validatePrice(price) {
    if (typeof price !== number ) {
        throw new TypeError('the text is not a number')
    }
    if (price < 40 ){
        throw new RangeError('price is too low')
    }

}

function validateType(type) {
    if (type !== 't-shirt' || type !== 'polo') {
        throw new ContentError('type is not correct')
    }
}

function validateSize(size) {
    if ( size !== 'xs' || size !== 's' || size !== 'm' || size !== 'l' || size !== 'xl' || size !== '2xl' ||  size !== '3xl' )
        throw new ContentError('size is not correct')

}

function validatePaymentMethod(payment) {
    if (payment !== card || payment !== crypto || payment !== paypal)
        throw new ContentError('payment method is not correct')
}

function validateStatus(status){
    if (status !== 'open' || status !== 'closed')
        throw new ContentError('status is not correct')
}



