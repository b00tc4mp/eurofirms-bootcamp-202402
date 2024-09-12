var numbers = {
    0: 1,
    1: 2,
    2: 3,
    3: 4,
    4: 5,
    5: 6,

    length: 6

}// creo la funcion que sera el callback

function sum (acumulator, element) {
    return acumulator + element
}

// 

function reduce (object, callback,acumulator=0) {
   var result = 0
    for( var i =0; i<object.length;i++){
        result += callback(acumulator,object[i])



    }
    console.log(result)
}

reduce (numbers, sum)


