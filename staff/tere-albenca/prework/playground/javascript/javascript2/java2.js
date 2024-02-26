
function register(email,name, password, age){
    if (age < 18) {
        // Si la edad es menor de 18 años, puedes lanzar un error o devolver un mensaje
        throw new Error("Debes tener al menos 18 años para crear la cuenta");
    }
    // Expresión regular para verificar la estructura de un correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
    // Si el correo electrónico no es válido, puedes hacer algo como lanzar un error o devolver un mensaje
    console.log("El formato del correo electrónico no es válido");
    
    }
    // Expresión regular para verificar que el campo 'name' solo contiene letras del alfabeto
    const nameRegex = /^[a-zA-Z]+$/;

    // Verificar si el 'name' solo contiene letras del alfabeto
    if (!nameRegex.test(name)) {
        // Si el 'name' contiene otros caracteres, puedes hacer algo como lanzar un error o devolver un mensaje
       console.log("El nombre solo puede contener letras del alfabeto");
   
    }
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;

    // Verificar si la contraseña cumple con los requisitos
    if (!passwordRegex.test(password)) {
        // Si la contraseña no cumple con los requisitos, puedes lanzar un error o devolver un mensaje
        console.log("La contraseña debe contener al menos 8 caracteres, incluyendo al menos una letra mayúscula, una letra minúscula, un número y un carácter especial");
      
    }
    console.log("Se ha creado la cuenta");
    console.log("Bienvenid@", name);

}
