import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { exercises } from "../data/exercisesData";
import Timer from "../components/Timer";
import SeriesTracker from "../components/SeriesTracker";
import WorkoutFooter from "../components/WorkoutFooter";

const ExercisePage = () => {
    const { id } = useParams();
    const location = useLocation();
    const { trainingPlan } = location.state || {
        trainingPlan: { exercises: [parseInt(id)] },
    };
    const exercise =
        exercises.find((ex) => ex.id === parseInt(id)) || exercises[0];
    const [modalContent, setModalContent] = useState(null);

    

    const openModal = (content) => setModalContent(content);
    const closeModal = () => setModalContent(null);

    const currentExerciseIndex = trainingPlan.exercises.indexOf(exercise.id);
    const totalExercises = trainingPlan.exercises.length;

    const renderSection = (section) => (
        <div>
            <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
            <ol className="list-decimal list-inside space-y-2">
                {section.content.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ol>
        </div>
    );

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-900 text-white">
            <h1 className="text-6xl font-bold mb-4 pt-8">{exercise.name}</h1>
            <div className="flex flex-row w-full max-w-lg m-2 bg-gray-800 rounded-xl overflow-hidden">
                {Object.entries(exercise.sections).map(([key, section]) => (
                    <div
                        key={key}
                        className="cursor-pointer flex-1 bg-gray-700 text-gray-200 text-center py-3 hover:bg-gray-600 transition-colors border-r border-gray-600 last:border-r-0"
                        onClick={() => openModal(renderSection(section))}
                    >
                        {section.title}
                    </div>
                ))}
            </div>
            <video
                className="w-full max-w-lg rounded-lg shadow-lg"
                autoPlay
                controls
                loop
                muted
            >
                <source src={`/assets/${exercise.video}`} type="video/mp4" />
            </video>
            <div className="m-2">
                <Timer />
            </div>
            <div className="m-2">
                <SeriesTracker />
            </div>
            {modalContent && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                    <div className="bg-gray-900 text-white p-6 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto relative">
                        <button
                            className="absolute top-4 right-4 text-2xl font-bold text-amber-400 hover:text-amber-300"
                            onClick={closeModal}
                        >
                            x
                        </button>
                        {modalContent}
                    </div>
                </div>
            )}
            <div className="pb-16">
                <WorkoutFooter
                    currentExercise={currentExerciseIndex}
                    totalExercises={totalExercises}
                    progress={
                        (currentExerciseIndex / (totalExercises - 1)) * 100 || 0
                    }
                    trainingPlan={trainingPlan}
                />
            </div>
        </div>
    );
};

export default ExercisePage;
