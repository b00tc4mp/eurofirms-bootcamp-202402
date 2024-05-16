import { useEffect, useState } from "react";
import logic from "../logic";
import Exercise from "./Exercise";
import CreateExercise from "./CreateExercise";

function Exercises({ refreshStamp }) {
    const [exercises, setExercises] = useState([]);
    const [showCreateExercise, setShowCreateExercise] = useState(false);

    const refreshExercises = () => {
        try {
            logic.retrieveExercises()
                .then(exercises => setExercises(exercises))
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
        refreshExercises();
    }, [refreshStamp]);

    const handleExerciseRemoved = () => refreshExercises();

    const handleExerciseUpdated = () => refreshExercises();

    const handleCreateExerciseClick = () => setShowCreateExercise(true);

    const handleCancelCreateExercise = () => setShowCreateExercise(false);

    const handleExerciseCreated = () => {
        refreshExercises();
        setShowCreateExercise(false);
    };

    return (
        <section className="flex flex-col gap-6 px-2 py-14">
            {showCreateExercise ? (
                <CreateExercise onCancelClick={handleCancelCreateExercise} onExerciseCreated={handleExerciseCreated} />
            ) : (
                <>
                    <button className="fixed right-0 top-20 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleCreateExerciseClick}>
                        Create Exercise
                    </button>
                    {exercises.map(exercise => (
                        <Exercise key={exercise.id} exercise={exercise} onExerciseRemoved={handleExerciseRemoved} onExerciseModified={handleExerciseUpdated} />
                    ))}
                </>
            )}
        </section>
    );
}

export default Exercises;
