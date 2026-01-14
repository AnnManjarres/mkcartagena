import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import menu1 from "../assets/menuxpress/menu1.png";
import menu2 from "../assets/menuxpress/menu2.png";
import menu3 from "../assets/agendapro/agenda1.png"

const items = [
  {
    title: "Página para turismo",
    description: "Pedidos por WhatsApp con diseño optimizado para ventas",
    image: menu1,
    link: "/demo-restaurante",
  },
  {
    title: "Página para barbería y peluquería",
    description: "Catálogo digital con compra directa por WhatsApp",
    image: menu2,
    link: "/demo-tienda",
  },
  {
    title: "Tienda Online",
    description: "Automatizador de pedidos por WhatsApp",
    image: menu3,
    link: "/demo-menuxpress",
  },
];

const Portfolio = () => {

    const navigate = useNavigate();

    return(
        <section>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-10">Proyectos</h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        {items.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -12, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
            onClick={() => navigate(item.link)}
            className="group relative cursor-pointer rounded-3xl overflow-hidden shadow-xl"
          >
            {/* Imagen */}
            <img
              src={item.image}
              alt={item.title}
              className="h-[420px] w-full object-cover group-hover:scale-110 transition duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-500" />

            {/* Contenido */}
            <div className="absolute bottom-0 p-6 text-white translate-y-8 group-hover:translate-y-0 transition duration-500">
              <h3 className="text-2xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-sm opacity-90 mb-4">
                {item.description}
              </p>

              <div className="flex items-center gap-2 font-medium">
                Ver demo
                <ArrowUpRight size={18} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
    )

}

export default Portfolio