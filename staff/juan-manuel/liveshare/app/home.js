var title = document.querySelector('h1')

try {

    var user

    for (var i = 0; i < users.length; i++) {
        var user2 = users[i]

        if (user2.username === sessionStorage.username) {
            user = user2

            break
        }
    }

    if (user === undefined)
        throw new Error('user not found')

    title.innerText = 'Hello, ' + user.name + '!'
} catch (error) {
    var homeAddress = location.href

    var loginAddress = homeAddress.replace('home', 'login')

    location.href = loginAddress
}