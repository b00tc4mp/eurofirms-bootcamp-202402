//presntation layer

var title = document.querySelector('h1')
var chatButton = document.querySelector('#chat-button')
var logoutButton = document.querySelector('#logout-button')

var chatSection = document.querySelector('#chat-section')
var chatUsers = chatSection.querySelector('#chat-users')

var chat = chatSection.querySelector('#chat')
var chatForm = chat.querySelector('#chat-form')
var chatMessages = chat.querySelector('#chat-messages')
var renderMessagesIntervalId

var postsSection = document.querySelector('#posts-section')

var createPostSection = document.querySelector('#create-post-section')
var createPostCancelButton = createPost.querySelector('#create-post-cancel-button')
var createPostForm = createPostSection.querySelector('#create-post-form')

var postsButton = document.querySelector('#posts-button')
var createPostButton = document.querySelector('#create-post-button')

chatButton.onclick = function () {
    postsSection.classList.add('posts-section--off')
    chatSection.classList.remove('chat-section--0ff')
}

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
                        // position of message
                        else
                            messageItem.classList.add('chat-message--left')
                        // position of message

                        messageItem.innerText = message.text

                        var breakLine = document.createElement(breakLine)

                        messageItem.appendChild(breakLine)

                        var dateTimeSup = document.createElement('sup')

                        var date = new Date(message.date)

                        dateTimeSup.innerText = date.toLocaleString('en-CA')

                        messageItem.appendChild(dateTimeSup)

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

postsButton.onclick = function () {
    chatSection.classList.add('chat-section--off')
    postsSection.classList.remove('posts-section--off')
}

createPostsButton.onclick = function () {
    createPostsSection.classList.remove('create-post-section--off')
}
createPostCancelButton.onclick = function () {
    createPostSection.classList.add('create-post-section--off')
}

createPostForm.onsubmit = function (event) {
    event.preventDefault()

    var imageInput = createPostForm.querySelector('#image')
    var image = imageInput.value

    var textInput = createPostForm.querySelector('#text')
    var text = textInput.value

    try {
        logic.createPost(image, text)

        createPostForm.rest()

        createPostSection.classList.add('create-post-section--off')
    } catch (error) {
        console.error(error)

        alert(error.message)
    }
}
