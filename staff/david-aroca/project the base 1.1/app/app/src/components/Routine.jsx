import React, { useState } from 'react';

function Routine() {
    const [routines, setRoutines] = useState([]);

    const handleAddRoutine = () => {
    }

    return (
        <div className='mt-20'>
            <h2 className="text-2xl font-bold mb-4">Routines</h2>
            <ul className="list-disc pl-6 mb-8">
                {routines.map((routine, index) => (
                    <li key={index} className="text-lg">{routine}</li>
                ))}
            </ul>
            <button className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4" onClick={handleAddRoutine}>Add Routine</button>
        </div>
    );
}

export default Routine;
