// usando reduce suma todos los numeros del array
console.log("suma todos los numeros ");

var numbers = [0, 12, 5, 40, 6, 7, 24, 13, 21];

var sumWithInitial = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
});

console.log(sumWithInitial);
//expected output : 128

//.............................................

// multiplica todos los numeros del array
console.log("multiplica todos los numeros");

var numbers2 = [1, 12, 5, 40, 6, 7, 24, 13, 21];

var multiplayWithInitial = numbers2.reduce(function (
  accumulator,
  currentValue
) {
  return accumulator * currentValue;
});

console.log(multiplayWithInitial);
//expected output : 660.441.600

//.............................................

//  suma todos los numeros del array, dando un valor inicial de 10
console.log("suma todos los numeros, valor inicial de 10");
var numbers3 = [0, 12, 5, 40, 6, 7, 24, 13, 21];

var initialVar = 10;

var sumWithInitialTen = numbers3.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, initialVar);

console.log(sumWithInitialTen);
//expected output : (128 + 10) 138

//.............................................

// junta todos los strings del array, en uno solo (con el reduce) dando un valor inicial de 'Hola'
console.log("Suma los strings, valor inicial 'hola'");

var strings = ["mundo", "pepito", "como", "va todo"];

initialVar = "Hola ";

var sumStrings = strings.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue + " ";
}, initialVar);
console.log(sumStrings);
//expected output : 'hola mundo pepito como va todo'

//.............................................

// haz un array con todos los usuarios cuyo nombre empieza con pe
console.log("Array con usuarios namePE");
var users = [
  {
    id: "fdg5t5t",
    name: "pepito",
    email: "pepito@grillo.com",
    saved: ["5hg75", "4huehet", "ghueghu5e"],
  },
  {
    id: "g48ge5g",
    name: "wendy",
    email: "wendy@darling.com",
    saved: ["gjk5g54", "engljeg"],
  },
  {
    id: "5t45e5i",
    name: "peter",
    email: "peter@pan.com",
    saved: ["grghejh4", "4tw4hj4", "f4jkg4g", "f4wfjw4f"],
  },
  { id: "djn5gje", name: "pinocho", email: "pin@ocho.com", saved: [] },
];
var initialName = "pe";
var filteredUsers = users.reduce(function (accumulator, currentValue) {
  if (currentValue.name.startsWith(initialName)) {
    accumulator.push(currentValue);
  }
  return accumulator;
}, []);

console.log(filteredUsers);

//.............................................

// haz un array que contenga cada uno de los usuarios, solo con la propiedad name e email
console.log("Array de usuarios con name e email");
var users2 = [
  {
    id: "fdg5t5t",
    name: "pepito",
    email: "pepito@grillo.com",
    saved: ["5hg75", "4huehet", "ghueghu5e"],
  },
  {
    id: "g48ge5g",
    name: "wendy",
    email: "wendy@darling.com",
    saved: ["gjk5g54", "engljeg"],
  },
  {
    id: "5t45e5i",
    name: "peter",
    email: "peter@pan.com",
    saved: ["grghejh4", "4tw4hj4", "f4jkg4g", "f4wfjw4f"],
  },
  { id: "djn5gje", name: "pinocho", email: "pin@ocho.com", saved: [] },
];

var nameEmailUsers = users2.reduce(function (accumulator, currentValue) {
  var userWithOnlyNameEmail = {
    name: currentValue.name,
    email: currentValue.email,
  };
  accumulator.push(userWithOnlyNameEmail);
  return accumulator;
}, []);

console.log(nameEmailUsers);

//.............................................

// users3 tiene name como primer valor y surname como segundo, crea un objecto que contenga estas propiedades

console.log("objecto que contenga las propiedades name y surname del array");

var users3 = ["peter", "pan"];

var fullNameUser = users3.reduce(function (accumulator, currentValue, index) {
  if (index === 0) {
    accumulator.name = currentValue;
  } else if (index === 1) {
    accumulator.surname = currentValue;
  }
  return accumulator;
}, {});

console.log(fullNameUser);

//.............................................

// users4 es un array que contiene arrays, dentro de este segundo array, tenemos el name en primera posicion  y el surname en segunda.
// crea un array de objetos, donde cada objecto tenga la propiedad name y surname correspondiente

console.log("Array de objectos con las propiedades name y surname");

var users4 = [
  ["pepito", "grillo"],
  ["wendy", "darling"],
  ["peter", "pan"],
];
var usersObjects = users4.reduce(function (accumulator, currentValue) {
  var userObject = {
    name: currentValue[0],
    surname: currentValue[1],
  };
  accumulator.push(userObject);
  return accumulator;
}, []);

console.log(usersObjects);
