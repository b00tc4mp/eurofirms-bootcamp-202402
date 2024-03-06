function forEach(object, callback) {
    for (var i = 0; i < object.length; i++) {
        callback(object[i])
    }
}

var users = {
    '0': {
        name: 'Pepito',
        userName: 'Pepito12',
        password: '123123123'
    },
    '1': {
        name: 'Grillo',
        userName: 'Grillo12',
        password: '123123123'
    },
    '2': {
        name: 'Wendy',
        userName: 'Wendy12',
        password: '123123123'
    },
    length: 3
}

var printUserName = function (user) {
    console.log(user.name + ' ' + user.userName)
}

forEach(users, printUserName)