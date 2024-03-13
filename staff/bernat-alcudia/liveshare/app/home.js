//presentation layer

var title = document.querySelector('h1')
var logoutButton = document.querySelector('#logout-button')
var chatSecton = document.querySelector('#chat-section')
var chatUsers = chatSecton.querySelector('#chat-users')
var chat = chatSecton.querySelector('#chat')
var chatForm = chat.querySelector('#chat-form')
var chatMessages = chat.querySelector('#chat-messages')
var renderMessagesIntervalidId


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

        chatUserItem.classList.add(user.online ? 'chat-user-online' : 'chat-user-offline')

        chatUserItem.classList.add('chat-user')

        chatUserItem.innerText = user.username

        chatUserItem.onclick() = function () {
            var interlocutorTitle = chat.querySelector('#chat-interlocutor')

            interlocutorTitle.innerText = user.username

            function renderMessages() {
                try {
                    var messages = logic.renderMessagesWithUser(user.id)

                    chatMessages.innerHTML = ''

                    messages.forEach(function (message) {
                        var messageItem = document.createElement('li')

                        if (message.from === logic.getLoggedInUserId()) {
                            messageItem.classList.add('chat-message--right')
                        } else {
                            messageItem.classList.add('chat-message--left')

                            messageItem.innerText = message.text

                            chatMessages.appendChild(messageItem)
                        }
                    })
                } catch (error) {
                    console.error(error)

                    alert(error.message)
                }
            }

            renderMessages()

            clearInterval(renderMessagesIntervalidId)

            renderMessagesIntervalidId = setInterval(function () { renderMessages() }, 1000)

            chatForm.onsubmit = function (event) {
                event.preventDefault()

                var textInput = chatForm.querySelector('#text')
                var text = textInput.value

                try {

                    logic.sendMessageToUser(user.id, text)

                    chatForm.reset()

                    renderMessages()

                } catch (error) {
                    console.error(error)

                    alert(error.message)
                }
            }


            chat.style.display = 'block'


        }

        onlineUsersList.appendChild(chatUserItem)
    })
} catch (error) {
    console.error(error)

    alert(error.message)
}