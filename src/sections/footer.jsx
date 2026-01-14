

const Footer = () => {

    return (
    <footer className="bg-gradient-to-b from-slate-700 to-slate-900 text-gray-300 py-10 mt-10">
      <div className="w-11/12 md:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">

        {/* LOGO + DESCRIPCIÓN */}
        <div>
          <h2 className="text-white text-4xl font-bold mb-4">Marketing Cartagena</h2>
          <p className="text-gray-400 uppercase font-light">
            Desarrollo de aplicaciones, páginas web y marketing digital para
            emprendedores y empresas en Colombia.
          </p>
        </div>

        {/* ENLACES RÁPIDOS */}
        <div>
          <h3 className="text-white font-semibold mb-4">Enlaces</h3>
          <ul className="space-y-2">
            <li><a href="#servicios" className="hover:text-violet-400">Servicios</a></li>
            <li><a href="#contacto" className="hover:text-violet-400">Contacto</a></li>
            <li><a href="#portafolio" className="hover:text-violet-400">Portafolio</a></li>
          </ul>
        </div>

        {/* INFORMACIÓN */}
        <div>
          <h3 className="text-white font-semibold mb-4">Información</h3>
          <ul className="space-y-2">
            <li>📍 Cartagena, Colombia</li>
            <li>📞 +57 304 442 1642</li>
            <li>✉️ contacto@mkcartagena.com</li>
          </ul>
        </div>

        {/* REDES SOCIALES */}
        <div>
          <h3 className="text-white font-semibold mb-4">Sígueme</h3>
          <div className="flex gap-4 text-gray-400">
            <a href="#" className="hover:text-white text-xl">📘</a>
            <a href="#" className="hover:text-white text-xl">📸</a>
            <a href="#" className="hover:text-white text-xl">🎵</a>
            <a href="#" className="hover:text-white text-xl">💼</a>
          </div>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Marketing Cartagena — Todos los derechos reservados.
      </div>
    </footer>

    )

}


export default Footer