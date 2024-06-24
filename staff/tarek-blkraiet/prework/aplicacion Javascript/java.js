function salute(name, surname){
    console.log('Hello ' + name +surname)
}
salute('pepito Grillo')
// Hello pepito Grillo
function sum(a, b){
    return a + b

}
var result =sum(10, 20) //30
var result2 = sum(40,50) //90



function Push(array, value){
    array[array.length]= value // añadir un elemento alfinal array
    
    return array.length
}
var numbers = [10, 20, 30, 40]

var pushResult =sum(30)

function division(a, b){
    return a / b
}
var divisionResult =division(10,2)
console.log(divisionResult)

function rest(a, b){
    return a - b
}
var restResult =rest(10,2)

function multi(a,b ){
    return a * b
}
var multiResult =multi(10,2)
// variable global y variable local
function salute(  name, surname){
    var fullName = name + ''+surname
    console.log(fullName)
}
// siempre la console llamara el variable el mas cerca(que es  el local) y despues val variable global

/*
''   >false
'0'  >true
0    >false
Nan   >false
null   >false
[]    >true
undefined  >false
'false'  > true
!''  >true
!!  > false
 10 !== 10 estrictement diferentes
 === escristemente igual
 == igual
 && =and
 ||= or
*/       
/*
var array =[]
array.pop()// nada
array=null
array.pop()//cannotread properties of null reading'pop'
array=undefined
*/


function multiply(a, b){
    if(typeof a !=='number' ||typeof b !== 'number'){
       console.log('lo valores deben ser numericos')
       return
    }
    
    return a*b
}
var multiplyResult=multiply(10, 20)//200
var multiplyResult =multiply('hola',10) //null

function divide(a, b){
    if(typeof a !=='number'|| typeof b !=='number') {
        console.log('lo valores debenser numericos')
    } else if (b===0){
        console.log('el segundo valor no puede ser 0')
        return
    } else{
        return a / b
    }
}

    /*
    1-e-mail tiene que tener '@' y 'gmail or hotmail or outlook'
    ejercicios;
    condiciones =
    2-name tiene que tener como minimum 2 caracter
    3-password tiene que tener:
    un minimum una letra de mayscula
    un minimum una letra de minuscula
    un minimum un Number
    length maximum 8 caracter
    4-age tiene  que ser numbers y de lenght 2 caracter
    function register(email,name, pasword,age)
    usar if!!
    */
    function stringValidator(string, stringName){
        if(typeof string!== 'string') {
            console.log(stringValidator + '')
        }
    }

    function register(email, name, password, age) {
        var isEmailValidString = stringValidator(email,'Email')
        
        if(!isEmailValidString){
            return false
        }
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
    // typeof 'hola'!== 'string'
    //typeof'0'!== 'string'
    //typeof 6 < 18 !== 'false'
    typeof true==='boolean'

    // object.
    var usar={
        email:'pepitogrillo.com',
        name:'pepito',
        password:123123123,
        age:18
    }
    User.email,email//pepitogrillo.com
    User.name//
    user.password='123456789'
