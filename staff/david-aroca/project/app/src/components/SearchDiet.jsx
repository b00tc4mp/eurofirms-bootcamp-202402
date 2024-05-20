import React, { useState } from 'react';

function SearchDiet() {
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
                placeholder="Search diets..."
                value={searchTerm}
                onChange={handleSearchChange}
            />

            <ul className="list-disc pl-6 mb-8">
                {/* Renderiza los resultados de la búsqueda */}
                {searchResults.map((diet, index) => (
                    <li key={index}>{diet.title}</li>
                    // Suponiendo que cada dieta tiene una propiedad 'title', puedes cambiarla según tu estructura de datos
                ))}
            </ul>
        </div>
    );
}

export default SearchDiet;
