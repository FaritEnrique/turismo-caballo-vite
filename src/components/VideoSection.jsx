import React, { useState } from "react";
import ModalVideo from "./ModalVideo"; // Asegúrate de que la ruta sea correcta

const VideoSection = () => {
  const [showModal, setShowModal] = useState(false);

  const handlePlayClick = () => {
    setShowModal(true); // Mostrar el modal al hacer clic en el video
  };

  return (
    <main>
      {/* Video se adapta en pantallas grandes y pequeños */}
      <div className="w-full flex flex-col items-center justify-center bg-white p-2 rounded-lg shadow-md">

        {/* Contenedor de la imagen y el contenido centrado */}
        <div className="relative w-full h-full bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
          <img
            src="https://img.youtube.com/vi/cFoufhTlTKI/maxresdefault.jpg" // Thumbnail del video
            alt="Santa Rosa del Caño"
            className="w-full h-full object-cover"
          />

          {/* Contenido centrado sobre la imagen */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50">
            <h1 className="font-bold text-lg sm:text-2xl">Video</h1>
            <h2 className="text-gray-300 mt-1 sm:text-xl">Santa Rosa del Caño</h2>
            <button
              onClick={handlePlayClick}
              className="mt-4 bg-teal-600 text-white p-3 rounded-full hover:bg-teal-700"
            >
              Play Video
            </button>
          </div>
        </div>

        {/* ModalVideo se muestra al hacer clic en Play */}
        <ModalVideo showModal={showModal} setShowModal={setShowModal} />
      </div>
    </main>
  );
};

export default VideoSection;