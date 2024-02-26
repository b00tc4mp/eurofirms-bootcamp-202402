console.log("javascript lesson three or four")
//---if con register---//
    //---validador string---//
function stringValidator(string, stringName){
    if(typeof string !== 'string'){
        console.log(stringName + 'is not string')
        return false
    }
    return true //se valida el string
}

        //---funcion validador registro---//
function registerValidator(email,name,password,age){
        //-----validar mail------//
    var isEmailValidString = stringValidator(email,'email')
    
    if(!isEmailValidString)return false
    
    if (!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email))) {
        console.log('Email format is not valid')
    
        return false
    }
    
    if(email.length <7){
        console.log('email length must be longer')
        return false
    }
       //-----validar name------//
    var isNameValidString = stringValidator(name, 'name')

    if (!isNameValidString) return false

    if (name.length < 2) {
        console.log('name must have at least 2 characters')

        return false
    }
       //-----validar password------//

    var isPasswordValidString = stringValidator(password, 'Password')

    if (!isPasswordValidString) return false

    if (password.length < 7) {
        console.log('password must have at least 7 characters')

        return false
    }
           //-----validar age------//
    if (typeof age !== 'number') {
        console.log('Age must be a number')

        return false
    }

    if (age < 18) {
        console.log('to register your age must be higher or equal that 18')

        return false
    }

    return true //se hace el registro

}