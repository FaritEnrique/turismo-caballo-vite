import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Carrusel3D = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "https://i.postimg.cc/qvnPs6KM/carrusel01.jpg",
    "https://i.postimg.cc/1XfTf8PS/carrusel02.jpg",
    "https://i.postimg.cc/fWrp1fjR/carrusel03.jpg",
    "https://i.postimg.cc/jjtFygKZ/carrusel04.jpg",
    "https://i.postimg.cc/50kKdfzR/carrusel05.jpg",
    "https://i.postimg.cc/qBN4tR1g/carrusel06.jpg",
  ];

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const getPosition = (index) => {
    const left1 = (currentSlide - 2 + slides.length) % slides.length;
    const left2 = (currentSlide - 1 + slides.length) % slides.length;
    const right1 = (currentSlide + 1) % slides.length;
    const right2 = (currentSlide + 2) % slides.length;

    if (index === currentSlide) return "center";
    if (index === left1 || index === left2) return "left";
    if (index === right1 || index === right2) return "right";
    return "hidden";
  };

  const styles = {
    center: "w-[71.875%] sm:w-[57.5%] z-20 scale-100",
    left: "w-[35.9375%] sm:w-[28.75%] z-10 scale-75 -translate-x-full opacity-80",
    right: "w-[35.9375%] sm:w-[28.75%] z-10 scale-75 translate-x-full opacity-80",
  };

  return (
    <div className="relative w-full flex items-center justify-center overflow-hidden py-6">
      <div className="relative flex items-center justify-center w-full max-w-6xl perspective-[1500px] h-[50vw] sm:h-[36vw]">
        {slides.map((slide, index) => {
          const position = getPosition(index);
          if (position === "hidden") return null;

          return (
            <img
              key={index}
              src={slide}
              alt={`Slide ${index}`}
              className={`absolute transition-all duration-700 ease-in-out object-contain rounded-xl shadow-md ${styles[position]}`}
            />
          );
        })}
      </div>

      {/* Botones */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-teal-800/70 text-white p-2 sm:p-3 rounded-full hover:bg-teal-900 transition-all z-30"
      >
        <FaChevronLeft size={20} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-teal-800/70 text-white p-2 sm:p-3 rounded-full hover:bg-teal-900 transition-all z-30"
      >
        <FaChevronRight size={20} />
      </button>

      {/* Puntos indicadores */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-teal-400" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carrusel3D;