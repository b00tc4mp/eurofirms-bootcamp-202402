// presentation layer

var title = document.querySelector('h1')
var logoutButton = document.querySelector('button')

try {
    var user = retrieveUser()

    title.innerText = 'Hello, ' + user.name + '!'
} catch (error) {
    var homeAddress = location.href

    var loginAddress = homeAddress.replace('home', 'login')

    location.href = loginAddress
}

logoutButton.onclick = function () {
    delete sessionStorage.username

    var homeAddress = location.href

    var loginAddress = homeAddress.replace('home', 'login')

    location.href = loginAddress
}