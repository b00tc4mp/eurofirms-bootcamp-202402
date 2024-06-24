// FILTER
//Usa filter para crear un nuevo array que contenga los numeros impares

var numbers2 = [0, 12, 5, 40, 6, 7, 24, 13, 21];
var caseOne = numbers2.filter(function (number) {
  return number % 2 !== 0;
});
console.log(caseOne);

// otro con los elementos que tienen dos palabras

var strings = ["hola mundo", "pepito", "hello world to the people", "todos"];

var caseTwo = strings.filter(function (words) {
  //return words.split(' ').length === 2
  //primero un indexOf para buscar que tenga al menos un espacio debe ser distinto de -1 y luego que el espacio primero este en la misma posicion que el ultimo
  return (
    words.indexOf(" ") !== -1 && words.indexOf(" ") === words.lastIndexOf(" ")
  );
});
console.log(caseTwo);
// crea un nuevo array que contenga los numeros con dos digitos

var numbers = [100, -20, 3, -200, 50, 8, -5];
var caseThree = numbers.filter(function (number) {
  return (number > 9 && number < 100) || (number < -9 && number > -100);
});
console.log(caseThree);
//un nuevo array con los usuarios cuyo nombre empiece con P

var users = [
  { name: "pepito", email: "pepito@grillo.com" },
  { name: "wendy", email: "wendy@darling.com" },
  { name: "topa", email: "to@pa.com" },
  { name: "peter", email: "peter@pan" },
  { name: "pinocho", email: "pin@ocho.com" },
];
var caseFour = users.filter(function (user) {
  return user.name.startsWith("p");
});
console.log(caseFour);
//un nuevo array que contenga a los usuarios que viven en Barcelona
var user2 = [
  {
    name: "pepito",
    information: {
      address: {
        city: "Madrid",
        street: "Gran Via",
      },
      number: "65787959",
    },
  },
  {
    name: "wendy",
    information: {
      address: {
        city: "Barcelona",
        street: "Diagonal",
      },
      number: "677898900",
    },
  },
  {
    name: "Peter",
    information: {
      address: {
        city: "Sevilla",
        street: "Feria",
      },
      number: "6677432121",
    },
  },
  {
    name: "Topa",
    information: {
      address: {
        city: "Barcelona",
        stret: "La rambla",
      },
      number: "669203040",
    },
  },
  {
    name: "Pinocho",
    information: {
      address: {
        city: "Valencia",
        street: "Marques del Turia",
      },
      number: "677403839",
    },
  },
];
var caseFive = user2.filter(function (user) {
  return user.information.address.city === "Barcelona";
});
console.log(caseFive);
