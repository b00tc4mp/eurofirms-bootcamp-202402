// presentation layeer



var title = document.querySelector('h1')
var logoutButton = document.querySelector('button')

try {
    var user = retrieveUser(sessionStorage.username)


    title.innerText = 'Hello, ' + user.name + '!'
} catch (error) {
    var homeAddress = location.href

    var loginAddress = homeAddress.replace('home', 'login')

    location.href = loginAddress

    alert(error.message)
}
logoutButton.onclick = function () {
    delete sessionStorage.username

    var homeAddres = location.href

    var loginAddress = homeAddres.replace('home', 'login')

    location.href = loginAddress


}