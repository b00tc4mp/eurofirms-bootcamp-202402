
let title = document.querySelector("h1");
let logoutButton = document.querySelector("button");

try{
    let user = retrieveUser(sessionStorage.username);

    title.innerText = "Hello, "+ user.name +"!";
}
catch(e){
    let homeAddress = location.href;
    let loginAddress = homeAddress.replace("home", "login");

    location.href = loginAddress;
}

logoutButton.onclick = function(){

    delete sessionStorage.username;

    let homeAddress = location.href;
    let loginAddress = homeAddress.replace("home", "login");

    location.href = loginAddress;
}