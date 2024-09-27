// var cities ={

// }

var nums = {
    0: 1,
    1: -20,
    2: 434,
    3: -4,
    4: 11111111,
    5: 1231231254,
    6: 999,
    length: 7
}
function filtered(object,callback){
    var result = {length:0}
    for (var i = 0; i < object.length; i++) {
        if(callback(object[i])){
            result[result.length++]= object[i]
        }

    }
    return result
}


var filterCallback = filtered(nums, function (element){
    return element > 9 || element < -9  
})

console.log('case 1: filtrar los numeros que tengan dos digitos')
//4: 1111111,5: 1231231254
console.log(filterCallback)

console.log('case 2 : filtrar los numeros que contengan 2')