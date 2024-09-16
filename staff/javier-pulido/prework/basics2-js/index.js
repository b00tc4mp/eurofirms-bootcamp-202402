//Ejercicio de funciones

function register(email, name, password, age) {

    if (typeof email !== 'string') {

        console.log('Por favor ingrese un email correcto')

        return false
    }

    if (typeof name !== 'string') {

        console.log('Por favor ingrese un nombre correcto')

        return false
    }

    if (typeof password !== 'string') {

        console.log('Por favor ingrese una contraseña con letras')

        return false
    }

    if (typeof password !== 'number') {

        console.log('Por favor ingrese una contraseña con numeros')

        return false
    }

    if (age < 18) {

        console.log('Usted es menor de edad, acceso restringido')

        return false
    }


    return true
}