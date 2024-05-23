import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import logic from '../logic'


function TrainerList() {
    const [trainer, setTrainer] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        logic.retrieveTrainer()
            .then(trainer => {
                setTrainer(trainer)
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
                    <h2 className="text-xl font-bold text-center">Tu Entrenador</h2>
                    <ul>
                        {trainer.map(user => (
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

export default TrainerList
