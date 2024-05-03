import logic from "../logic";
import Form from "../components/Form";
import Button from "../components/Button";
import { errors } from 'com'
import { useState } from "react";

const { ContentError, DuplicityError} = errors

function Register({ onUserRegistered, onLoginClick, onResetPasswordClick }) {
  const [error,setError] = useState(null)

  const errorHandle = (error)=>{
    console.error(error)
            
    let feedback = error.message

    if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
      feedback = `${feedback}, please correct it`

    else if (error instanceof DuplicityError)
      feedback = `${feedback}, please try with another user`

    else
      feedback = 'sorry, there was an error, please try again later'

    let isNameError = false
    
    const isLastnameError = error.message.includes('lastname')
    const isBirthdateError = error.message.includes('birthdate')
    const isEmailError = error.message.includes('email')
    const isUsernameError = error.message.includes('username')
    const isPasswordError = error.message.includes('password')
    
    if(!isUsernameError && !isLastnameError) isNameError = error.message.includes('name')

    const anotherError = 
    !isNameError && 
    !isLastnameError && 
    !isBirthdateError && 
    !isEmailError && 
    !isPasswordError && 
    !isUsernameError

    

    setError({
      message: feedback, 
      isNameError, 
      isLastnameError, 
      isBirthdateError, 
      isEmailError, 
      isUsernameError,
      isPasswordError, 
      anotherError
      })
  }
  const handleSubmit = (event) => {
    event.preventDefault()

    const form = event.target

    const name = form.name.value
    const lastname = form.lastname.value
    const birthdate = form.birthdate.value
    const email = form.email.value
    const username = form.username.value
    const password = form.password.value

    
    try {
      logic.registerUser(name, lastname, birthdate, email, username, password)
          .then (()=> onUserRegistered())
          .catch(error=> {
            errorHandle(error)
          })
    } catch (error) {
      errorHandle(error)
    }
  };

  const handleLoginClick = (event) => {
    event.preventDefault();

    onLoginClick();
  };
  console.debug("Register render");

  const handleResetPasswordClick = (event) => {
    event.preventDefault();
    onResetPasswordClick();
  };
  return (
    <div className="flex flex-col justify-center item-center mt-3 mb-1">
      <main className="w-3/5 flex flex-col justify-center item-center mb-8" >
        <h1 className="text-center">REGISTER</h1>
        <Form onSubmit={handleSubmit} className="max-w-sm">
          <label htmlFor="name" className="mb-0.5">Name</label>
          <input type="text" id="name" className="w-full p-2 rounded-xl border-lightgray mb-2 box-border hover:bg-[lightgray]"/><br/>
          {error?.isNameError && <span className="text-[red]">{error.message}</span>}

          <label htmlFor="lastname" className="mb-0.5">Lastname</label>
          <input type="text" id="lastname" className="w-full p-2 rounded-md border-lightgray mb-2 box-border hover:bg-[lightgray]" /><br/>
          {error?.isLastnameError && <span className="text-[red]">{error.message}</span>}
          
          <label htmlFor="birthdate" className="mb-0.5">Birthdate</label>
          <input type="date" id="birthdate" className="w-full p-2 rounded-md border-lightgray mb-2 box-border hover:bg-[lightgray]" /><br/>
          {error?.isBirthdateError && <span className="text-[red]">{error.message}</span>}

          <label htmlFor="email" className="mb-0.5">Email</label>
          <input type="text" id="email" className="w-full p-2 rounded-md border-lightgray mb-2 box-border hover:bg-[lightgray]" /><br/>
          {error?.isEmailError && <span className="text-[red]">{error.message}</span>}

          <label htmlFor="username" className="mb-0.5">Username</label>
          <input type="text" id="username" className="w-full p-2 rounded-md border-lightgray mb-2 box-border hover:bg-[lightgray]" /><br/>
          {error?.isUsernameError && <span className="text-[red]">{error.message}</span>}

          <label htmlFor="password" className="mb-0.5">Password</label>
          <input type="password" id="password" className="w-full p-2 rounded-md border-lightgray mb-2 box-border hover:bg-[lightgray]"/><br/>
          {error?.isPasswordError && <span className="text-[red]">{error.message}</span>}

          <Button type="submit" >Register</Button>
          {error?.anotherError && <span className="text-[red]">{error.message}</span>}

          <div className="flex justify-center bg-[lightgray] hover:bg-[#c3c3c2] rounded-xl p-1 my-1">
            <a onClick={handleResetPasswordClick} className="no-underline text-[#042e5a]">RESET PASSWORD</a>
          </div>
          <div className="flex justify-center bg-[lightgray] hover:bg-[#c3c3c2] rounded-xl p-1 my-1">
            <a id="login" onClick={handleLoginClick}  className="no-underline text-[#042e5a]">LOGIN</a>
          </div>
        </Form>
      </main>
    </div>
  );
}
export default Register;
