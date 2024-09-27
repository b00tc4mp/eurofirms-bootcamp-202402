//-------------salute---------------//

function salute(name, surname){
    console.log('hola'+ ' '+ name + ' '+ surname)
}
console.log(salute('María Teresa','Albenca Martí'));

//-------------funcion sumar---------------//
function sum(a, b) {
    var sumResult = a + b

    return sumResult
}
var result = sum(5, 10) // 15
var result2 = sum(4, 5) // 9

//-------------funcion sumar suma---------------//
function sumsum(c, d){
    var sumTwoResult = c + d
    return sumTwoResult
}
console.log('la suma de los resultados es')
console.log(sumsum(result, result2));

//---añadir valor a un array---//
function push(array, value) {
    array[array.length] = value

    return array.length
}

var numbers = [10, 20, 30, 40]

var pushResult = push(numbers, 50)


//----añadir valores unicos a un Array----//
function pushUnique(array, value) {
    // Verifica si el valor ya existe en el array
    if (!array.includes(value)) {
        // Si no existe, añadirlo al final del array
        array[array.length] = value;
        // Retornar la nueva longitud del array
        return array.length;
         // Si el valor ya existe
    } else {
        // Retornar un mensaje de error
        return "El valor ya existe en este array.";
    }
}

var numbers = [10, 20, 30, 40];
console.log('el length de mi array es')
var pushResult = pushUnique(numbers, 70);
console.log(pushResult); // Esto imprimirá la nueva longitud del array

pushResult = pushUnique(numbers, 30);
console.log(pushResult); // Esto imprimirá el mensaje de error

//---saludo dos---//


var fullName = 'Pepito Grillo'

function salute2(name, surname) {
    var fullName = name + ' ' + surname

    console.log(fullName)
}

salute2('Peter', 'Pan') // Peter Pan

//---boolean---//
//'', 0, Nan, null, undefined , !!'' = false
// [], 'false','0' ,!''= True


//---condition---//
var condition1 = 10 === 20
var condition2 = 10 !== 20

if (condition1 && condition2) {
    console.log('two conditions are ok')
}

//---errores típicos con null y undefined---//

var array = []

array.pop()//nada

var array = null

array.pop()//cannot read properties of null reading 'pop'
var array = undefined

array.pop()//cannot read properties of undefined reading 'pop'

//---if multiply ---//

//function multiply(a,b,){
  //  if(typeof a !== 'number' || typeof b !== 'number' ){
    //    console.log('error NaN') 
    //}else{
      //  return a * b
    //}

//}

function multiply(a,b,){
    if(typeof a !== 'number' || typeof b !== 'number' ){
        console.log('los valores deben ser numericos') 
        return null
        return a * b
    }

}


var multyplyResult = multiply(10,20)//200
var multyplyResult = multiply('hi',20)//null

//---if divide ---//

//function divide(a,b,){
  //      if(typeof a !== 'number' || typeof b !== 'number' ){
    //        console.log('los valores deben ser numericos') 
      //      return
        //}
       // if(b === 0 ){
         //   console.log('el segundo valor no puede ser 0') 
           // return
        //}
        //return a / b
    //}
function divide(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        console.log('Lo valores deben ser numericos')    
        return
    }
    
    if (b === 0) {
        console.log('El segundo valor no puede ser 0')
            return
    }
    
    return a / b
    }
var divisionResult = divide(10,0)



// typeof 'hola' === 'string'

// typeof '@' === 'string'

// typeof 6 < 18 === false
// typeof (6 < 18) === 'boolean'
// typeof true === 'boolean'

// typeof !name.length === 'boolean'
// typeof (typeof !name.length) === 'string'
// typeof !(typeof (typeof !name.length)) === 'boolean'


//---operaciones---//
function addition(n1,n2){
    return n1 + n2;
}
function rest(n1,n2){
    return n1 - n2;
}
function multiplication(n1,n2){
    return n1 * n2;
}
function division(n1,n2){
    return n1 / n2;
}
console.log("operación")
console.log(division(8,4))


//----Arrays dentro de Array----//
console.log('Array dentro de array')
var numbers =[1,2,3, [4,5,[7,8, [9,10] ], 6]]

//console.log(numbers[0]);
//console.log(numbers[3])
console.log(numbers[3][3])
console.log(numbers[3][2][1])
console.log(numbers[3][2][2][0])
//----push y length----//
numbers.push(11)
numbers[numbers.length]=12
console.log(numbers)

//----pop----//
numbers.pop(2)
console.log(numbers)
