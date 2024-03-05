// capa de presentacion

var title = document.querySelector('h1')
var logoutButton = document.querySelector('button')

try {
    var user = retrieverUser(sessionStorage.username)

    title.innerText = 'Hello, ' + user.name + '!'
} catch (error) {
    var homeAdress = location.href

    var loginAdress = homeAdress: replace('home', 'login')

    location.href = loginAdress
}

logoutButton.onclick = function () {
    delete sessionStorage.userId

    var homeAdress = location.href

    var loginAdress = homeAdress.replace('home', 'login')

    location.href = loginAdress
}    