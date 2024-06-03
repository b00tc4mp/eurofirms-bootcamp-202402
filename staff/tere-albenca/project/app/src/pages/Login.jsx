import logic from '../logic'
import Form from '../components/Form'
import Button from '../components/Button'
import Input from '../components/Input'
import Hone from '../components/Hone'
import { errors } from 'com'
import { useState } from 'react'

const { ContentError, MatchError } = errors

function Login({ onUserLoggedIn, onRegisterClick }) {

  const [error, setError] = useState(null)

  const errorHandle = (error) => {
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
    const anotherError = !isEmailError && !isPasswordError

    setError({ message: feedback, isEmailError, isPasswordError, anotherError })
  }

  const handleSubmit = (event) => {

    event.preventDefault()

    const form = event.target

    const email = form.email.value
    const password = form.password.value

    try {
      logic.loginUser(email, password)
        .then(() => { onUserLoggedIn() })
        .catch(error => {
          errorHandle(error)
        })
    } catch (error) {
      errorHandle(error)
    }

  }

  const handleRegisterClick = (event) => {
    event.preventDefault()

    onRegisterClick()
  }

  return (
    <div className='flex items-center justify-center h-screen w-screen bg-[whitesmoke] overflow-hidden'>
      <div className='my-10 w-full max-w-md p-8 bg-white rounded-lg shadow-lg'>
        <main className='w-full max-w-md flex flex-col justify-center items-center mb-2'>
          <Hone className='text-center mb-4'>LOGIN</Hone>

          <img
            src='../src/assets/images/cabecera.jpg'
            alt='logo'
            className='h-40'
          />

          <Form onSubmit={handleSubmit} className='w-full flex justify-center'>
            <label htmlFor='email'>Email</label>
            <Input type='text' id='email' placeholder=' ' />
            {error?.isEmailError && <span className='text-[#C13E65]'>{error.message}</span>}

            <label htmlFor='password'>Password</label>
            <Input type='password' id='password' placeholder='' />
            {error?.isPasswordError && <span className='text-[#C13E65]'>{error.message}</span>}

            <Button type="submit">LOGIN</Button>
            {error?.anotherError && <span className='text-[#C13E65]'>{error.message}</span>}

            <div className='flex justify-center bg-[lightgray] hover:bg-[#c3c3c2] rounded-xl p-1 my-1'>
              <a onClick={handleRegisterClick} className='no-underline text-blue-900 font-semibold'>Register</a>
              <br />
            </div>
          </Form>
        </main>
      </div>
    </div>
  )
}
export default Login