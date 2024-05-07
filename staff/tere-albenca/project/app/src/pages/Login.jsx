import logic from "../logic";
import Form from "../components/Form";
import Button from "../components/Button";
import Input from "../components/Input";
import Span from "../components/Span"
import Label from "../components/Label"
import Hone from "../components/Hone"
import { errors } from "../../../com"
import { useState } from "react";

const { ContentError, MatchError} = errors

function Login({ onUserLoggedIn, onRegisterClick, onResetPasswordClick }) {

  const [error, setError]= useState(null)
  
  const errorHandle = (error) =>{
    console.error(error.message)
        
    let feedback = error.message

    if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
        feedback = `${feedback}, please correct it`
    else if (error instanceof MatchError)
        feedback = `${feedback}, please verify credentials`
    else
        feedback = 'sorry, there was an error, please try again later'

    const isEmailError = error.message.includes('email')
    const isPasswordError = error.message.includes('password')
    const anotherError = !isUsernameError && !isPasswordError

    setError({message: feedback,isEmailError,isPasswordError, anotherError})
  }

  const handleSubmit = (event) => {

    event.preventDefault();

    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;
    
    try {
      logic.loginUser(email, password)
      .then(()=> { onUserLoggedIn()})
      .catch(error => {
          errorHandle(error)
      })
    } catch (error) {
      errorHandle(error)
    }

  };

  const handleRegisterClick = (event) => {
    event.preventDefault();

    onRegisterClick();
  };

  const handleResetPasswordClick = (event) => {
    event.preventDefault();
    onResetPasswordClick();
  };

  return (
    <>
      <div className="flex flex-col justify-center item-center mt-3 mb-1">
        <main className="w-3/5 flex flex-col justify-center item-center mb-8">
          <Hone className="text-center">LOGIN</Hone>
          <Form onSubmit={handleSubmit} className="max-w-sm">
            <Label htmlFor="email">Email</Label>
            <Input type="text" id="username" placeholder=" "/>
            {error?.isEmailError && <Span></Span>}

            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" placeholder=""/>
            {error?.isPasswordError && <Span></Span>}
            
            <Button type="submit">LOGIN</Button>
            {error?.anotherError && <Span></Span>}

            <div className="flex justify-center bg-[lightgray] hover:bg-[#c3c3c2] rounded-xl p-1 my-1">
              <a onClick={handleResetPasswordClick} className="no-underline text-[#25676d] hover:bg-[#25676D]">Reset password</a>
            </div>
            <div className="flex justify-center bg-[lightgray] hover:bg-[#c3c3c2] rounded-xl p-1 my-1">
              <a onClick={handleRegisterClick} className="no-underline text-[#25676d] hover:bg-[#25676D]">Register</a>
              <br />
            </div>
          </Form>
        </main>
      </div>
    </>
  );
}
export default Login;