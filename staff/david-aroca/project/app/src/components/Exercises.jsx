import { useEffect, useState } from "react"
import { useSearchParams } from 'react-router-dom'
import logic from "../logic"
import Exercise from "./Exercise"
import CreateExercise from "./CreateExercise"
function Exercises({ refreshStamp }) {
    const [exercises, setExercises] = useState([])
    const [showCreateExercise, setShowCreateExercise] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams()

    const userRole = logic.getLoggedInUserRole() // Obtengo el rol del usuario en este momento

    const query = searchParams.get('q')

    const handleSearchExerises = (event) => {
        event.preventDefault()
        const querySearched = event.target.query.value

        setSearchParams({ q: querySearched })

    }

    const refreshExercises = () => {
        try {
            logic.retrieveExercises()
                .then(exercises => setExercises(exercises))
                .catch(error => {
                    console.log(error)
                    alert(error.message)
                })
        } catch (error) {
            console.log(error)
            alert(error.message)
        }
    }

    const searchExercise = () => {
        try {
            logic.searchExercises(query)
                .then(exercises => setExercises(exercises))
                .catch(error => {
                    console.log(error)
                    alert(error.message)
                })
        } catch (error) {
            console.log(error)

            alert(error.message)
        }
    }

    useEffect(() => {
        if (query) searchExercise()

        else refreshExercises()
    }, [refreshStamp, query])

    const handleExerciseRemoved = () => refreshExercises()

    const handleExerciseUpdated = () => refreshExercises()

    const handleCreateExerciseClick = () => setShowCreateExercise(true)

    const handleCancelCreateExercise = () => setShowCreateExercise(false)

    const handleExerciseCreated = () => {
        refreshExercises()
        setShowCreateExercise(false)
    }

    return (
        <section className="flex flex-col gap-6 px-2 py-14">
            <form className='mt-20' onSubmit={handleSearchExerises}>
                <input
                    name="query"
                    type="text"
                    className="border border-gray-500 rounded-md px-4 py-2 mb-4"
                    placeholder="Search Exercises..."
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white rounded-md px-4 py-2"
                >
                    Search
                </button>
            </form>

            {showCreateExercise && userRole === 'trainer' && (
                <CreateExercise onCancelClick={handleCancelCreateExercise} onExerciseCreated={handleExerciseCreated} />
            )}

            <button className="fixed right-0 top-20 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded z-10" onClick={handleCreateExerciseClick}>
                Create Exercise
            </button>

            {exercises.map(exercise => (
                <Exercise key={exercise.id} exercise={exercise} onExerciseRemoved={handleExerciseRemoved} onExerciseModified={handleExerciseUpdated} />
            ))}
        </section>
    )
}

export default Exercises