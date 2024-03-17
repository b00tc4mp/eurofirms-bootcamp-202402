
var metaTitle = document.querySelector("title");
var title = document.querySelector("h1");
var alias = document.querySelector("#alias");
var cumpleanos = document.querySelector("#cumpleanos");
var correo = document.querySelector("#correo");

var chatButton = document.querySelector("#chat-button");
var logoutButton = document.querySelector("button");

var chatSection = document.querySelector("#chat-section");
var chatUsers = chatSection.querySelector("#chat-users");
var chat = chatSection.querySelector("#chat");
var chatForm = chat.querySelector("#chat-form");
var chatMessages = chat.querySelector("#chat-messages");
var renderMessagesIntervalId;


try{
    var user = logic.retrieveUser();

    metaTitle.innerText = user.name;
    title.innerText = "Hello, "+ user.name +"!";
    alias.innerText = "Tu alias es "+ user.username +".";
    cumpleanos.innerText = "Fecha de cumpleaños:  "+ user.birthdate +".";
    correo.innerText = "Correo: "+ user.email +".";
}
catch(error){
    
    var homeAddress = location.href;
    var loginAddress = homeAddress.replace("home", "login");

    location.href = loginAddress;
}

logoutButton.onclick = function () {
    try {
        logic.logoutUser();

        var homeAddress = location.href;
        var loginAddress = homeAddress.replace('home', 'login');
        location.href = loginAddress;
    } catch (error) {

        console.error(error);
        alert(error.message);
    }
}
try {
    var users = logic.retrieveUsers();
    users.forEach(function (user) {
        var chatUserItem = document.createElement('li');

        chatUserItem.classList.add('chat-user');
        chatUserItem.classList.add(user.online ? 'chat-user-online' : 'chat-user-offline');
        chatUserItem.innerText = user.username;

        chatUserItem.onclick = function () {
            var interlocutorTitle = chat.querySelector('#chat-interlocutor');

            interlocutorTitle.innerText = user.username;

            function renderMessages() {
                try {
                    var messages = logic.retrieveMessagesWithUser(user.id);

                    chatMessages.innerHTML = '';

                    messages.forEach(function (message) {
                        var messageItem = document.createElement('li');

                        if (message.from === logic.getLoggedInUserId()){
                            messageItem.classList.add('chat-message--right');
                        }
                        else
                            messageItem.classList.add('chat-message--left');

                        messageItem.innerText = message.text;

                        //Poner la fecha del mensaje enviado
                        var dateTime = document.createElement("sub");
                        var date = new Date(message.date);
                        dateTime.innerText= date.toLocaleString("en-CA");

                        chatMessages.appendChild(messageItem);
                    })
                } catch (error) {
                    console.error(error);

                    alert(error.message);
                }
            }

            renderMessages();

            clearInterval(renderMessagesIntervalId);

            renderMessagesIntervalId = setInterval(function () { renderMessages() }, 1000);

            chatForm.onsubmit = function (event) {
                event.preventDefault();

                var textInput = chatForm.querySelector('#text');
                var text = textInput.value;

                try {
                    logic.sendMessageToUser(user.id, text);

                    chatForm.reset();

                    renderMessages();
                } catch (error) {
                    console.error(error);

                    alert(error.message);
                }
            }
            chat.style.display = 'block';
        }
        chatUsers.appendChild(chatUserItem);
    })
} catch (error) {
    console.error(error);
    alert(error.message);
}

//Añadimos los botones para manejar las publicaciones

postsButton.onclick = function(){
    chatSection.classList.add("chat-section--off");
    postsSection.classList.add("chat-section--off");
}

createPostButton.onclick = function(){
    createPostSection.classList.remove("chat-section--off");
}

createPostCancelButton.onclick = function(){
    createPostSection.classList.add("chat-section--off");
}

createPostForm.onclick = function(event){
    event.preventDefault();
    
    var imageInput = createPostForm.querySelector("#image");
    var image = imageInput.value;

    var textInput = createPostForm.querySelector("#text");
    var text = textInput.value;

    try{
        logic.createPost(image, text);

        createPostForm.reset();

        createPostSection.classList.add("create-post-section--off");
    }
    catch(error){
        console.error(error);
        alert(error.message);
    }
}
