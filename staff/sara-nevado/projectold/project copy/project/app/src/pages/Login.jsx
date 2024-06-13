import { errors } from 'com'
import logic from '../logic'

const { ContentError, MatchError } = errors

function Login({ onUserLoggedIn, onRegisterClick }) {
    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target
        const email = form.email.value
        const password = form.password.value

        try {
            logic.loginUser(email, password)
                .then(() => onUserLoggedIn())
                .catch(error => {
                    console.error(error.message)

                    let feedback = error.message

                    if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
                        feedback = `${feedback}, please correct it`
                    else if (error instanceof MatchError)
                        feedback = `${feedback}, please verify credentials`
                    else
                        feedback = 'sorry, there was an error, please try again later'

                    alert(feedback)
                })
        } catch (error) {
            console.error(error.message)

            let feedback = error.message

            if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
                feedback = `${feedback}, please correct it`
            else
                feedback = 'sorry, there was an error, please try again later'

            alert(feedback)
        }
    }

    const handleRegisterClick = event => {
        event.preventDefault()

        onRegisterClick()
    }

    console.debug('Login render')
    
    return (
      <main className="flex justify-center items-center h-screen bg-gray-900"> 
        <div className="max-w-md w-full px-8 py-8 bg-gray-800 rounded-md shadow-md"> 
          <h1 className="font-bold text-3xl text-white text-center mb-6">Login</h1> 
      
          <form onSubmit={handleSubmit} className="mb-6">
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-semibold mb-2 text-white">E-mail</label> 
              <input className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-500" type="text" id="email" />
            </div>
      
            <div className="mb-6">
              <label htmlFor="password" className="block text-lg font-semibold mb-2 text-white">Password</label> 
              <input className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-500" type="password" id="password" />
            </div>
      
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md w-full" type="submit">Login</button>
          </form>

          <p className="text-center">
            Don't have an account? <button className="text-blue-500" onClick={handleRegisterClick}>Register</button>
          </p>
        </div>
      </main>
    )
}

export default Login
