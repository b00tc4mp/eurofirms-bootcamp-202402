import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import logic from '../logic'

function SearchMeasure() {
    const [searchResults, setSearchResults] = useState([])
    const [query, setQuery] = useSearchParams()

    const handleSearchMeasure = (event) => {
        event.preventDefault()
        const querySearched = event.target.query.value
        setQuery({ q: querySearched })
    }

    useEffect(() => {
        const querySearched = query.get('q')
        if (querySearched) {
            logic.searchMeasure(querySearched)
                .then(measures => {
                    setSearchResults(measures)
                })
                .catch(error => {
                    console.error(error)
                    alert(error.message)
                })
        }
    }, [query])

    return (
        <div className='mt-20'>
            <form onSubmit={handleSearchMeasure} className="mb-8">
                <input
                    name="query"
                    type="date"
                    className="border border-gray-500 rounded-md px-4 py-2 mb-4"
                    placeholder="Search measures by date..."
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white rounded-md px-4 py-2"
                >
                    Search
                </button>
            </form>

            <ul className="list-disc pl-6 mb-8">
                {searchResults.map((measure, index) => (
                    <li key={index}>{measure.date}</li>
                ))}
            </ul>
        </div>
    )
}

export default SearchMeasure
