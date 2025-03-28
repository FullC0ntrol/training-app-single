import React from "react";
import { useNavigate } from "react-router-dom";

const trainingPlan = {
    1: "Klata + Tric",
    2: "Uda + Łydki",
    3: "Plecy + Barki",
    4: "Klata + Tric",
    5: "Uda + Łydki",
    6: "Plecy + Barki",
    0: "Regeneracja",
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
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
            <h1 className="text-4xl font-bold mb-4">Witaj w, {todayName}!</h1>
            <p className="text-xl mb-6">Dzisiaj robimy: <span className="text-orange-500 font-semibold">{todayTraining}</span></p>
            <button 
        onClick={() => navigate("/warmup")}
        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-lg shadow-lg transition-all"
      >
        ZACZYNAMY
      </button>
        </div>
    );
};
export default Home;
