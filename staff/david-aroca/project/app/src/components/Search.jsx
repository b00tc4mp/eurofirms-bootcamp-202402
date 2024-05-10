import React, { useState } from 'react';

function Search() {
    return <div className='mt-20'>
        <input
            type="text"
            className="border border-gray-500 rounded-md px-4 py-2 mb-4"
            placeholder="Search diets or exercise..."
        />

        <ul className="list-disc pl-6 mb-8">
        </ul>
    </div>
}

export default Search