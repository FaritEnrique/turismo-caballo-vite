import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
    FaWhatsappSquare, 
    FaFacebookSquare, 
    FaTwitterSquare, 
    FaChevronLeft, 
    FaChevronRight 
} from "react-icons/fa";

const HomePage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        "https://i.postimg.cc/qvnPs6KM/carrusel01.jpg",
        "https://i.postimg.cc/1XfTf8PS/carrusel02.jpg",
        "https://i.postimg.cc/fWrp1fjR/carrusel03.jpg",
        "https://i.postimg.cc/jjtFygKZ/carrusel04.jpg",
        "https://i.postimg.cc/50kKdfzR/carrusel05.jpg",
        "https://i.postimg.cc/qBN4tR1g/carrusel06.jpg",
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleShare = (platform) => {
        const url = window.location.href;
        const text = "Descubre la magia de la selva amazónica con Turismo en Caballo Cocha.";
        
        if (platform === "whatsapp") {
            window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text + " " + url)}`, "_blank");
        } else if (platform === "facebook") {
            window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank");
        } else if (platform === "twitter") {
            window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, "_blank");
        }
    };

    return (
        <div className="bg-gray-200 mb-4">
            {/* Sección de Bienvenida */}
            <section className="max-w-[1300px] mx-auto rounded-xl p-4 mb-4">
                <div className="mb-4">
                    <h1 className="text-4xl font-bold text-teal-800 text-center">
                        Bienvenido al Turismo en Caballo Cocha
                    </h1>
                    <p className="text-gray-700 text-xl mt-4 text-center">
                        Descubre la Magia de la Selva Amazónica con Nuestros Increíbles Paquetes Turísticos.
                        Explora la Naturaleza y Vive Aventuras Inolvidables.
                    </p>
                </div>

                {/* Logo y portada */}
                <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
                    {/* Logo */}
                    <div className="w-full md:w-auto">
                        <img
                            src="/images/logo_cuadrado.png"
                            alt="Logo Turismo Caballo Cocha"
                            className="object-contain w-48 md:w-64 mx-auto" // Ajuste del ancho del logo
                        />
                    </div>
                    {/* Portada */}
                    <div className="w-full rounded-xl">
                        <img
                            src="https://i.postimg.cc/3NjTKyZw/Portada.jpg"
                            alt="Plaza Caballo Cocha"
                            className="w-full rounded-xl"
                        />
                    </div>
                </div>

                {/* Botones de compartir */}
                <div className="bg-white py-4">
                    <div>
                        <h1 className="block sm:hidden w-full font-bold text-teal-900 text-center">Compatir en:</h1>
                    </div>
                    <div className="flex justify-center gap-4 bg-white py-4">
                        <button
                            onClick={() => handleShare("whatsapp")}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg text-white bg-green-500 hover:bg-green-600 transition-all duration-300"
                        >
                            <FaWhatsappSquare size={30} />
                            <span className="hidden sm:block">Compartir en WhatsApp</span>
                        </button>
                        <button
                            onClick={() => handleShare("facebook")}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300"
                        >
                            <FaFacebookSquare size={30} />
                            <span className="hidden sm:block">Compartir en Facebook</span>
                        </button>
                        <button
                            onClick={() => handleShare("twitter")}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg text-white bg-[#1DA1F2] hover:bg-[#1A91D2] transition-all duration-300"
                        >
                            <FaTwitterSquare size={30} />
                            <span className="hidden sm:block">Compartir en Twitter</span>
                        </button>
                    </div>
                </div>
            </section>
            <section className="max-w-[1300px] mx-auto rounded-xl p-4 mb-4 ">
            <div className="bg-gradient-to-r from-teal-700 via-teal-800 to-teal-900 p-4 rounded-lg 
                shadow-md text-white hidden sm:w-full sm:block sm:h-65 md:h-80">
                <h1 className="font-bold text-center text-lg">Destacados</h1>
                <ul className="space-y-2 mt-2">
                    <li><Link to="/localidades" className="block hover:text-yellow-300 font-semibold">Localidades Importantes</Link></li>
                    <li><Link to="/festividades" className="block hover:text-yellow-300 font-semibold">Festividades de la Región</Link></li>
                    <li><Link to="/flora" className="block hover:text-yellow-300 font-semibold">Flora</Link></li>
                    <li><Link to="/fauna" className="block hover:text-yellow-300 font-semibold">Fauna</Link></li>
                    <li><Link to="/galeria" className="block hover:text-yellow-300 font-semibold">Panel Fotográfico</Link></li>
                </ul>
            </div>
            </section>

            {/* Contenido principal */}
            <section className="max-w-[1300px] mx-auto rounded-xl p-4 flex gap-6">
                {/* Barra lateral */}
                <aside className="w-1/4 space-y-6">
                    {/* Destacados */}
                    <div className="bg-gradient-to-r from-teal-700 via-teal-800 to-teal-900 p-4 rounded-lg 
                    shadow-md text-white hidden sm:w-full sm:block sm:h-65 md:h-80">
                        <h1 className="font-bold text-center text-lg">Destacados</h1>
                        <ul className="space-y-2 mt-2">
                            <li><Link to="/localidades" className="block hover:text-yellow-300 font-semibold">Localidades Importantes</Link></li>
                            <li><Link to="/festividades" className="block hover:text-yellow-300 font-semibold">Festividades de la Región</Link></li>
                            <li><Link to="/flora" className="block hover:text-yellow-300 font-semibold">Flora</Link></li>
                            <li><Link to="/fauna" className="block hover:text-yellow-300 font-semibold">Fauna</Link></li>
                            <li><Link to="/galeria" className="block hover:text-yellow-300 font-semibold">Panel Fotográfico</Link></li>
                        </ul>
                    </div>
                    {/* Video */}
                    <div className="bg-white p-4 rounded-lg shadow-md hidden lg:block">
                        <h1 className="font-bold text-center text-lg text-gray-800">Video</h1>
                        <h2 className="text-center text-gray-600 mt-1">Santa Rosa del Caño</h2>
                        <iframe
                            className="w-full h-48 rounded-lg mt-2 border-0"
                            src="https://www.youtube.com/embed/cFoufhTlTKI"
                            title="YouTube video Santa Rosa del Caño"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </aside>
                {/* Carrusel */}
                <div className="hidden sm:w-3/4 sm:block relative">
                    <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
                        <img src={slides[currentSlide]} className="w-full transition-transform duration-700 ease-in-out" alt="Imagen Carrusel" />
                    </div>

                    {/* Controles del carrusel */}
                    <button
                        onClick={prevSlide}
                        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-teal-800/70 text-white p-3 rounded-full hover:bg-teal-900 transition-all"
                    >
                        <FaChevronLeft size={25} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-teal-800/70 text-white p-3 rounded-full hover:bg-teal-900 transition-all"
                    >
                        <FaChevronRight size={25} />
                    </button>
                    {/* Indicadores del carrusel */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? "bg-teal-500" : "bg-gray-400"}`}
                                onClick={() => setCurrentSlide(index)}
                            ></button>
                        ))}
                    </div>
                </div>
            </section>
            <section className="max-w-[1300px] mx-auto rounded-xl p-4 block lg:hidden">
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h1 className="font-bold text-center text-lg text-gray-800">Video</h1>
                    <h2 className="text-center text-gray-600 mt-1">Santa Rosa del Caño</h2>
                    <iframe
                        className="w-full h-48 rounded-lg mt-2 border-0"
                        src="https://www.youtube.com/embed/cFoufhTlTKI"
                        title="YouTube video Santa Rosa del Caño"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>
        </div>
    );
};

export default HomePage;