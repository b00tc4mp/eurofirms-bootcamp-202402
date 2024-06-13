import React, { useState } from 'react';
import { errors } from 'com';
import logic from '../logic';

const { ContentError, DuplicityError } = errors;

function RegisterTrainer({ onUserRegistered, onLoginClick }) {
    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const birthdate = form.birthdate.value;
        const email = form.email.value;
        const username = form.username.value;
        const password = form.password.value;

        try {
            logic.registerTrainer(name, birthdate, email, username, password)
                .then(() => onUserRegistered())
                .catch((error) => {
                    console.error(error.message);

                    let feedback = error.message;

                    if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
                        feedback = `${feedback}, please correct it`;
                    else if (error instanceof DuplicityError)
                        feedback = `${feedback}, please try with another user`;
                    else feedback = 'sorry, there was an error, please try again later';

                    alert(feedback);
                });
        } catch (error) {
            console.error(error.message);

            let feedback = error.message;

            if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
                feedback = `${feedback}, please correct it`;
            else feedback = 'sorry, there was an error, please try again later';

            alert(feedback);
        }
    };

    const handleLoginClick = (event) => {
        event.preventDefault();
        onLoginClick();
    };

    console.debug('Register render');

    return (
        <main className="bg-gray-100 min-h-screen flex justify-center items-center">
            <div className="w-full max-w-lg bg-white shadow-lg rounded-lg px-8 py-10">
                <h1 className="font-bold text-4xl text-center mb-6 text-blue-600">Register</h1>
                <h2 className="font-bold text-2xl text-center mb-8 text-gray-700">Welcome Trainer</h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            id="name"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="birthdate">Birthdate</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="date"
                            id="birthdate"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">E-mail</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="email"
                            id="email"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Username</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            id="username"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="password"
                            id="password"
                        />
                    </div>

                    <div className="flex items-center justify-center">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Register As Trainer
                        </button>
                    </div>
                </form>

                <a
                    className="block text-center text-red-500 hover:text-red-700 text-sm font-bold underline mt-6"
                    href="#"
                    onClick={handleLoginClick}
                >
                    Login
                </a>
            </div>
        </main>
    );
}

export default RegisterTrainer;
