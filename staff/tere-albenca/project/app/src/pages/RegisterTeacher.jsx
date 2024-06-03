import logic from '../logic'
//import components from '../components'
import Form from '../components/Form.jsx'
import Button from '../components/Button.jsx'
import Hone from '../components/Hone.jsx'
import Span from '../components/Span.jsx'
import Input from '../components/Input.jsx'
import { errors } from 'com'
import { useState } from 'react'

const { ContentError, DuplicityError } = errors

function RegisterTeacher({ onTeacherRegistered, onLoginClick }) {
  const [error, setError] = useState(null)

  const errorHandle = (error) => {
    console.error(error)

    let feedback = error.message

    if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
      feedback = `${feedback}, please correct it`

    else if (error instanceof DuplicityError)
      feedback = `${feedback}, please try with another user`

    else
      feedback = 'sorry, there was an error, please try again later'

    let isNameError = false

    const isSurnameError = error.message.includes('surname')
    const isEmailError = error.message.includes('email')
    const isPasswordError = error.message.includes('password')

    if (!isSurnameError) isNameError = error.message.includes('name')

    const anotherError =
      !isNameError &&
      !isSurnameError &&
      !isEmailError &&
      !isPasswordError



    setError({
      message: feedback,
      isNameError,
      isSurnameError,
      isEmailError,
      isPasswordError,
      anotherError
    })
  }
  const handleSubmit = (event) => {
    event.preventDefault()

    const form = event.target

    const name = form.name.value
    const surname = form.surname.value
    const email = form.email.value
    const password = form.password.value


    try {
      logic.registerTeacher(name, surname, email, password)
        .then(() => onTeacherRegistered())
        .catch(error => {
          errorHandle(error)
        })
    } catch (error) {
      errorHandle(error)
    }
  }

  const handleLoginClick = (event) => {
    event.preventDefault()

    onLoginClick()
  }
  console.debug("Register teacher render");


  return (
    <div className='flex flex-col justify-center item-center mt-3 mb-1'>
      <main className='w-3/5 flex flex-col justify-center item-center mb-8' >
        <Hone className='text-center'>REGISTER TEACHER</Hone>
        <Form onSubmit={handleSubmit} className='max-w-sm'>

          <Input type='text' id='name' placeholder='name' /><br />
          {error?.isNameError && <Span></Span>}

          <Input type='text' id='surname' placeholder='Surname' /><br />
          {error?.isSurnameError && <Span></Span>}

          <Input type="text" id="email" placeholder='Email' /><br />
          {error?.isEmailError && <Span></Span>}

          <Input type='password' id='password' placeholder='Password' /><br />
          {error?.isPasswordError && <Span></Span>}

          <Button type='submit' >Register</Button>
          {error?.anotherError && <Span></Span>}

          <div className='flex justify-center bg-[lightgray] hover:bg-[#c3c3c2] rounded-xl p-1 my-1'>
            <a id='login' onClick={handleLoginClick} className='no-underline  text-blue-400 hover:bg-blue-700'>LOGIN</a>
          </div>
        </Form>
      </main>
    </div>
  )
}
export default RegisterTeacher