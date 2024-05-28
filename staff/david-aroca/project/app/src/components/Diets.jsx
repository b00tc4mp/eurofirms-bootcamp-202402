import { useEffect, useState } from "react"
import { useSearchParams } from 'react-router-dom'
import logic from "../logic"
import Diet from "./Diet"
import CreateDiet from "./CreateDiet"

function Diets({ refreshStamp }) {
    const [diets, setDiets] = useState([])
    const [showCreateDiet, setShowCreateDiet] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams()

    const userRole = logic.getLoggedInUserRole() // Obtengo el rol del usuario en este momento

    const query = searchParams.get('q')

    const handleSearchDiet = (event) => {
        event.preventDefault()
        const querySearched = event.target.query.value

        setSearchParams({ q: querySearched })
    }

    const refreshDiets = () => {
        try {
            logic.retrieveDiets()
                .then(diets => setDiets(diets))
                .catch(error => {
                    console.log(error)
                    alert(error.message)
                })
        } catch (error) {
            console.log(error)
            alert(error.message)
        }
    }

    const searchDiets = () => {
        try {
            logic.searchDiets(query)
                .then(diets => setDiets(diets))
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
        if (query) searchDiets()
        else refreshDiets()
    }, [refreshStamp, query])

    const handleDietRemoved = () => refreshDiets()

    const handleDietUpdated = () => refreshDiets()

    const handleCreateDietClick = () => setShowCreateDiet(true)

    const handleCancelCreateDiet = () => setShowCreateDiet(false)

    const handleDietCreated = () => {
        refreshDiets()
        setShowCreateDiet(false)
    }

    return (
        <section className="flex flex-col gap-6 px-2 py-14">
            <form className='mt-20' onSubmit={handleSearchDiet}>
                <input
                    name="query"
                    type="text"
                    className="border border-gray-500 rounded-md px-4 py-2 mb-4"
                    placeholder="Search diets..."
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white rounded-md px-4 py-2"
                >
                    Search
                </button>
            </form>

            {showCreateDiet && userRole === 'trainer' && (
                <CreateDiet onCancelClick={handleCancelCreateDiet} onDietCreated={handleDietCreated} />
            )}

            {userRole === 'trainer' && (
                <button className="fixed right-0 top-20 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded z-10" onClick={handleCreateDietClick}>
                    Create Diet
                </button>
            )}

            {diets.map(diet => (
                <Diet key={diet.id} diet={diet} onDietRemoved={handleDietRemoved} onDietModified={handleDietUpdated} />
            ))}
        </section>
    )
}

export default Diets
