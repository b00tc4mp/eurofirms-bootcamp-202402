import React, { useState } from 'react'

function PasswordModal({ onClose, onPasswordCorrect }) {
    const [password, setPassword] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()

        if (password === '4025') {
            onPasswordCorrect()
        } else {
            alert('Incorrect password')
        }
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-md">
                <h2 className="text-xl font-bold mb-4"> If You Want To Register As Trainer, Please Enter Password</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Submit
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="text-red-500 hover:text-red-700 font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PasswordModal
