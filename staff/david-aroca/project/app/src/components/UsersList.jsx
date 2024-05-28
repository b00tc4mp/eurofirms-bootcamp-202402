import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import retrieveUsers from "../logic/retrieveUsers"

function UsersList() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        retrieveUsers()
            .then(users => {
                setUsers(users)
                setLoading(false)
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
                setLoading(false)
            })
    }, [])

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
                        {users.map(user => (
                            <React.Fragment key={user._id}>
                                <hr className="h-1" />
                                <li className="text-lg font-bold bg-gray-200 p-4">
                                    <Link to={`/home/${user._id}`}>{user.name}</Link>
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

export default UsersList
