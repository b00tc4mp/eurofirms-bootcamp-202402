function register(email, name, password, age) {
  if (typeof email !== "string") {
    return "Tipo de dato incorrecto, introduce un email válido";
  }
  if (typeof name !== "string") {
    return "Tipo de dato incorrecto, introduce un name válido";
  }
  if (typeof age !== "number") {
    return "Tipo de dato incorrecto, introduce una age válida";
  }
  if (!email.includes("@")) {
    return "Introduce un email válido";
  }

  if (name.length < 4) {
    return "Introduce un nombre válido";
  }

  if (password === "12345" && age >= 18) {
    return "Bienvenido " + name;
  }
}

function registerProfe(email, name, password, age) {
  if (typeof email !== "string") {
    console.log("Tipo de dato incorrecto, introduce un email válido");
    return false;
  }
  if (typeof name !== "string") {
    console.log("Tipo de dato incorrecto, introduce un name válido");
    return false;
  }
  if (typeof age !== "number") {
    console.log("Tipo de dato incorrecto, introduce una age válida");
    return false;
  }
  if (!email.includes("@")) {
    console.log("Introduce un email válido");
    return false;
  }

  if (name.length < 4) {
    console.log("Introduce un nombre válido");
    return false;
  }

  if (password === "12345" && age >= 18) {
    console.log("Bienvenido " + name);
    return true;
  } else {
    console.log("Edad o password incorrecto");
    return false;
  }
}

// console.log(register("miemaildominio.com", "Javier", "12345", "8"));

// console.log(register("miemail@dominio.com", "Jav", "12345", "8"));

// válido
// console.log(register("miemail@dominio.com", "Javier", "12345", 18));

// age invalid
// console.log(register("miemail@dominio.com", "Javier", "12345", "18"));

// tipo email invalid
// console.log(register(123444, "Javier", "12345", "18"));

// tipo name invalid
// console.log(register("miemail@dominio.com", 234, "12345", 18));

console.log(registerProfe("miemail@dominio.com", "Javier", "12345", 18));
