import logic from "../logic";
import Form from "../components/Form";
import Button from "../components/Button";
import { errors } from 'com'
import { useState } from "react";

const { ContentError, TypeError} = errors

function ResetPassword({ onUserResetPassword, onRegisterClick, onLoginClick }) {

  const [error,setError] = useState(null)

  const errorHandle = (error)=>{
    console.error(error)

    let feedback = error.message

  if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
   feedback = `${feedback}, please correct it`

  else if (error instanceof DuplicityError)
    feedback = `${feedback}, please try with another user`

  else
    feedback = 'sorry, there was an error,please try again later'

  let isNameError =false

  const isLastnameError = error.message.includes('lastname')
  const isBirthdateError = error.message.includes('birthdate')
  const isEmailError = error.message.includes('email')
  const isUsernameError = error.message.includes('username')
  const isRepeatPasswordError = error.message.includes('password')
  
  let isNewPasswordError = false


  if(!isRepeatPasswordError) isNewPasswordError = error.message.includes('password')
  if(!isUsernameError && !isLastnameError) isNameError = error.message.includes('name')

  const anotherError = 
  !isNameError && 
  !isLastnameError && 
  !isBirthdateError && 
  !isEmailError && 
  !isNewPasswordError && 
  !isRepeatPasswordError &&
  !isUsernameError

  

  setError({
    message: feedback, 
    isNameError, 
    isLastnameError, 
    isBirthdateError, 
    isEmailError, 
    isUsernameError,
    isNewPasswordError,
    isRepeatPasswordError, 
    anotherError
    })

        
  }
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const lastname = form.lastname.value;
    const birthdate = form.birthdate.value;
    const email = form.email.value;
    const username = form.username.value;
    const newpassword = form.newpassword.value;
    const repeatpassword = form.repeatpassword.value;

    try {
      logic.resetPasswordUser(name,lastname,birthdate,email,username,newpassword,repeatpassword)
      .then(() => onUserResetPassword())
      .catch(error => {
        errorHandle(error)
        })
        
    } catch (error) {
      errorHandle(error)
    }
  }

  const handleRegisterClick = (event) => {
    event.preventDefault();

    onRegisterClick();
  };

  const handleLoginClick = (event) => {
    event.preventDefault();

    onLoginClick();
  };

  return (
    <>
      <div className="flex flex-col justify-center item-center mt-3 mb-1">
        <main className="w-3/5 flex flex-col justify-center item-center mb-8">
          <h1 className="text-center">RESET PASSWORD</h1>
          <Form onSubmit={handleSubmit} className="max-w-md">
            <div className="container-form">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" className="w-full p-2 rounded-xl border-lightgray mb-2 box-border hover:bg-[lightgray]"/><br/>
              {error?.isNameError && <span className="text-[red]">{error.message}</span>}

              <label htmlFor="lastname" className="mb-0.5">Lastname</label>
              <input type="text" id="lastname" className="w-full p-2 rounded-xl border-lightgray mb-2 box-border hover:bg-[lightgray]"/><br/>
              {error?.isLastnameError && <span className="text-[red]">{error.message}</span>}

              <label htmlFor="birthdate" className="mb-0.5">Birthdate</label>
              <input type="date" id="birthdate" className="w-full p-2 rounded-xl border-lightgray mb-2 box-border hover:bg-[lightgray]"/><br/>
              {error?.isBirthdateError && <span className="text-[red]">{error.message}</span>}

              <label htmlFor="email" className="mb-0.5">Email</label>
              <input type="text" id="email" className="w-full p-2 rounded-xl border-lightgray mb-2 box-border hover:bg-[lightgray]"/><br/>
              {error?.isEmailError && <span className="text-[red]">{error.message}</span>}

              <label htmlFor="username" className="mb-0.5">Username</label>
              <input type="text" id="username" className="w-full p-2 rounded-xl border-lightgray mb-2 box-border hover:bg-[lightgray]"/><br/>
              {error?.isUsernameError && <span className="text-[red]">{error.message}</span>}

              <h2 className="text-center">New password</h2>

              <label htmlFor="newPassword" className="mb-0.5">New Password</label>
              <input type="password" id="newpassword" className="w-full p-2 rounded-xl border-lightgray mb-2 box-border hover:bg-[lightgray]"/><br/>
              {error?.isNewPasswordError && <span className="text-[red]">{error.message}</span>}

              <label htmlFor="repeatPassword" className="mb-0.5">Repeat Password </label>
              <input type="password" id="repeatpassword" className="w-full p-2 rounded-xl border-lightgray mb-2 box-border hover:bg-[lightgray]"/><br/>
              {error?.isRepeatPasswordError && <span className="text-[red]">{error.message}</span>}

              <Button type="submit">Reset</Button>
              {error?.anotherError && <span className="text-[red]">{error.message}</span>}
            </div>
            <div className="flex justify-center bg-[lightgray] hover:bg-[#c3c3c2] rounded-xl p-1 my-1">
              <a id="login" onClick={handleLoginClick} className="no-underline text-[#042e5a]">
                LOGIN
              </a>
              <br />
            </div>
            <div className="flex justify-center bg-[lightgray] hover:bg-[#c3c3c2] rounded-xl p-1 my-1">
              <a id="register" onClick={handleRegisterClick} className="no-underline text-[#042e5a]">
                REGISTER
              </a>
              <br />
            </div>
          </Form>
        </main>
      </div>
    </>
  );
}
export default ResetPassword;
