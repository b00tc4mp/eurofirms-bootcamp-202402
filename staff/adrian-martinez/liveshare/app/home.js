
var metaTitle = document.querySelector("title");
var title = document.querySelector("h1");
var alias = document.querySelector("#alias");
var cumpleanos = document.querySelector("#cumpleanos");
var correo = document.querySelector("#correo");

var logoutButton = document.querySelector("button");

var chatSection = document.querySelector("#chat-session");
var chatUsers = document.querySelector("#chat-users");
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

logoutButton.onclick = function(){

    try{
        logic.logoutUser();

        var homeAddress = location.href;
        var loginAddress = homeAddress.replace("home", "login");

        location.href = loginAddress;
    }
    catch(error){
        console.error(error);

        alert(error.message);
    }
}
try{
    var users = logic.retrieveUsers();

    users.forEach(function(user){
        var chatUserItem = document.createElement("li");

        chatUserItem.innerText = user.username;
        
        chatUserItem.classList.add(user.online ? "chat-user-online" : "chat-user-offline");

        chatUserItem.onclick = function(){
            var interlocutorTitle = chat.querySelector("#chat-interlocutor");

            interlocutorTitle.innerText = user.username;

            function renderMessages(){
                try{
                    var messages = logic.retrieveMessagesWithUser(user.id);

                    chatMessages.innerHTML = "";
                    
                    messages.forEach(function(message){
                        var messageItem = document.createElement("li");

                        if(message.from === locic.getLoggedInUserId()){
                            messageItem.classList.add("chat-message--right");
                        }
                        else{
                            messageItem.classList.add("chat-message--left");
                        }

                        messageItem.innerText = message.text;

                        chatMessages.appendChild(messageItem);
                    })
                }
                catch(error){
                    
                    console.error(error);
                    alert(error.message);
                }
            }

            renderMessages();

            clearInterval(renderMessagesIntervalId);

            renderMessagesIntervalId = setInterval(function(){
                renderMessages();
            }, 1000)

            chatForm.onsumit = function(event){
                event.preventDefault();

                var textInput = chatForm.querySelector("#text");
                var text = textInput.value;
            }
            try{
                logic.sendMessageToUser(user.id, text);

                chatForm.reset();

                renderMessages()
            }
            catch(error){

                console.error(error);
                alert(error.message);
            }
        }
        chat.style.display = "block";
    })

    chatUsers.appendChild(chatUserItem);
}
catch(error){

    console.error(error);
    alert(error.message);
}