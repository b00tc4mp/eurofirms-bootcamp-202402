var form = document.querySelector(".form");
var anchor = document.querySelector("#login");

form.onsubmit = function (event) {
  event.preventDefault();

  var nameImput = form.querySelector("#name");
  var name = nameImput.value;

  var lastnameImput = form.querySelector("#lastname");
  var lastname = lastnameImput.value;

  var birthdateImput = form.querySelector("#birthdate");
  var birthdate = birthdateImput.value;

  var usernameImput = form.querySelector("#username");
  var username = usernameImput.value;

  var emailImput = form.querySelector("#email");
  var email = emailImput.value;

  var newpasswordImput = form.querySelector("#newpassword");
  var newpassword = newpasswordImput.value;

  var repeatpasswordInput = form.querySelector("#repeatpassword");
  var repeatpassword = repeatpasswordInput.value;
  //business layer

  try {
    logic.resetPasswordUser(
      name,
      lastname,
      birthdate,
      username,
      email,
      newpassword,
      repeatpassword
    );

    console.log("new password registered");

    alert("new password registered");

    form.reset();

    anchor.click();
  } catch (error) {
    console.error(error.message);

    alert(error.message);
  }
};
