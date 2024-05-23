import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import logic from '../logic'
import RemoveUserButton from "./RemoveUserButton"

function TraineesList() {
    const [trainees, setTrainees] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const refreshTrainees = () => {
        setLoading(true)
        logic.retrieveTrainees()
            .then(trainees => {
                setTrainees(trainees)
                setLoading(false)
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
                setLoading(false)
            })
    }

    useEffect(() => {
        refreshTrainees()
    }, [])

    const handleDeleteUser = (removedUserId) => {
        setTrainees(previousTrainees => previousTrainees.filter(user => user._id !== removedUserId))
    }

    if (loading) {
        return <p>Cargando...</p>
    }

    if (error) {
        return <p>Error: {error}</p>
    }

    return (
        <main className="mt-20">
            <div id="container">
                <section>
                    <h2 className="text-xl font-bold text-center">Lista de Usuarios</h2>
                    <ul>
                        {trainees.map(user => (
                            <React.Fragment key={user._id}>
                                <hr className="h-1" />
                                <li className="user-item text-lg font-bold bg-gray-200 p-4" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Link to={`/home/${user._id}`}>{user.name}</Link>
                                    <RemoveUserButton userId={user._id} onUserRemoved={handleDeleteUser} />
                                </li>
                                <hr />
                            </React.Fragment>
                        ))}
                    </ul>
                </section>
            </div>
        </main>
    )
}

export default TraineesList;
