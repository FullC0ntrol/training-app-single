import React from "react";
import { useNavigate } from "react-router-dom";

const trainingPlan = {
    0: { name: "Regeneracja", exercises: [] }, // Niedziela
    1: { name: "Klata + Triceps", exercises: [1, 2, 3, 4, 5, 6] }, // Poniedziałek
    2: { name: "Nogi + Biceps", exercises: [7, 8, 9, 10, 11] }, // Wtorek
    3: { name: "Plecy + Barki", exercises: [12, 13, 14, 15] }, // Środa
    4: { name: "Klata + Triceps", exercises: [1, 2, 3, 4, 5, 6] }, // Czwartek
    5: { name: "Nogi + Biceps", exercises: [7, 8, 9, 10, 11] }, // Piątek
    6: { name: "Plecy + Barki", exercises: [12, 13, 14, 15] }, // Sobota
};

const Home = () => {
    const navigate = useNavigate();
    const today = new Date().getDay();
    const days = [
        "Niedziela",
        "Poniedziałek",
        "Wtorek",
        "Środa",
        "Czwartek",
        "Piątek",
        "Sobota",
    ];
    const todayName = days[today];
    const todayTraining = trainingPlan[today];
    const startTraining = () => {
        navigate("/warmup", { state: { trainingPlan: todayTraining } });
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
            <h1 className="text-4xl font-bold mb-4">Witaj w {todayName}!</h1>
            <p className="text-xl mb-6">
                Dzisiaj robimy:{" "}
                <span className="text-orange-500 font-semibold">
                    {todayTraining.name}
                </span>
            </p>
            <button
                onClick={startTraining}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-lg shadow-lg transition-all"
            >
                ZACZYNAMY
            </button>
        </div>
    );
};

export default Home;
