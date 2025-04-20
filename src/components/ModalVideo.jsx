import React from "react";

const ModalVideo = ({ showModal, setShowModal }) => {
  if (!showModal) return null; // Si el modal no debe mostrarse, no renderizamos nada

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={() => setShowModal(false)} // Al hacer click fuera del modal, se cierra
    >
      <div
        className="bg-white p-4 rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()} // Evitar que el clic en el modal lo cierre
        style={{ width: "100%", maxWidth: "80%", minWidth: "60%" }}
      >
        <div className="flex justify-end">
          <button
            className="text-white bg-red-600 px-2 py-1 rounded-full"
            onClick={() => setShowModal(false)} // Botón de cerrar
          >
            X
          </button>
        </div>
        <iframe
          className="w-full h-72 sm:h-96 lg:h-[480px] rounded-lg mt-2 border-0"
          src="https://www.youtube.com/embed/cFoufhTlTKI"
          title="YouTube video Santa Rosa del Caño"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default ModalVideo;