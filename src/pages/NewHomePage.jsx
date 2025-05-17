import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { 
    FaWhatsappSquare, 
    FaFacebookSquare, 
    FaTwitterSquare, 
    FaChevronLeft, 
    FaChevronRight 
} from "react-icons/fa";
import { TbPointFilled } from "react-icons/tb";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { Trans } from "react-i18next";
import Layout1 from "../components/Layout1";
import Carrusel3D from "../components/Carrusel3D";

const HomePage = () => {

    const { t, i18n } = useTranslation();
    
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    const itemsRef1 = useRef([]);
    const itemsRef2 = useRef([]);

    useEffect(() => {
        itemsRef1.current = itemsRef1.current.filter(Boolean);
        if (itemsRef1.current.length === 0) return;
    
        itemsRef1.current.forEach((el, index) => {
            gsap.fromTo(
                el,
                { opacity: 0, x: index % 2 === 0 ? -100 : 100, rotation: index % 2 === 0 ? -30 : 30 },
                { opacity: 1, x: 0, rotation: 0, duration: 1.2, ease: "power3.out", 
                  scrollTrigger: {
                      trigger: el,
                      start: "top 70%",
                      toggleActions: "play none none reverse",
                  },
                }
            );
        });
    
        return () => {
            // Elimina todos los ScrollTriggers al desmontar
            ScrollTrigger.getAll().forEach((st) => st.kill());
        };
    }, []);
    
    useEffect(() => {
        itemsRef2.current = itemsRef2.current.filter(Boolean);
        if (itemsRef2.current.length === 0) return;
    
        itemsRef2.current.forEach((el) => {
            if (!el) return; // Verifica si el elemento es válido antes de acceder a dataset
    
            gsap.fromTo(
                el,
                { opacity: 0, y: 100 },
                { 
                    opacity: 1, 
                    y: 0, 
                    duration: 1.2, 
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                        once: true // Evita que se dispare muchas veces
                    },
                }
            );
        });
    
        return () => {
            // Elimina todos los ScrollTriggers al desmontar
            ScrollTrigger.getAll().forEach((st) => st.kill());
        };
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
            <div className="flex justify-end p-4">
                <LanguageSwitcher />
            </div>
            {/* Sección de Bienvenida */}
            <section className="max-w-full sm:max-w-[1300px] mx-auto rounded-xl p-4 mb-4">
                <div className="mb-4">
                    <h1 className="text-3xl sm:text-4xl font-bold text-teal-800 text-center">
                        {t("welcomeTitle")}
                    </h1>
                    <p className="text-gray-700 text-lg sm:text-xl mt-2 text-center">
                        {t("welcomeText")}
                    </p>
                </div>

                {/* Logo y portada */}
                <div className="flex flex-col lg:flex-row justify-center items-center w-full">
                    {/* Logo */}
                    <div className="w-full md:w-auto h-full flex justify-center items-center">
                        <img
                            src="/images/logo_cuadrado.png"
                            alt="Logo Turismo Caballo Cocha"
                            loading="lazy"
                            className="object-contain w-48 sm:w-64 md:w-80 lg:w-96 h-auto" // Aumento del ancho en pantallas medianas y grandes
                        />
                    </div>
                    {/* Portada */}
                    <div className="w-full md:w-auto h-full rounded-xl flex justify-center items-center">
                        <img
                            src="https://i.postimg.cc/3NjTKyZw/Portada.jpg"
                            alt="Plaza Caballo Cocha"
                            loading="lazy"
                            className="object-contain w-full h-full rounded-xl"
                        />
                    </div>
                </div>
                {/* Botones de compartir */}
                <div className="bg-white py-4">
                    <div>
                        <h1 className="block sm:hidden w-full font-bold text-teal-900 text-center">{t("shareTitle")}</h1>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 bg-white py-4">
                        <button
                            onClick={() => handleShare("whatsapp")}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg text-white bg-green-500 hover:bg-green-600 transition-all duration-300"
                        >
                            <FaWhatsappSquare size={30} />
                            <span className="hidden sm:block">{t("shareWhatsapp")}</span>
                        </button>
                        <button
                            onClick={() => handleShare("facebook")}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300"
                        >
                            <FaFacebookSquare size={30} />
                            <span className="hidden sm:block">{t("shareFacebook")}</span>
                        </button>
                        <button
                            onClick={() => handleShare("twitter")}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg text-white bg-[#1DA1F2] hover:bg-[#1A91D2] transition-all duration-300"
                        >
                            <FaTwitterSquare size={30} />
                            <span className="hidden sm:block">{t("shareTwitter")}</span>
                        </button>
                    </div>
                </div>
            </section>
            <section className="max-w-[1300px] mx-auto rounded-xl p-4">
                <Layout1 />
            </section>
            <section className="max-w-[1300px] mx-auto rounded-xl p-4 sm:hidden">
                <div className="bg-gradient-to-r from-teal-700 via-teal-800 to-teal-900 p-4 rounded-lg 
                    shadow-md text-white w-full">
                    <h1 className="font-bold text-center text-xl sm:text-2xl">{t("asideTitle")}</h1>
                    <ul className="space-y-3 mt-4">
                        <li><Link to="/localidades" className="block hover:text-yellow-300 font-semibold text-lg sm:text-xl">{t("asideLocality")}</Link></li>
                        <li><Link to="/festividades" className="block hover:text-yellow-300 font-semibold text-lg sm:text-xl">{t("asideFest")}</Link></li>
                        <li><Link to="/flora" className="block hover:text-yellow-300 font-semibold text-lg sm:text-xl">{t("asideFlora")}</Link></li>
                        <li><Link to="/fauna" className="block hover:text-yellow-300 font-semibold text-lg sm:text-xl">{t("asideFauna")}</Link></li>
                        <li><Link to="/galeria" className="block hover:text-yellow-300 font-semibold text-lg sm:text-xl">{t("asidePhotos")}</Link></li>
                    </ul>
                </div>
            </section>
            <section className="w-full px-2 sm:px-4 md:px-6 py-4 max-w-[1300px] mx-auto border-8 border-green-600 rounded-xl bg-white shadow-md mb-4">  
                <Carrusel3D />
            </section>

            <section className="max-w-[1300px] bg-teal-600 mx-auto rounded-xl p-4 flex flex-col md:flex-row gap-4 items-start">
                <div className="bg-white p-4 rounded-lg shadow-md w-full md:w-3/5">
                    <h1 className="text-center font-bold text-lg sm:text-xl lg:text-2xl text-teal-800">
                        {t("compromisoTitle")}
                    </h1>
                    <div className="bg-white p-4 rounded-lg shadow-md mt-4">
                        <p className="text-gray-900 text-justify font-medium">
                            {t("compromisoTexto1")} <br />
                            {t("compromisoTexto2")} <br />
                            {t("compromisoTexto3")}
                        </p>
                    </div>
                </div>
                <div className="rounded-lg shadow-md border border-gray-400 w-full md:w-2/5">
                    <img src="/images/Medio_Ambiente.jpeg" alt="Foto Compromiso - Turismo Caballococha" className="w-full h-auto rounded-lg"/>
                </div>
            </section>
            <section className="max-w-[1300px] bg-teal-600 mx-auto rounded-xl p-4 mt-4">
                <div>
                    <h1 className="text-center font-bold text-lg sm:text-xl lg:text-2xl text-teal-800 p-4 rounded bg-white shadow-md">
                        {t("serviciosTitle")}
                    </h1>
                    <p className="text-gray-900 text-justify mt-4 bg-yellow-50 p-4 rounded-lg shadow-md font-medium">
                        <Trans i18nKey="serviciosText">
                            La contratacion del <Link to="/paquetes" className="underline" 
                            title="Ver detalles del paquete turístico - Caballococha">paquete</Link>, contempla la
                            prestación de servicios adicionales, que no son propios del tour a Caballo Cocha, 
                            para garantizar la comodidad y seguridad de nuestros clientes.
                        </Trans>
                    </p>
                </div>
                <div className="mt-4 p-4 rounded-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-gray-400">
                    <div className="h-auto">
                        <div>
                            <img src="/images/Aeropuerto_Iquitos.png" alt="Aeropuerto de Iquitos, punto de llegada para el turismo en Caballococha" className="rounded-xl" />
                        </div>
                        <div className="p-2 bg-slate-100">
                            <p className="text-black text-justify">
                                {t("aeropuertoText")}
                            </p>
                        </div>
                    </div>
                    <div className="h-auto">
                        <div>
                            <img src="/images/Alojamiento.png" alt="Aeropuerto de Iquitos, punto de llegada para el turismo en Caballococha" className="rounded-xl" />
                        </div>
                        <div className="p-2 bg-slate-100">
                            <p className="text-black text-justify">
                                {t("cuartoText")}
                            </p>
                        </div>
                    </div>
                    <div className="h-auto">
                        <div>
                            <img src="/images/Comida.png" alt="Aeropuerto de Iquitos, punto de llegada para el turismo en Caballococha" className="rounded-xl" />
                        </div>
                        <div className="p-2 bg-slate-100">
                            <p className="text-black text-justify">
                                {t("comidaText")}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section            
                className="max-w-[1300px] bg-teal-600 mx-auto rounded-xl p-4 mt-4"
                aria-label="Programa Turístico"
                title="Descubre la magia del turismo en Iquitos y Caballococha, Perú"
            >
                <h1             
                    className="text-lg md:text-xl lg:text-2xl font-bold text-center rounded-xl p-2 
                        bg-yellow-50 text-teal-900"
                    title="Programa Turístico Iquitos Caballococha"
                >
                    {t("programaTitle")}
                </h1>
                <div
                    className="bg-yellow-50 rounded-xl mt-4 p-4"
                    title="Actividades Turísiticas en Caballococha - Loreto Iquitos"
                >
                    <h2 className="text-center text-teal-900 md:text-lg lg:text-xl font-bold">
                        {t("programaSubTitle")}
                    </h2>
                    <ul className="font-semibold mt-2">
                        <li className="flex gap-4 items-center text-amber-950">
                            <TbPointFilled />
                            <span>{t("actividadesPrograma1")}</span>
                        </li>
                        <li className="flex gap-4 items-center text-amber-950">
                            <TbPointFilled />
                            <span>{t("actividadesPrograma2")}</span>
                        </li>
                        <li className="flex gap-4 items-center text-amber-950">
                            <TbPointFilled />
                            <span>{t("actividadesPrograma3")}</span>
                        </li>
                        <li className="flex gap-4 items-center text-amber-950">
                            <TbPointFilled />
                            <span>{t("actividadesPrograma4")}</span>
                        </li>
                        <li className="flex gap-4 items-center text-amber-950">
                            <TbPointFilled />
                            <span>{t("actividadesPrograma5")}</span>
                        </li>
                        <li className="flex gap-4 items-center text-amber-950">
                            <TbPointFilled />
                            <span>{t("actividadesPrograma6")}</span>
                        </li>
                    </ul>
                    <div className="gap-2 grid grid-cols-1 mt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-gray-300 rounded-xl p-4">
                        <div
                            ref={(el) => (itemsRef1.current[0] = el)}
                            className="border p-2 shadow-md rounded-xl bg-[url('/images/Fondo_Laguna.jpeg')] bg-cover bg-center h-auto">
                            <h2 className="font-bold text-center text-lg">{t("lagunaTitle")}</h2>
                            <p className="font-medium text-justify">
                                {t("lagunaText1")} <br /> {t("lagunaText1")}
                            </p>
                        </div>
                        <div
                            ref={(el) => (itemsRef1.current[1] = el)}
                            className="border p-2 shadow-md rounded-xl bg-[url('/images/Foto_flora.jpg')] bg-cover bg-center h-auto text-yellow-100">
                            <h2 className="font-bold text-center text-lg">{t("floraTitle")}</h2>
                            <ul className="font-medium">
                                {[
                                    t("floraList1"),
                                    t("floraList2"),
                                    t("floraList3"),
                                    t("floraList4"),
                                    t("floraList5"),
                                    t("floraList6"),
                                    t("floraList7"),
                                    t("floraList8"),
                                    t("floraList9"),
                                    t("floraList10"),
                                ].map((item, index) => (
                                    <li key={index} className="flex flex-wrap gap-4 items-center">
                                        <TbPointFilled />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div
                            ref={(el) => (itemsRef1.current[2] = el)}
                            className="border p-2 shadow-md rounded-xl bg-[url('/images/Foto_fauna.png')] bg-cover bg-center h-auto text-yellow-100">
                            <h2 className="font-bold text-center text-lg">{t("avesTitle")}</h2>
                            <ul className="font-medium">
                                {[
                                    t("avesList1"),
                                    t("avesList2"),
                                    t("avesList3"),
                                    t("avesList4"),
                                    t("avesList5"),
                                    t("avesList6"),
                                ].map((item, index) => (
                                    <li key={index} className="flex flex-wrap gap-4 items-center">
                                        <TbPointFilled />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div
                            ref={(el) => (itemsRef1.current[3] = el)}
                            className="border p-2 bg-teal-100 shadow-md rounded-xl bg-[url('/images/Foto_Ayahuasca.png')] bg-cover bg-center h-auto text-yellow-100">
                            <h2 className="font-bold text-center text-lg">{t("ayahuascaTitle")}</h2>
                            <p className="font-medium text-justify">
                                {t("ayahuascaText1")} <br /> {t("ayahuascaText2")}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-[1300px] bg-teal-600 mx-auto rounded-xl p-4 mt-4">
                <h1 className="text-center font-bold text-lg sm:text-xl lg:text-2xl text-teal-800 p-4 rounded bg-white shadow-md">
                    {t("testimonioTitle")}
                </h1>
                <div className="gap-2 grid grid-cols-1 mt-4 md:grid-cols-2 lg:grid-cols-3 bg-gray-300 rounded-xl p-4">
                    <div
                        ref={(el) => (itemsRef2.current[0] = el)}
                        className="border p-2 shadow-md rounded-xl bg-white h-auto">
                        <h2 className="font-bold text-center text-lg">Matías</h2>
                        <div>
                            <img src="/images/Piero.jpg" alt="Testimonio Turismo Iquitos - Caballococha" />
                        </div>
                        <p className="font-medium text-justify">
                            {t("testimonioText1.1")}
                        </p>
                    </div>
                    <div
                        ref={(el) => (itemsRef2.current[1] = el)}
                        className="border p-2 bg-white shadow-md rounded-xl h-auto">
                        <h2 className="font-bold text-center text-lg">Débora</h2>
                        <div>
                            <img src="/images/Debora.jpg" alt="Testimonio Turismo Iquitos - Caballococha" />
                        </div>
                        <p className="font-medium text-justify">
                            {t("testimonioText2.1")} <br /> {t("testimonioText2.2")}
                        </p>
                    </div>
                    <div
                        ref={(el) => (itemsRef2.current[2] = el)}
                        className="border p-2 bg-white shadow-md rounded-xl h-auto">
                        <h2 className="font-bold text-center text-lg">Wicus</h2>
                        <div>
                            <img src="/images/Wicus.jpg" alt="Testimonio Turismo Iquitos - Caballococha" />
                        </div>
                        <p className="font-medium text-justify">
                            {t("testimonioText3.1")} <br /> {t("testimonioText3.2")}
                        </p>
                    </div>
                </div>
            </section>
            <section className="max-w-[1300px] bg-teal-600 mx-auto rounded-xl p-4 mt-4">
                <h1 className="text-center font-bold text-lg sm:text-xl lg:text-2xl text-teal-800 p-4 rounded bg-white shadow-md">
                    {t("tituloDestino")}
                </h1>
                <div className="gap-2 grid grid-cols-1 mt-4 md:grid-cols-2 lg:grid-cols-3 bg-gray-300 rounded-xl p-4">
                    <div
                        className="border p-2 shadow-md rounded-xl bg-white h-auto">
                        <h2 className="font-bold text-center text-lg">{t("tituloDestino1")}</h2>
                        <div>
                            <img src="https://i.ibb.co/cKc3ZNvt/Waira-Selva-Hotel.png" alt="Waira Selva Hotel" className="rounded-xl object-cover" />
                        </div>
                        <p className="font-medium text-justify">
                            {t("textoDestino1")}
                        </p>
                    </div>
                    <div
                        className="border p-2 bg-white shadow-md rounded-xl h-auto">
                        <h2 className="font-bold text-center text-lg">{t("tituloDestino2")}</h2>
                        <div>
                            <img src="https://i.ibb.co/Z6MDYrLN/Hospedaje-El-Tigrillo.png" alt="Hospedaje El Tigrillo" className="rounded-xl object-cover" />
                        </div>
                        <p className="font-medium text-justify">
                            {t("textoDestino2")}
                        </p>
                    </div>
                    <div
                        className="border p-2 bg-white shadow-md rounded-xl h-auto">
                        <h2 className="font-bold text-center text-lg">{t("tituloDestino3")}</h2>
                        <div>
                            <img src="https://i.ibb.co/kg7yRN8k/Wikungo-Hotel.png" alt="Wikungo Hotel - Puerto Nariño" className="rounded-xl object-cover" />
                        </div>
                        <p className="font-medium text-justify">
                            {t("textoDestino3")}
                        </p>
                    </div>
                    <div
                        className="border p-2 bg-white shadow-md rounded-xl h-auto">
                        <h2 className="font-bold text-center text-lg">{t("tituloDestino4")}</h2>
                        <div>
                            <img src="https://i.ibb.co/dJrkDB3n/Yawira-House.png" alt="Yawira House - Leticia" className="rounded-xl object-cover" />
                        </div>
                        <p className="font-medium text-justify">
                            {t("textoDestino4")}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;