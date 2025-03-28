import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import benchPressVideo from "../../assets/wyciskanie_sztangi_na_lawce_plaskiej.mp4";

const BenchPress = () => {
    const navigate = useNavigate();
    const [modalContent, setModalContent] = useState(null);

    const openModal = (content) => setModalContent(content);
    const closeModal = () => setModalContent(null);

    const sections = {
        start: (
            <div>
                <h2 className="text-2xl font-bold mb-4">Pozycja wyjściowa</h2>
                <ol className="list-decimal list-inside space-y-2">
                    <li>Połóż się na ławce płaskiej.</li>
                    <li>Stopy ustaw w lekkim rozkroku i mocno zaprzyj o podłoże.</li>
                    <li>Chwyć sztangę nachwytem (palce wskazują przód, kciuki skierowane do środka) na taką szerokość, aby w połowie wykonywania ruchu kąt między ramieniem a przedramieniem wynosił 90 stopni.</li>
                    <li>Łopatki ściągnięte, barki opuszczone i mocno dociśnięte do ławeczki.</li>
                    <li>Zachowaj naturalne ustawienie kręgosłupa – odcinek lędźwiowy lekko uniesiony, pośladki na ławeczce.</li>
                </ol>
            </div>
        ),
        movement: (
            <div>
                <h2 className="text-2xl font-bold mb-4">Ruch</h2>
                <ol className="list-decimal list-inside space-y-2">
                    <li>Utrzymując prawidłową pozycję wyjściową, wykonaj wdech i powolnym ruchem opuść sztangę do środkowej części klatki piersiowej, uginając ramiona w łokciach.</li>
                    <li>Po przytrzymaniu sztangi w okolicach klatki przez ułamek sekundy zacznij unosić sztangę z powrotem do pozycji wyjściowej, wykonując wydech powietrza. Skup się, aby wyciskanie następowało z mięśnia piersiowego.</li>
                    <li>W momencie wyprostowania ramion ze sztangą (unikaj przeprostu w łokciach) mocno dopnij mięsień piersiowy, po czym ponownie zacznij opuszczać sztangę.</li>
                    <li>Wykonaj wyznaczoną liczbę powtórzeń.</li>
                </ol>
            </div>
        ),
        tips: (
            <div>
                <h2 className="text-2xl font-bold mb-4">Wskazówki</h2>
                <ol className="list-decimal list-inside space-y-2">
                    <li>Stopy mocno zaprzyj o podłogę.</li>
                    <li>Utrzymuj stałe napięcie mięśni.</li>
                    <li>Postaraj się nie wyginać nadmiernie nadgarstków.</li>
                    <li>Dbając o staw łokciowy, nie doprowadzaj do pełnego wyprostu ramienia pod ciężarem.</li>
                    <li>Skup się na prawidłowym oddychaniu.</li>
                    <li>Bądź skoncentrowany.</li>
                    <li>Wyciskając duże ciężary, poproś o pomoc i asekurację.</li>
                    <li>Nie odbijaj sztangi od klatki piersiowej.</li>
                    <li>Tempo opuszczania sztangi powinno być dwa razy wolniejsze niż jej wyciskanie.</li>
                </ol>
            </div>
        ),
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
            <h1 className="text-6xl font-bold mb-4">Wyciskanie leżąc</h1>
            <video
                className="w-full max-w-lg rounded-lg shadow-lg"
                autoPlay
                controls
                loop
                muted
            >
                <source src={benchPressVideo} type="video/mp4" />
            </video>

            <div className="flex flex-row w-full max-w-lg mt-4 bg-gray-800 rounded-xl overflow-hidden">
                <div
                    className="cursor-pointer flex-1 bg-gray-700 text-gray-200 text-center py-3 hover:bg-gray-600 transition-colors border-r border-gray-600"
                    onClick={() => openModal(sections.start)}
                >
                    Pozycja wyjściowa
                </div>
                <div 
                    className="cursor-pointer flex-1 bg-gray-700 text-gray-200 text-center py-3 hover:bg-gray-600 transition-colors border-r border-gray-600"
                    onClick={() => openModal(sections.movement)}
                    >
                    Ruch
                </div>
                <div 
                    className="cursor-pointer flex-1 bg-gray-700 text-gray-200 text-center py-3 hover:bg-gray-600 transition-colors"
                    onClick={() => openModal(sections.tips)}
                >
                    Wskazówki
                </div>
            </div>
            {/* MODAL */}
            {modalContent && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                    <div className="bg-gray-900 text-white p-6 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto relative">
                        <button
                            className="absolute cursor-pointer top-4 right-4 text-6x1 font-bold text-amber-400 hover:text-amber-300"
                            onClick={closeModal}
                        >
                            x
                        </button>
                        {modalContent}
                    </div>
                </div>
            )}
        </div>
    );
};
export default BenchPress;
