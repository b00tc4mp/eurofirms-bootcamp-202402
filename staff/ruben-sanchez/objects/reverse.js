var vegetables = {
    0: 'onion',
    1: 'carrot',
    2: 'lettuce',
    3: 'spinach',
    4: 'kale',
    5: 'broccoli',
    6:  'brussel sprouts',

    length: 7
    
}

function reverse(object){
    var iterations = Math.floor(object.length / 2)

    for (var i = 0; i < iterations; i++){
        var element = object[i]
        
        object[i] = object[object.length-1-i]

        object[object.length -1 -i] = element
        


    }
    

    return object
} 


console.log('Function reverse ')

console.log('CASE 1: reverse the vegetables object')

console.log(result)
console.log(series)