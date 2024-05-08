import React, { useState } from 'react';

function Diet() {
    const [diets, setDiets] = useState([]);

    const handleAddDiet = () => {
    }

    return (
        <div className='mt-20'>
            <h2 className="text-2xl font-bold mb-4">Diets</h2>
            <ul className="list-disc pl-6 mb-8">
                {diets.map((diet, index) => (
                    <li key={index} className="text-lg">{diet}</li>
                ))}
            </ul>
            <button className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4" onClick={handleAddDiet}>Add Diet</button>
        </div>
    );
}

export default Diet;
