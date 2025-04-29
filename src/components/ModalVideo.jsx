import React from "react";

const ModalVideo = ({ showModal, setShowModal }) => {
  if (!showModal) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4 animate-fadeIn"
      onClick={() => setShowModal(false)}
    >
      <div
        className="bg-white rounded-lg shadow-lg w-full max-w-3xl transform scale-95 animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end p-2">
          <button
            className="text-white bg-red-600 hover:bg-red-700 px-3 py-1 rounded-full"
            onClick={() => setShowModal(false)}
          >
            X
          </button>
        </div>

        {/* Contenedor responsivo para video */}
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-b-lg border-0"
            src="https://www.youtube.com/embed/cFoufhTlTKI"
            title="YouTube video Santa Rosa del Caño"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ModalVideo;