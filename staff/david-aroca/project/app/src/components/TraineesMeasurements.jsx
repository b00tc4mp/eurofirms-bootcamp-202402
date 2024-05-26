import React, { useState, useEffect } from 'react'
import Measurement from './Measurement'
import logic from '../logic'

function TraineesMeasurements() {
    const [users, setUsers] = useState([])
    const [targetUserId, setTargetUserId] = useState('')
    const [measurements, setMeasurements] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const users = await logic.retrieveUsers()
                setUsers(users)
            } catch (error) {
                setError(error.message)
            }
        }

        fetchUsers()
    }, [])

    const handleSubmit = (event) => {
        try {
            event.preventDefault()

            const form = event.target

            const targetUserId = form.userSelect.value

            logic.retrieveUserMeasurements(targetUserId)
                .then((measurements) => {
                    setMeasurements(measurements)
                    setTargetUserId(targetUserId)
                })
                .catch(error => {
                    console.error(error)

                    alert(error.message)
                })
        } catch (error) {
            setError(error.message)
            setLoading(false)
        }
    }

    useEffect

    console.log(measurements)

    return (
        <div className="flex flex-col items-center py-10 px-4 bg-gray-50 min-h-screen">

            <form onSubmit={handleSubmit}>
                <label htmlFor="userSelect" className="text-lg font-semibold text-gray-700 mb-2">Select a user:</label>
                <select
                    id="userSelect"
                    className="w-64 border border-gray-300 rounded-md px-3 py-2 mb-4 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    {users.map(user => (
                        <option key={user.id} value={user.id}>{user.name}</option>
                    ))}
                </select>
                <button
                    type='submit'
                    className={`w-64 py-2 px-4 rounded-md text-slate-800 font-bold `}
                >
                    Load Measurements
                </button>
            </form>

            {loading && <p className="mt-4 text-blue-600">Loading...</p>}
            {error && <p className="mt-4 text-red-500">Error: {error}</p>}
            {!loading && !error && measurements.length > 0 && (
                <div className="mt-6 w-full max-w-4xl">
                    <h2 className="text-xl font-bold text-gray-700 mb-4">Measurements for {targetUserId}</h2>
                    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {measurements.map(measurement => (
                            <li key={measurement.id} className="bg-white p-4 rounded-lg shadow-md">
                                <Measurement measurement={measurement} />
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default TraineesMeasurements
