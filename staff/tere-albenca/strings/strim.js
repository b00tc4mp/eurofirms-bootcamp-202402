function trim(string){
    var result=''
    var final=''
    charactereString !== ' '
    for (var i = 0; i< string.length; i++){
        if(string[i] = charactereString || result.length > 0)//tb funcionaria con result porque cumplido ya sería verdadero
            result += string[i]
    }
    for(var i = result.length -1; i >0; i--){
        final +=result[i]
    }
    return final
}

console.log('FUNCTION TRIM')
console.log('CASE 1:Delete the firts empty characters')
console.log(final)
console.log('CASE 2:Delete the ends empty characters')