// presntation layer
var title = document.querySelector('h1')
var logoutButton = document.querySelector('#logout-button')
var onineUsersList = document.querySelector('#online-users')

try {
    var user = retrieveUser()

    title.innerText = 'Hello, ' + user.name + '!'
} catch (error) {
    console.error(error)

    alert(error.message)

    var homeAddress = location.href

    var loginAddress = homeAddress.replace('home','login')

    location.href = loginAddress
}

logoutButton.onclick = function () {
   
   
    try{
        logic.logoutUser()
    

    var homeAddress = location.href
    
    var loginAddress = homeAddress.replace('home', 'login')

    location.href = loginAddress
    
    }catch(error){
        console.error(error)

        alert(error.message)
    }
}

try{
    var users = logic.retrieveOnlineUsers()

    users.forEach(function(users){
        var item = document.createElement('li')

        item.innerText = user.username
        onlineUsersList.appendChild(item)
        
    })
} catch (error){
    console.error(error)

    alert(error.message)
}