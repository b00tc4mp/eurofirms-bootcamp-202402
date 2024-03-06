// presentation layeer



var title = document.querySelector('h1')
var logoutButton = document.querySelector('button')

try {
    var user = logic.retrieveUser()


    title.innerText = 'Hello, ' + user.name + '!'
} catch (error) {
    var homeAddress = location.href

    var loginAddress = homeAddress.replace('home', 'login')

    location.href = loginAddress

    
}
logoutButton.onclick = function () {
    logic.logoutUser()

    var homeAddres = location.href

    var loginAddress = homeAddres.replace('home', 'login')

    location.href = loginAddress


}