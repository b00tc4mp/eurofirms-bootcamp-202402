// presentation layer

var title = document.querySelector('h1')
var logoutButton = document.querySelector('button')

try {
    var user = retrieveUser(sessionStorage.username)

    title.innerText = 'Hello, ' + user.name + '!'

} catch (error) {
    var homeAddress = location.href

    var loginAddress = homeAddress.replace('home', 'login')

    location.href = loginAddress
}


    logoutButtomn.onclick = function (){
        logoutUser()

        var homeAddress = location.href

        var loginAddress = homeAddress.replace('home', 'login')

        location.href = loginAddress


    }
