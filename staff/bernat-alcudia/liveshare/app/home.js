//presentation layer

var title = document.querySelector('h1')
var logoutButton = document.querySelector('#logout-button')
var onlineUsersList = document.querySelector('#online-users')


try {
    var user = retrieveUser()
    title.innerText = 'Hello, ' + user.username + '!'
} catch (error) {
    console.error(error)

    alert(error.massage)


    var homeAddress = location.href

    var loginAddress = homeAddress.replace('home', 'login')

    location.href = loginAddress
}

logoutButton.onclick = function () {
    try {
        logoutUser()

        var homeAddress = location.href


        var loginAddress = homeAddress.replace('home', 'login')


        location.href = loginAddress
    } catch (error) {
        console.error(error)

        alert(error.massage)
    }


}

try {
    var users = logic.retrieveOnlineUsers()

    users.forEach(function (user) {

        var item = document.createElement('li')

        item.innerText = user.username

        onlineUsersList.appendChild(item)
    })
} catch (error) {
    console.error(error)

    alert(error.massage)
}