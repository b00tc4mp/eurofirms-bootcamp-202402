//---user tere albenca ---//
var user = {
    id: '674jnrkm5f56mrsf',
    email: 'terealbenca@eurofirms.com',
    name: 'tere',
    password: '123456789',
    surname:'Alalluna',
    age: 39,
    'mi cv': {
        experiences: {
            years: 8,
            job:camarera

        }
    },
    salute: function () {
        console.log('hola')
    },
    lastName: 'Albenca'
}

user.salute()
user['mi cv'].experiences.years = 8
user['mi cv'].experiences.job = 'Camarera'

user.email // terealbenca@eurofirms.com
user.name // tere
user.password = '123456789'
user.password // '123456789'
user.surname = 'Alalluna'
user.surname // 'Alalluna'
user.miCv // ReferenceError
//braquets: para introducir propiedades que no estan formadas en una palabra
user['mi cv'] // accede a la propiedad
user['surname'] // 'Albenca'

function addPropertyToUser(key, value) {
    //user.key = value // user = {key: 'Albenca'}

    //braquets : para introducir mas propiedades dentro del objeto con el key
    user[key] = value // user = {lastName: 'Albenca'}
}

addPropertyToUser('lastName', 'Albenca')

var user2 = {}

user2.email = 'robert@eurofirms.com'
 
//---switch case ---//

function pressKey(key) {
    switch (key) {
        case 'ArrowUp': //como un if
            // code to move up
            break;
        case 'ArrowRight'://como un else if
            // code to move right
            break;
        case 'ArrowDown'://como un else if
            // code to move down
            break;
        case 'ArrowLeft'://como un else if
            // code to move left
            break//;
        //default:'dont move' que sería como else
    }
}

//---phoneticLookup ---//
function phoneticLookup(val) {
    let result = "";

    switch (val) {
        case "alpha":
            result = "Adrian";
            break;
        case "bravo":
            result = "Barbara";
            break;
        case "charlie":
            result = "Carlos";
            break;
        case "delta":
            result = "Diana";
            break;
        case "echo":
            result = "Edu";
            break;
        case "foxtrot":
            result = "Fanny";
    }

    return result;
}

function phoneticLookup(val) {
    var result = ''

    var radioCodes = {
        alpha: 'Adrian',
        bravo: 'Barbara',
        charlie: 'Carlos',
        delta: 'Diana',
        echo: 'Edu',
        foxtrot: 'Fanny'
    }

    result = radioCodes[val]

    return result
}
console.log(phoneticLookup("charlie"));
//objeto PHONETICLOOKUP
var radioCodes = {
    alpha: 'Adian',
    bravo: 'Barbara',
    charlie: 'Carlos',
    delta: 'Diana',
    echo: 'Edu',
    foxtrot: 'Fanny',
    gamma: 0
}
radioCodes.hasOwnProperty('alpha')
if(!radioCodes.gamma) radioCodes.gamma ='Gabriel'
console.log(radioCodes.gamma)

//----Our Music----//

const ourMusic = [
   {
    'artist': 'Jarabe de Palo',
    'title': 'La Flaca',
    'release_year':1996,
    'formats':[
        'cd',
        'cassette',
        'lp'
    ],
    'gold':true
   } 
];

//----bucles----//


var numbers = [10, 20, 30, 40]

//----bucle for de principio a fin----//

for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i] / 2)
}
//----bucle for de fin a principio----//

for (var i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i] / 2)
}

//----while----no es optimo para recorrer un array//
var i = 0 //declarar variable
while (i < numbers.length) {
    console.log(numbers[i] / 2)
    i++
}

//----do while----se usa poco, primero ejecuta y luego evalua la condicion//
var i = 0
do {
    if (numbers2[i] % 2 !== 0) {
        console.log(numbers2[i])
    }

    i++
} while (i < numbers2.length)//se jecuta al menors una vez



//----for----si el numero no es par------/
var numbers2 = [10, 15, 30, 33, 13, 11, 50, 55]

for (var i = 0; i < numbers2.length; i++) {
    if (numbers2[i] % 2 !== 0) {
        console.log(numbers2[i])
    }
}
//----nesting for loops con array anidada------/
//                  0           1             2  
//               0   1     0    1   2     0   1   2  
var numbers3 = [[10, 15], [30, 33, 13], [11, 50, 55]]

for (var i = 0; i < numbers3.length; i++) {
    for (var j = 0; j < numbers3[i].length; j++) {
        if (numbers3[i][j] % 2 !== 0) {
            console.log(numbers3[i][j])
        }
    }
}
