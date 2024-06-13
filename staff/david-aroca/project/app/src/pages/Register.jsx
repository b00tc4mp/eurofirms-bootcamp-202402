import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { errors } from 'com';
import logic from '../logic';
import PasswordModal from '../components/PasswordModal';

const { ContentError, DuplicityError } = errors;

function Register({ onUserRegistered, onLoginClick }) {
    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const birthdate = form.birthdate.value;
        const email = form.email.value;
        const username = form.username.value;
        const password = form.password.value;

        try {
            logic.registerUser(name, birthdate, email, username, password)
                .then(() => onUserRegistered())
                .catch(error => {
                    console.error(error.message);

                    let feedback = error.message;

                    if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
                        feedback = `${feedback}, please correct it`;
                    else if (error instanceof DuplicityError)
                        feedback = `${feedback}, please try with another user`;
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

    const handleLoginClick = event => {
        event.preventDefault();
        onLoginClick();
    };

    const handleRegisterAsTrainerClick = event => {
        event.preventDefault();
        setShowPasswordModal(true);
    };

    const handleCloseModal = () => {
        setShowPasswordModal(false);
    };

    const handlePasswordCorrect = () => {
        setShowPasswordModal(false);
        navigate('/register-trainer'); // Navigate to the register trainer page
    };

    console.debug('Register render');

    return (
        <main>
            <div className="bg-gray-200 min-h-screen flex justify-center items-center">
                <main className="px-10 py-16 flex flex-col items-center">
                    <h1 className="font-bold text-3xl text-center mb-8">Register</h1>

                    <form className="w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="name" />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="birthdate">Birthdate</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="date" id="birthdate" />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">E-mail</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" id="email" />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Username</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="username" />
                        </div>

                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="password" id="password" />
                        </div>

                        <div className="flex items-center justify-between">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Register</button>
                        </div>
                    </form>

                    <a className="text-blue-500 hover:text-blue-700 text-center text-sm font-bold underline" href="#" onClick={handleLoginClick}>
                        Login
                    </a>
                    <button className="text-green-500 hover:text-green-700 text-center text-sm font-bold underline mt-4 focus:outline-none" onClick={handleRegisterAsTrainerClick}>
                        Register as Trainer
                    </button>
                </main>
            </div>
            {showPasswordModal && <PasswordModal onClose={handleCloseModal} onPasswordCorrect={handlePasswordCorrect} />}
        </main>
    );
}

export default Register;
