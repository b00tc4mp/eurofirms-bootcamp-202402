console.log('FUNCTION ENDSWITH')
console.log('CASE 1: endsWith in string fruits')

function endsWith(string, endPosition) {
    var result = ''
    
    if(typeof endPosition === 'undefined'||endPosition > string.length){
        endPosition = string.length
    }

    for (var i = endPosition-1; i >= 0; i--) {
            if (string[i] !== ' '){
                result = string[i] +result
            }
                
            else {
                break
            }  
        }
        return result
    }

var string = 'Tomate, Banana, strawberry, potato, bread, milk, Water, pepper'
var endsFruits = endsWith(string)

console.log(string)
console.log(endsFruits)
