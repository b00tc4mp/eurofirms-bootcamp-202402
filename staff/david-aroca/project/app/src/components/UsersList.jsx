import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import retrieveUsers from "../logic/retrieveUsers"



function UsersList(props) {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        retrieveUsers()
            .then(users => {
                // Filtrar los usuarios por rol diferente al del usuario actual
                const filteredUsers = users.filter(user => user.role !== props.userRole)
                setUsers(filteredUsers)
                setLoading(false)
            })
            .catch(error => {
                console.error(error)
                // Manejar el error
            })
    }, [])

    if (loading) {
        return <p>Cargando...</p>
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
