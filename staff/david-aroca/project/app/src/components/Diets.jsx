import { useEffect, useState } from "react";
import logic from "../logic";
import Diet from "./Diet";

function Diets({ refreshStamp }) {
    const [diets, setDiets] = useState([]);

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

    return (
        <section className="flex flex-col gap-6 px-2 py-14">
            {diets.map(diet => (
                <Diet key={diet.id} diet={diet} onDietRemoved={handleDietRemoved} onDietModified={handleDietUpdated} />
            ))}
        </section>
    );
}

export default Diets;
