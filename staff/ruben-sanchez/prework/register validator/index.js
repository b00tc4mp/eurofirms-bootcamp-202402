if(age < 18){
    console.log('to register your age must be higher or equal than 18')
    return false;

}
    return true;


//-----------------------------------------

var user = {
    email: 'pepito@grillo.com',
    name: 'pepito',
    password: '123123123',
    age: 18,
    miCv: {

    }
}

user.miCv.experiences.years = 2
user.miCv.experiences = 'Camarero'

user.email // 'pepito.@grillo.com
user.name // 'pepito'
user.password = '12345678'
user.password // '12345678'
user.surname = 'Grillo'
user.usurname // 'Grillo'
user.username // RefreenceError
user['mi-cv'] // accede a la propiedad
user['surname'] // 'Grillo'

function addPropertyToUser(key, value){
    user[key] = value // user = {lastName: 'Grillo}
    user[key]  value // user = {lastName: 'Grillo'}
}

addPropertyToUser('lastName', 'Grillo')



var user = {}
user2.email = 'peter@pan.com'

var miCv = {

}


function pressKy(key){
    switch(key){
        case 'ArrowUp':
            // code to move up
            break;
        case 'ArrowRight':
            // code to move right
            break;
        case 'ArrowDown':
            // code to move down
            break;
        case 'ArrrowLeft':
            // code to move left
            break;
        
        default:

    }
}
var phoneticLookup  = {
    alpha: 'Adams',
    bravo: 'Bostom',
    charlie: 'Chicago',
    delta: 'Denver',
    echo: 'Easy',
    foxtrot: 'Frank'
}

function phoneticLookup(val) {
var result = ''
var radioCodes  = {
    alpha: 'Adams',
    bravo: 'Bostom',
    charlie: 'Chicago',
    delta: 'Denver',
    echo: 'Easy',
    foxtrot: 'Frank'
}
var result = radioCode[val]

    return result

}

radioCodes.hasaOwnProperty('alpha') // true




















