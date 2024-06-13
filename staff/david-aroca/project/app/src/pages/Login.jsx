import { errors } from 'com'
import logic from '../logic'

const { ContentError, MatchError } = errors;

function Login({ onUserLoggedIn, onRegisterClick }) {
    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;

        const username = form.username.value;
        const password = form.password.value;

        try {
            logic.loginUser(username, password)
                .then(() => onUserLoggedIn())
                .catch(error => {
                    console.error(error.message);

                    let feedback = error.message;

                    if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
                        feedback = `${feedback}, please correct it`;
                    else if (error instanceof MatchError)
                        feedback = `${feedback}, please verify credentials`;
                    else
                        feedback = 'sorry, there was an error, please try again later';

                    alert(feedback);
                });
        } catch (error) {
            console.error(error.message);

            let feedback = error.message;

            if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
                feedback = `${feedback}, please correct it`;
            else
                feedback = 'sorry, there was an error, please try again later';

            alert(feedback);
        }
    };

    const handleRegisterClick = event => {
        event.preventDefault();

        onRegisterClick();
    };

    console.debug('Login render');

    return (
        <main className="relative bg-gray-200 min-h-screen flex items-center justify-center">
            <img src="/pesa.png" alt="Moderate" className="absolute inset-0 w-90 h-auto mx-auto bg-opacity-50 z-0" />
            <div className="px-10 py-16 flex flex-col items-center relative z-10 bg-white shadow-md rounded"> {/* Formulario */}
                <h1 className="font-bold text-3xl text-center mb-8">Login</h1>
                <form className="w-full max-w-md" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Username</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="username" />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="password" id="password" />
                    </div>

                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Login</button>
                    </div>
                </form>

                <a className="text-red-500 hover:text-red-700 text-center text-sm font-bold underline mt-4" href="#" onClick={handleRegisterClick}>Register</a>

            </div>
        </main>
    );
}

export default Login;
