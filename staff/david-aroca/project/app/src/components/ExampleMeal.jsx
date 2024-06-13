import React from 'react'

function ExampleMeal() {
    return (
        <div className="example-meal bg-gray-100 p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold mb-4">Ejemplo de una comida</h2>
            <ul className="list-disc pl-6">
                <li className="text-xl font-bold">Pollo a la plancha con arroz y verduras</li>
                <ul className="list-disc pl-6">
                    <li>200 gramos de pechuga de pollo: 220 kcal</li>
                    <li>1 taza de arroz blanco cocido: 330 kcal</li>
                    <li>1/2 taza de brócoli cocido: 55 kcal</li>
                    <li>1/2 zanahoria: 55 kcal</li>
                </ul>
            </ul>
            <p className="font-semibold mt-4">Total: 660 kcal</p>
        </div>
    )
}

export default ExampleMeal
