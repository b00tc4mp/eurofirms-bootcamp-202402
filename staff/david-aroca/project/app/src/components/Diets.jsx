import { useEffect, useState } from "react";
import logic from "../logic";
import Diet from "./Diet";
import CreateDiet from "./CreateDiet";

function Diets({ refreshStamp }) {
    const [diets, setDiets] = useState([]);
    const [showCreateDiet, setShowCreateDiet] = useState(false);

    const refreshDiets = () => {
        try {
            logic.retrieveDiet()
                .then(diets => setDiets(diets))
                .catch(error => {
                    console.log(error);
                    alert(error.message);
                });
        } catch (error) {
            console.log(error);
            alert(error.message);
        }
    };

    useEffect(() => {
        refreshDiets();
    }, [refreshStamp]);

    const handleDietRemoved = () => refreshDiets();

    const handleDietUpdated = () => refreshDiets();

    const handleCreateDietClick = () => setShowCreateDiet(true);

    const handleCancelCreateDiet = () => setShowCreateDiet(false);

    const handleDietCreated = () => {
        refreshDiets();
        setShowCreateDiet(false);
    };

    return (
        <section className="flex flex-col gap-6 px-2 py-14">
            {showCreateDiet ? (
                <CreateDiet onCancelClick={handleCancelCreateDiet} onDietCreated={handleDietCreated} />
            ) : (
                <>
                    <button className="fixed right-0 top-20 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleCreateDietClick}>
                        Create Diet
                    </button>
                    {diets.map(diet => (
                        <Diet key={diet.id} diet={diet} onDietRemoved={handleDietRemoved} onDietModified={handleDietUpdated} />
                    ))}
                </>
            )}
        </section>
    );
}

export default Diets;
