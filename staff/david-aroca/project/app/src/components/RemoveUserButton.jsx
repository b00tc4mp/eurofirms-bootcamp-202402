import logic from '../logic';

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
            style={{
                backgroundColor: '#FF6347',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '5px',
                padding: '10px 20px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 'bold',
                outline: 'none',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
            }}
        >
            Remove User
        </button>
    )
}

export default RemoveUserButton;
