import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Función universal para ir a una sección
  const goToSection = (sectionId) => {
    // 1️⃣ Ya estás en Home → scroll directo
    if (location.pathname === "/") {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } 
    // 2️⃣ No estás en Home → ve a Home y luego scroll
    else {
      navigate("/", { state: { scrollTo: sectionId } });
    }

    setIsOpen(false); // cerrar menú móvil
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-white/70 backdrop-blur-sm ${
        isScrolled ? "py-2 shadow-md" : "py-4"
      }`}
    >
      <div className="mx-auto px-6">
        <h1
          className={`font-bold text-gray-700 transition-all duration-300 ${
            isScrolled ? "text-2xl" : "text-4xl md:text-6xl"
          }`}
        >
          Marketing Cartagena
        </h1>

        <div className="flex justify-between items-center mt-2">
          
          {/* Mobile Button */}
          <button className="md:hidden block" onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 mx-auto text-gray-500 pt-2">

            <li className='text-md py-2 px-7'>
              <Link to="/" className="hover:text-gray-900">
                Inicio
              </Link>
            </li>

            <li className='text-md py-2 px-4'>
              <button 
                onClick={() => goToSection("servicios")}
                className="hover:text-gray-900"
              >
                Servicios
              </button>
            </li>

            <li className='text-md py-2 px-4'>
              <button 
                onClick={() => goToSection("industrias")}
                className="hover:text-gray-900"
              >
                Industrias
              </button>
            </li>

            <li className='text-md py-2 px-4'>
              <button 
                onClick={() => goToSection("contacto")}
                className="hover:text-gray-900"
              >
                Contáctanos
              </button>
            </li>

            <li className='text-md py-2 px-4 bg-blue-600 text-white rounded-full hover:bg-blue-800'>
              <button 
                onClick={() => goToSection("contacto")}
              >
                Comencemos!
              </button>
            </li>

          </ul>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden mt-4 flex flex-col gap-4 items-center text-gray-500 bg-white py-4 shadow-md">

            <li className='text-lg py-2 px-4'>
              <Link 
                to="/" 
                className="hover:text-gray-900"
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </Link>
            </li>

            <li className='text-lg py-2 px-4'>
              <button 
                onClick={() => goToSection("servicios")}
                className="hover:text-gray-900"
              >
                Servicios
              </button>
            </li>

            <li className='text-lg py-2 px-4'>
              <button 
                onClick={() => goToSection("industrias")}
                className="hover:text-gray-900"
              >
                Industrias
              </button>
            </li>

            <li className='text-lg py-2 px-4'>
              <button 
                onClick={() => goToSection("contacto")}
                className="hover:text-gray-900"
              >
                Contactanos
              </button>
            </li>

          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
