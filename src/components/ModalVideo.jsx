import React from "react";
import Modal from "react-modal";
import YouTube from "react-youtube";

// Estilos de animación para el modal
const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: 50,
    transition: "opacity 300ms ease-in-out",
  },
  content: {
    maxWidth: "90%",
    width: "800px",  // Establecer el ancho máximo del modal
    maxHeight: "90%",
    height: "auto",  // Ajustar automáticamente la altura
    border: "none",
    background: "white",
    borderRadius: "0.75rem",
    padding: "0",
    overflow: "hidden",
    transition: "transform 300ms ease-in-out",
    margin: "auto", // Esto debería centrar el modal horizontal y verticalmente
    position: "relative", // Esto es importante para que el modal se posicione correctamente
  },
};

// Necesario para accesibilidad
Modal.setAppElement("#root");

const ModalVideo = ({ showModal, setShowModal }) => {
  const handleVideoEnd = () => {
    setShowModal(false);
  };

  const opts = {
    width: "100%",
    height: "450",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <Modal
      isOpen={showModal}
      onRequestClose={() => setShowModal(false)}
      style={customStyles}
      closeTimeoutMS={300} // Suaviza la salida
      contentLabel="Video Modal"
    >
      <div className="relative">
        {/* Botón de cierre */}
        <button
          className="absolute top-2 right-2 text-white bg-red-600 hover:bg-red-700 px-3 py-1 rounded-full z-10"
          onClick={() => setShowModal(false)}
        >
          X
        </button>

        {/* Video de YouTube */}
        <YouTube videoId="cFoufhTlTKI" opts={opts} onEnd={handleVideoEnd} />
      </div>
    </Modal>
  );
};

export default ModalVideo;