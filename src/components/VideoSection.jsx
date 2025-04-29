import React, { useState } from "react";
import ModalVideo from "./ModalVideo";

const VideoSection = () => {
  const [showModal, setShowModal] = useState(false);

  const handlePlayClick = () => {
    setShowModal(true);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      {/* Contenedor de la imagen y el contenido centrado */}
      <div className="relative w-full bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
        <img
          src="https://img.youtube.com/vi/cFoufhTlTKI/maxresdefault.jpg"
          alt="Santa Rosa del Caño"
          className="w-full object-cover"
        />

        {/* Contenido centrado sobre la imagen */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50 p-4">
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
  );
};

export default VideoSection;