// The includes() method compares searchElement to elements of the array using the SameValueZero algorithm. Values of zero are all considered to be equal, regardless of sign. (That is, -0 is equal to 0), but false is not considered to be the same as 0. NaN can be correctly searched for.

// When used on sparse arrays, the includes() method iterates empty slots as if they have the value undefined.

// The includes() method is generic. It only expects the this value to have a length property and integer-keyed properties.

function include(object, value) {
    verified = true;

    for (let i = 0; i < object.length; i++) {
        if (object[i] === value) {
            verified = true
        } else {
            verified = false

        }

    }
    return verified;


}



var cars = {
    0: 'peugeot',
    1: 'ford',
    2: 'renault',
    3: 'audi',
    4: 'bmw',
    5: 'mercedez',
    6: 'bentley',
    7: 'ferrari',

    length: 8
}