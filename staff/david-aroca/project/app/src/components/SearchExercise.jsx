import React, { useState } from 'react';

function SearchExercise() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        // Aquí podrías implementar la lógica para filtrar los resultados en base al término de búsqueda
        // Por ejemplo, podrías hacer una llamada a la API para obtener los resultados filtrados
        // setSearchResults(filteredResults);
    };

    return (
        <div className='mt-20'>
            <input
                type="text"
                className="border border-gray-500 rounded-md px-4 py-2 mb-4"
                placeholder="Search exercises..."
                value={searchTerm}
                onChange={handleSearchChange}
            />

            <ul className="list-disc pl-6 mb-8">
                {/* Renderiza los resultados de la búsqueda */}
                {searchResults.map((exercise, index) => (
                    <li key={index}>{exercise.title}</li>
                    // Suponiendo que cada ejercicio tiene una propiedad 'title', puedes cambiarla según tu estructura de datos
                ))}
            </ul>
        </div>
    );
}

export default SearchExercise;
