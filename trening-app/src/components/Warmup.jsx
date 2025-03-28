import React from "react";
import { useNavigate } from "react-router-dom";

const Warmup = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">Rozgrzewka</h1>
      <p className="text-lg mb-6">Zanim zaczniesz trening, poświęć 5-10 minut na rozgrzewkę!</p>
      <button 
        onClick={() => navigate("/benchpress")}
        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-lg shadow-lg transition-all"
      >
        Gotowy? Startujemy!
      </button>
    </div>
  );
};

export default Warmup;
