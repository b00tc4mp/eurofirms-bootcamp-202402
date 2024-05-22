import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import logic from '../logic'

function SearchDiet() {
    const [searchResults, setSearchResults] = useState([])
    const [query, setQuery] = useSearchParams()

    const handleSearchDiet = (event) => {
        event.preventDefault()
        const querySearched = event.target.query.value
        setQuery({ q: querySearched })
    }

    const searchMeasures = () => {
        try {
            logic.searchMeasures(startDate, endDate)
                .then(measures => setMeasurements(measures))
                .catch(error => {
                    console.log(error)
                    alert(error.message)
                })
        } catch (error) {
            console.log(error)
            alert(error.message)
        }
    }

    return (
        <div className='mt-60'>
            <form onSubmit={handleSearchDiet} className="mb-8">
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

            <ul className="list-disc pl-6">
                {searchResults.map((diet, index) => (
                    <li key={index} className="mb-2">{diet.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default SearchDiet
