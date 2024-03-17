//usamos lo que hemos aprendido en filter, map y find
//buscamos dentro del array de usuarios, al user con el email pepito@grillo.com(find)
//una vez tengas un usuario, en un nuevo array guardamos los mensajes que le ha enviado a Wendy (filter)
//con esta informacion creamos un nuevo array que contenga solo el text de los mensajes, como un string(map)
var users = [
  {
    name: "wendy",
    email: "wendy@darling.com",
    messages: [
      { from: "wendy", to: "pepito", text: "hola" },
      { from: "wendy", to: "pepito", text: "Bien y tu?" },
      { from: "wendy", to: "pepito", text: "Me alegro!" },
    ],
  },
  {
    name: "pepito",
    email: "pepito@grillo.com",
    messages: [
      { from: "pepito", to: "wendy", text: "hola" },
      { from: "pepito", to: "wendy", text: "Como estás?" },
      { from: "pepito", to: "wendy", text: "Bien tambien" },
      { from: "pepito", to: "peter", text: "Hola" },
      { from: "pepito", to: "peter", text: "Todo bien!" },
    ],
  },
  {
    name: "peter",
    email: "peter@pan.com",
    messages: [
      { from: "peter", to: "pepito", text: "hola" },
      { from: "peter", to: "pepito", text: "Que tal?" },
    ],
  },
];
var finduser = users.find(function (user) {
  return user.email === "pepito@grillo.com";
});
console.log(finduser);
var filtermessages = finduser.messages.filter(function (message) {
  return message.to === "wendy";
});
console.log(filtermessages);
var contentMessages = filtermessages.map(function (message) {
  return message.text;
});
console.log(contentMessages);

var tests = users
  .find(function (user) {
    return user.email === "pepito@grillo.com";
  })
  .messages.filter(function (message) {
    return message.to === "wendy";
  })
  .map(function (message) {
    return message.text;
  });
console.log(tests);

var texts = users
  .find((user) => user.email === "pepito@grillo.com")
  .messages.filter((message) => message.to === "wendy")
  .map((message) => message.text);

console.log(texts);
