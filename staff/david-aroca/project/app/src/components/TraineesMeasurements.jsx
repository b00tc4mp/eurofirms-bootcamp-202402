import React, { useState, useEffect } from 'react'
import Measurement from './Measurement'
import logic from '../logic'

function TraineesMeasurements() {
    const [users, setUsers] = useState([])
    const [selectedUserId, setSelectedUserId] = useState('')
    const [measurements, setMeasurements] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const users = await logic.retrieveUsers() // Obtener la lista de usuarios
                setUsers(users)
            } catch (error) {
                setError(error.message)
            }
        }

        fetchUsers()
    }, [])

    const handleLoadMeasurements = async () => {
        try {
            setLoading(true)
            const measurements = await logic.retrieveMeasurements(selectedUserId)
            setMeasurements(measurements)
            setLoading(false)
        } catch (error) {
            setError(error.message)
            setLoading(false)
        }
    }

    return (
        <div className="trainees-measurements-container">
            <label htmlFor="userSelect">Select a user:</label>
            <select id="userSelect" value={selectedUserId} onChange={(e) => setSelectedUserId(e.target.value)}>
                <option value="">Select user...</option>
                {users.map(user => (
                    <option key={user.id} value={user.id}>{user.name}</option>
                ))}
            </select>
            <button onClick={handleLoadMeasurements} disabled={!selectedUserId}>Load Measurements</button>

            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {!loading && !error && measurements.length > 0 && (
                <div>
                    <h2>Measurements for {selectedUserId}</h2>
                    <ul>
                        {measurements.map(measurement => (
                            <Measurement key={measurement.id} measurement={measurement} />
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default TraineesMeasurements
