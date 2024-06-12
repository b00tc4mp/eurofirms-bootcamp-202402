function everyElement(object, callback) {
    // every es una methodo que exige que toda los elementos complien los requisitos
    // si todo cumplen return TRUE y si hay un minimum un elemento no cumple return FALSE
    var result = true
    for (var i = 0; i < object.length; i++) {
        if (!callback(object[i]))

            result = false
    }
    return result
}

function callback(element, index, object) {
    return element > 20 // la condition que lleva la function
    //Una función de callback es una función que se pasa a otra función como un argumento, 
    //que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción
}

var nums = {
    0: 20,
    1: 30,
    2: 5000,
    3: 50,
    4: 10,

    length: 5
}

console.log('case 1: check if all the elements of nums are greater than 20 -> if should return false since there is a property that isnt greater than 20, nums[0] is iqual to 20 ')

var case1 = everyElement(nums, callback)

console.log(case1)

console.log('CASE 2 : check if all the elements of nums are less than 10000 --> it should return TRUE all the properties are less than 100000')

var case2 = everyElement(nums, function (element) { return element < 10000 })

console.log(case2)

