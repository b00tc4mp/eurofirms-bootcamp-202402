import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import logic from "../logic";
import Measurements from "../components/Measurements";
import Exercises from "../components/Exercises";
import Diets from "../components/Diets";
import SearchExercise from "../components/SearchExercise";
import SearchDiet from "../components/SearchDiet";

function Home({ onUserLoggedOut }) {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        try {
            logic.retrieveUser()
                .then(user => setUser(user))
                .catch(error => {
                    console.error(error.message);
                    let feedback = error.message;

                    if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError) {
                        feedback = `${feedback}, please correct it `;
                    } else if (error instanceof MatchError) {
                        feedback = `${feedback}, please verify user`;
                    } else {
                        feedback = 'sorry, there was an error please try again later';
                    }
                    alert(feedback);
                });
        } catch (error) {
            console.error(error.message);
            let feedback = error.message;

            if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError) {
                feedback = `${feedback},please correct it`;
            } else {
                feedback = 'sorry, there was an error,please try again later';
            }
            alert(feedback);
        }
    }, []);

    const handleLogout = () => {
        logic.logoutUser();
        onUserLoggedOut();
    }

    const handleMeasureNavigate = () => {
        navigate('/measurements');
    }

    const handleHomeNavigate = () => {
        navigate('/');
    }

    const handleDietNavigate = () => {
        navigate('/diets');
    }

    const handleRoutineNavigate = () => {
        navigate('/routines');
    }

    console.log('HOME RENDER 💀')

    return (
        <>
            <header className="flex justify-between items-center border-b-2 border-black fixed top-0 w-full bg-gray-200 px-6 py-4 z-10">
                {user ? <h1 className="text-gray-800 text-xl font-bold">Hello, {user.name}</h1> : <p className="text-gray-800">Loading...</p>}

                <nav>
                    <button className="bg-gray-800 text-white hover:bg-gray-700 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleLogout}>Exit</button>
                </nav>
            </header>

            {/* Mostrar buscadores solo si estamos en la ruta de inicio ("/") */}
            {location.pathname === '/' && (
                <>
                    <SearchDiet />
                    <SearchExercise />
                </>
            )}

            <Routes>
                <Route path="/measurements" element={<Measurements />} />
                <Route path="/diets" element={<Diets />} />
                <Route path="/routines" element={<Exercises />} />
            </Routes>

            <footer className="flex justify-between items-center border-t-2 border-black fixed bottom-0 w-full bg-gray-200 px-6 py-4">
                <button className="text-gray-800 font-semibold hover:underline focus:outline-none focus:shadow-outline"
                    onClick={handleMeasureNavigate}
                >Measures</button>
                <button className="text-gray-800 font-semibold hover:underline focus:outline-none focus:shadow-outline"
                    onClick={handleHomeNavigate}
                >Home</button>
                <button className="text-gray-800 font-semibold hover:underline focus:outline-none focus:shadow-outline"
                    onClick={handleDietNavigate}
                >Diets</button>
                <button className="text-gray-800 font-semibold hover:underline focus:outline-none focus:shadow-outline"
                    onClick={handleRoutineNavigate}
                >Routines</button>
            </footer>
        </>
    )
}

export default Home;
