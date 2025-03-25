import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-teal-700 via-teal-800 to-teal-900 text-white py-16">
      <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-16 text-center md:text-left">
        {/* Información de la empresa */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-teal-300">Turismo Aventura</h2>
          <p className="text-gray-200">
            Explora el mundo con nuestros increíbles tours y guías expertos. Descubre experiencias únicas y personalizadas.
          </p>
          <button>
          <Link to='/login' className="mt-4 p-2 text-gray-800 font-semibold bg-slate-400 hover:bg-green-300 rounded-xl ring-2 ring-gray-100" >Administración</Link>
          </button>
        </div>

        {/* Enlaces de servicios */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-teal-300">Nuestros Servicios</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="text-gray-200 hover:text-teal-400 transition-colors">Tours y guías</a></li>
            <li><a href="#" className="text-gray-200 hover:text-teal-400 transition-colors">Recorridos personalizados</a></li>
            <li><a href="#" className="text-gray-200 hover:text-teal-400 transition-colors">Turismo de aventura</a></li>
            <li><a href="#" className="text-gray-200 hover:text-teal-400 transition-colors">Paquetes turísticos</a></li>
            <li><a href="#" className="text-gray-200 hover:text-teal-400 transition-colors">Reservas de hoteles</a></li>
          </ul>
        </div>

        {/* Contacto */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-teal-300">Contacto</h3>
          <p className="text-gray-200">Correo: contacto@turismoaventura.com</p>
          <p className="text-gray-200">Teléfono: +51 917 365 332</p>
          <p className="text-gray-200">Ubicación: Iquitos, Perú</p>
        </div>

        {/* Redes sociales */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-teal-300">Síguenos</h3>
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
        <p><strong>Derechos Reservados Iquitos, Perú - 2024</strong></p>
      </div>
    </footer>
  );
};

export default Footer;