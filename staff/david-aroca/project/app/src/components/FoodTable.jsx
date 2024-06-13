import React from 'react'

function FoodTable() {
    return (
        <div className="food-table bg-gray-100 p-6 rounded-lg shadow-md mb-20">
            <h2 className="text-2xl font-bold mb-4">Ejemplo tabla de alimentos</h2>

            <h3 className="text-xl font-semibold mt-4">Cereales y Tubérculos</h3>
            <ul className="list-disc pl-6">
                <li>Arroz blanco cocido ½ taza: 70 kcal</li>
                <li>Tortilla de maíz 1 pieza: 70 kcal</li>
                <li>Bolillo sin migajón ½ pieza: 70 kcal</li>
                <li>Pan de caja (Blanco o integral) ½ pieza: 70 kcal</li>
                <li>Pasta hervida ½ taza: 70 kcal</li>
                <li>Cereal con azúcar 1/3 de taza: 70 kcal</li>
                <li>Papa (hervida o al horno) ½ pieza: 70 kcal</li>
                <li>Galleta maría 5 piezas: 70 kcal</li>
                <li>Pan dulce (cuernito, concha) 1 pieza: 115 kcal</li>
                <li>Maíz en grano ½ taza: 70 kcal</li>
                <li>Camote cocido ½ pieza: 70 kcal</li>
                <li>Avena cocida ½ taza: 70 kcal</li>
                <li>Trigo cocido ½ taza: 70 kcal</li>
                <li>Cereal de trigo inflado 1 taza: 70 kcal</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">Verduras</h3>
            <ul className="list-disc pl-6">
                <li>Jitomate bola 1 pieza: 25 kcal</li>
                <li>Cebolla blanca cruda 1/2 taza: 25 kcal</li>
                <li>Chile de árbol 4 piezas: 25 kcal</li>
                <li>Zanahoria cruda 1/2 taza: 25 kcal</li>
                <li>Calabacita cocida 1/2 taza: 25 kcal</li>
                <li>Chayote cocido 1/2 pieza: 25 kcal</li>
                <li>Espinaca cruda 2 tazas: 25 kcal</li>
                <li>Brócoli cocido 1/2 taza: 27 kcal</li>
                <li>Coliflor cocida 1/2 taza: 25 kcal</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">Alimentos de origen animal</h3>
            <ul className="list-disc pl-6">
                <li>Bistec de res 30 gramos: 40 kcal</li>
                <li>Pechuga de pollo asada 30 gramos: 40 kcal</li>
                <li>Blanco de nilo (pescado) 40 gramos: 40 kcal</li>
                <li>Atún en agua 40 gramos: 40 kcal</li>
                <li>Pechuga de pavo 2 rebanadas: 40 kcal</li>
                <li>Falda o pierna de cerdo 40 gramos: 55 kcal</li>
                <li>Queso fresco 40 gramos: 55 kcal</li>
                <li>Queso panela 40 gramos: 55 kcal</li>
                <li>Queso Oaxaca 30 gramos: 55 kcal</li>
                <li>Jamón de pavo y/o pierna 2 rebanadas: 55 kcal</li>
                <li>Salmón ahumado 40 gramos: 55 kcal</li>
                <li>Filete de cerdo 30 gramos: 55 kcal</li>
                <li>Huevo cocido 1 pieza: 70 kcal</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">Leche y derivados</h3>
            <ul className="list-disc pl-6">
                <li>Leche entera 1 taza: 150 kcal</li>
                <li>Leche descremada 1 taza: 95 kcal</li>
                <li>Leche evaporada 1/4 de taza: 150 kcal</li>
                <li>Yogurt natural 1 taza: 150 kcal</li>
                <li>Queso cheddar 30 gramos: 115 kcal</li>
                <li>Yogurt griego 1 taza: 150 kcal</li>
                <li>Leche de almendras 1 taza: 30 kcal</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">Leguminosas</h3>
            <ul className="list-disc pl-6">
                <li>Frijol 1/2 taza: 120 kcal</li>
                <li>Garbanzo 1/2 taza: 120 kcal</li>
                <li>Habas 1/2 taza: 120 kcal</li>
                <li>Lentejas 1/2 taza: 120 kcal</li>
                <li>Alubias 1/2 taza: 120 kcal</li>
                <li>Soja cocida 1/2 taza: 120 kcal</li>
                <li>Chícharos 1/2 taza: 120 kcal</li>
                <li>Garbanzos 1/2 taza: 120 kcal</li>
            </ul>
        </div>
    )
}

export default FoodTable
