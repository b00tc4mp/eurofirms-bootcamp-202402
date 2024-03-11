function split (string, separator ){
   var result = []
   var acumulatedString = ''
   
    for (var i = 0; i < string.length; i++){
        if (string[i] === separator){
            result[result.length] = acumulatedString

            acumulatedString = ''
        }
        
        else acumulatedString += string[i]
    }

    
    return result
}



console.log('FUNCTION SPLIT')

console.log('CASE 1: takes a pattern of sentence with the empty characters "Hello World, I am Learning JavaScript"')

var string = 'Hello World, I am Learning JavaScript.'

var result = split(string,' ')
console.log({ expected:[ 'Hello', 'World,', 'I', 'am', 'Learning', 'JavaScript.'], received : result} )