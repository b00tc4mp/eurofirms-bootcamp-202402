import React from 'react'
import logic from '../logic'

function RemoveUserButton({ userId, onUserRemoved }) {
    const handleRemoveUser = () => {
        try {
            if (confirm('Are you sure you want to delete this user?')) {
                logic.removeUser(userId)
                    .then(() => {
                        onUserRemoved(userId)
                    })
                    .catch(error => {
                        console.log(error)
                        alert(error.message)
                    })
            }
        } catch (error) {
            console.log(error)
            alert(error.message)
        }
    }

    return (
        <button
            onClick={handleRemoveUser}
            className="bg-red-500 text-white border-none rounded-md py-2 px-4 cursor-pointer text-lg font-bold outline-none shadow-md hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        >
            Remove User
        </button>
    )
}

export default RemoveUserButton
