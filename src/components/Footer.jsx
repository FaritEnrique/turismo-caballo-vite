import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from "../components/LanguageSwitcher";
import { Trans } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation("footer");

  return (
    <footer className="bg-gradient-to-r from-teal-700 via-teal-800 to-teal-900 text-white py-16">
      <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-16 text-center md:text-left">
        {/* Información de la empresa */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-teal-300">{t("aventuraTitle")}</h2>
          <p className="text-gray-200">
            {t("aventuraInfo")}
          </p>
          <button>
          <Link to='/login' className="mt-4 p-2 text-gray-800 font-semibold bg-slate-400 hover:bg-green-300 rounded-xl ring-2 ring-gray-100" >{t("botonAdmin")}</Link>
          </button>
        </div>

        {/* Enlaces de servicios */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-teal-300">{t("servicesTitle")}</h3>
          <ul className="mt-2 space-y-2">
            <li><Link to="/#" className="text-gray-200 hover:text-teal-400 transition-colors">{t("services1")}</Link></li>
            <li><Link to="/#" className="text-gray-200 hover:text-teal-400 transition-colors">{t("services2")}</Link></li>
            <li><Link to="/#" className="text-gray-200 hover:text-teal-400 transition-colors">{t("services3")}</Link></li>
            <li><Link to="/#" className="text-gray-200 hover:text-teal-400 transition-colors">{t("services4")}</Link></li>
            <li><Link to="/#" className="text-gray-200 hover:text-teal-400 transition-colors">{t("services5")}</Link></li>
          </ul>
        </div>

        {/* Contacto */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-teal-300">{t("contactTitle")}</h3>
          <p className="text-gray-200">{t("contactEmail")}</p>
          <p className="text-gray-200">{t("contactPhone")}</p>
          <p className="text-gray-200">{t("contactLocation")}</p>
        </div>

        {/* Redes sociales */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-teal-300">{t("followUs")}</h3>
          <div className="flex justify-center md:justify-start space-x-6 mt-4">
            <a
              href="https://api.whatsApp.com/send?phone=+51917365332&text=Hola, estoy interesado en el paquete turístico a Caballo Cocha"
              target="_blank"
              className="text-gray-200 hover:text-teal-400 text-3xl transition-colors"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://web.facebook.com/profile.php?id=100057419862464&mibextid=LQQJ4d&_rdc=1&_rdr"
              target="_blank"
              className="text-gray-200 hover:text-teal-400 text-3xl transition-colors"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/p/DA5C54tO16m/"
              target="_blank"
              className="text-gray-200 hover:text-teal-400 text-3xl transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/@danikahtravelsac7404"
              target="_blank"
              className="text-gray-200 hover:text-teal-400 text-3xl transition-colors"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Línea separadora y derechos reservados */}
      <div className="mt-10 border-t border-teal-500 pt-6 text-center text-gray-400">
        <p><strong>{t("reserved")}</strong></p>
      </div>
    </footer>
  );
};

export default Footer;