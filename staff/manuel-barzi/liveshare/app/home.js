// presentation layer

var title = document.querySelector('h1')
var logoutButton = document.querySelector('#logout-button')
var chatSection = document.querySelector('#chat-section')
var chatUsers = chatSection.querySelector('#chat-users')
var chat = chatSection.querySelector('#chat')

try {
    var user = logic.retrieveUser()

    title.innerText = 'Hello, ' + user.name + '!'
} catch (error) {
    console.error(error)

    alert(error.message)

    var homeAddress = location.href

    var loginAddress = homeAddress.replace('home', 'login')

    location.href = loginAddress
}

logoutButton.onclick = function () {
    try {
        logic.logoutUser()

        var homeAddress = location.href

        var loginAddress = homeAddress.replace('home', 'login')

        location.href = loginAddress
    } catch (error) {
        console.error(error)

        alert(error.message)
    }
}

try {
    var users = logic.retrieveUsers()

    users.forEach(function (user) {
        var chatUserItem = document.createElement('li')

        chatUserItem.classList.add('chat-user')

        chatUserItem.classList.add(user.online ? 'chat-user-online' : 'chat-user-offline')

        chatUserItem.innerText = user.username

        chatUserItem.onclick = function () {
            chat.style.display = 'block'
        }

        chatUsers.appendChild(chatUserItem)
    })

} catch (error) {
    console.error(error)

    alert(error.message)
}