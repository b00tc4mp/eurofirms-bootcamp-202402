var data = (function () { // Se declara una variable data y se asigna el resultado de una IIFE
    // helpers
    function loadUsers() {
        return JSON.parse(localStorage.users || '[]') // Función para cargar usuarios desde el almacenamiento local
    }

    function saveUsers(users) {
        localStorage.users = JSON.stringify(users) // Función para guardar usuarios en el almacenamiento local
    }


    function loadMessages() {
    return JSON.parse(localStorage.messages || '[]') // Función para cargar mensajes desde el almacenamiento local

    }

function saveMessages(messages) {
    localStorage.messages = JSON.stringify(messages) // Función para guardar mensajes en el almacenamiento local
    }


// data

function findUser(callback) { // Función para encontrar un usuario que cumpla con una condición dada
    var users = loadUsers() // Se cargan los usuarios desde el almacenamiento local


    for (var i = 0; i < users.length; i++) { // Se recorre la lista de usuarios
        var user = users[i] // Se obtiene un usuario de la lista

        var matches = callback(user) // Se aplica la función de callback para verificar si el usuario cumple con la condición

        if (matches) return user // Si el usuario cumple con la condición, se retorna
    }
}

function insertUser(user) { // Función para insertar un nuevo usuario
    var users = loadUsers() // Se cargan los usuarios desde el almacenamiento local

    user.id = parseInt(Math.random() * 1000000000000000000).toString(36) // Se genera un ID para el usuario

    users[users.length] = user // Se agrega el usuario a la lista de usuarios

    saveUsers(users) // Se guardan los usuarios actualizados en el almacenamiento local
}

function updateUser(user) { // Función para actualizar un usuario existente
    var users = loadUsers(user) // Se cargan los usuarios desde el almacenamiento local

    var index = users.findIndex(function (user2) {  // Se busca el índice del usuario a actualizar
        return user2.id === user.id
    })

    users.splice(index, 1, user) // Se reemplaza el usuario antiguo con el usuario actualizado

    saveUsers(users) // Se guardan los usuarios actualizados en el almacenamiento local
}

function findUsers(callback) { // Función para encontrar usuarios que cumplan con una condición dada
    var users = loadUsers() // Se cargan los usuarios desde el almacenamiento local


    var filtered = users.filter(callback) // Se filtran los usuarios según la función de callback

    return filtered // Se retorna la lista de usuarios filtrados
}

function printUsers() { // Función para imprimir los usuarios en la consola
    var users = loadUsers() // Se cargan los usuarios desde el almacenamiento local

    console.table(users) // Se imprime la lista de usuarios en formato de tabla en la consola

    return users // Se retorna la lista de usuarios

}

function getAllUsers() {  // Función para obtener todos los usuarios
    var users = loadUsers() // Se cargan los usuarios desde el almacenamiento local
    return users // Se retorna la lista de usuarios
}


function printMessages() { // Función para imprimir los mensajes en la consola
    var messages = loadMessages() // Se cargan los mensajes desde el almacenamiento local

    console.table(messages) // Se imprime la lista de mensajes en formato de tabla en la consola

}

function insertMessage(message) { // Función para insertar un nuevo mensaje
    var messages = loadMessages() // Se cargan los mensajes desde el almacenamiento local

    messages.push(message) // Se agrega el mensaje a la lista de mensajes

    saveMessages(messages)  // Se guardan los mensajes actualizados en el almacenamiento local

}

function findMessages(callback) { // Función para encontrar mensajes que cumplan con una condición dada
    var messages = loadMessages() // Se cargan los mensajes desde el almacenamiento local


    var filtered = messages.filter(callback)  // Se filtran los mensajes según la función de callback


    return filtered // Se retorna la lista de mensajes filtrados
}

// Se retorna un objeto con todas las funciones definidas

return {
    findUser: findUser,
    insertUser: insertUser,
    updateUser: updateUser,
    findUsers: findUsers,
    printUsers: printUsers,
    getAllUsers: getAllUsers,
    printMessages: printMessages,
    findMessages: findMessages,
    insertMessage: insertMessage
}
}) () // Se retorna un objeto con todas las funciones definidas