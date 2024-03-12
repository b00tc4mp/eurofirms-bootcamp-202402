//presentation layer

var title = document.querySelector('h1')
var logoutButton = document.querySelector('#logout-button')
var onlineUsersList = document.querySelector('#online-users')
var chatSection = document.querySelector('#chat-section')
var chatUsers = chatSection.querySelector('#chat-users')
var chat = chatSection.querySelector('#chat')
var chatForm = chat.querySelector('#chat-form')
var chatMessages = chat.querySelector('#chat-messages')
var renderMessagesIntervalId

try {
    var user = logic.retrieveUser()

    title.innerText = 'Hello, ' + user.name + '!'
} catch (error) {
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
            var interlocutorTitle = chat.querySelector('#chat-interlocutor')

            interlocutorTitle.innerText = user.username

            function renderMessages() {
                try {
                    var messages = logic.retrieveMessagesWithUser(user.id)

                    chatMessages.innerHTML = ''

                    messages.forEach(function (message) {
                        var messageItem = document.createElement('li')

                        if (message.from === logic.getLoggedInUserId())
                            messageItem.classList.add('chat-message--right')
                        else
                            messageItem.classList.add('chat-message--left')

                        messageItem.innerText = message.text

                        chatMessages.appendChild(messageItem)
                    })
                } catch (error) {
                    console.error(error.message)

                    alert(error.message)
                }
            }

            renderMessages()

            clearInterval(renderMessagesIntervalId)

            renderMessagesIntervalId = setInterval(function () { renderMessages() }, 1000)

            chatForm.onsubmit = function (event) {
                event.preventDefault()

                var textInput = chatForm.querySelector('#text')
                var text = textInput.value

                try {
                    logic.sendMessageToUser(user.id, text)

                    chatForm.reset()

                    renderMessages()
                } catch (error) {
                    console.error(error.message)

                    alert(error.message)
                }
            }

            chat.style.display = 'block'
        }

        chatUsers.appendChild(chatUserItem)
    })
} catch (error) {
    console.error(error)

    alert(error.message)
}