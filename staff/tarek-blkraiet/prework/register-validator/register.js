function stringValidator(string, stringName){
    if(typeof string!== 'string') {
        console.log(stringName + 'is not a string')
        return false
    }
}

function register(email, name, password, age) {
    var isEmailValidString = stringValidator(email,'Email')
    
    if(!isEmailValidString)  return false
    
    if(email.length < 7){
        console.log('email length must be longer than 7')

        return false
    }
    if(typeof name!=='string'){ //!== es distinto
        console.log('andica su name')
        return false 
    }
    if(name.lenght){
        console.log()
    }
    if (typeof password !=='string' && password.length <=8){
        console.log('andica su password')
        return false
    }
    if(password.lenght){
        console.log('')
    }
    if(age => 18){
        console.log('andica su age')
        return false
    }
    if(age.lenght){
        console.log('')
    }
     return true
}