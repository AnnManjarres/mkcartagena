import PricingCard from '../components/pricing_card'
import Footer from "../sections/footer"
import { useState } from "react";
import { Ban, ChevronLeft, ChevronRight } from "lucide-react";
import tiktok from "../assets/tiktok.png";
import instagram from "../assets/instagram.png";
import BannerDemo from '../components/bannerDemo';


const Prices = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % 4);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + 4) % 4);

  return (

    <>
    <div id="servicios" className="w-full overflow-hidden relative py-10 mt-30">
      <h1 className="text-center font-bold text-5xl text-gray-700 mb-10">
       Precios
      </h1>

      <div className="w-10/12 mx-auto overflow-hidden">

        {/* SLIDER CONTAINER */}

        <div
            className="flex transition-transform duration-700"
            style={{ transform: `translateX(-${current * 100}%)` }}
        >
            {/* ======== SLIDE 2: Páginas Web ======== */}

            <div className="w-full flex-shrink-0 px-5">
            <h2 className="font-bold text-4xl text-gray-700">Páginas Web</h2>

            <div className="flex flex-col md:flex-row gap-5 justify-center py-10">
                <PricingCard
                title="Independiente"
                price="Desde 650.000 COP"
                features={[
                    "Diseño de plantilla",
                    "Hosting y Dominio",
                    "Email corporativo",
                    "Menú de navegación ahsta 5 páginas",
                    "Botones de redes",
                ]}
                border="violet-600"
                />

                <PricingCard
                title="Emprendedor"
                price="Desde 1.500.000 COP"
                features={[
                    "Todo lo incluido anteriormente",
                    "Portafolio",
                    "Productos",
                    "Pasarela de pagos",
                    "Integración con Whatsapp",
                    "Formulario de contacto",
                ]}
                border="violet-600"
                />

                <PricingCard
                title="Empresa"
                price="Desde 4.000.000 COP"
                features={[
                    "Todo lo incluido anteriormente",
                    "Blog",
                    "Carrito de compras",
                    "Panel de Administración",
                    "Chatbot"
                ]}
                border="violet-600"
                />
            </div>
            </div>

            
            {/* ======== SLIDE 1: Aplicaciones Móviles ======== */}
            <div className="w-full flex-shrink-0 px-5">
            <h2 className="font-bold text-4xl text-gray-700">Aplicaciones Móviles</h2>

            <div className="flex flex-col md:flex-row gap-5 justify-center py-10">
                <PricingCard
                title="Aplicación Básica"
                price="3.000.000 - 10.000.000 COP"
                features={[
                    "3 a 5 pantallas",
                    "Publicación en Play Store",
                    "Diseño de plantilla",
                    "Login por email",
                    "Almacenamiento local",
                    "Sin acceso a la nube",
                ]}
                border="violet-600"
                />

                <PricingCard
                title="Aplicación Profesional"
                price="10.000.000 - 30.000.000 COP"
                features={[
                    "6 a 12 pantallas",
                    "Play Store y App Store",
                    "Diseño moderno",
                    "Login por email y teléfono",
                    "Base de datos en la nube",
                    "Pasarela de pagos",
                ]}
                border="violet-600"
                />

                <PricingCard
                title="Aplicación Corporativa"
                price="Desde 20.000.000 COP"
                features={[
                    "Pantallas ilimitadas",
                    "Carrito de compras",
                    "Geolocalización",
                    "Chat",
                    "Reportes",
                ]}
                border="violet-600"
                />
            </div>
            </div>


            {/* ======== SLIDE 3: TikTok ======== */}
            <div className="w-full flex-shrink-0 px-5">
            <h2 className="font-bold text-4xl text-gray-700">Marketing TikTok</h2>

            <div className="flex justify-center py-3">
                <img src={tiktok} className="w-10" alt="tiktok" />
            </div>

            <div className="flex flex-col md:flex-row gap-5 justify-center py-10">
                <PricingCard
                title="Campaña Principiante"
                price="Desde 550.000 COP"
                features={[
                    "Creación de cuenta",
                    "Capacitación",
                    "Grabación de video",
                ]}
                border="violet-600"
                />

                <PricingCard
                title="Campaña Empresa"
                price="Desde 1.500.000 COP"
                features={[
                    "Un video semanal",
                    "Publicidad configurada",
                ]}
                border="blue-600"
                />

                <PricingCard
                title="Influencer"
                price="Desde 3.700.000 COP"
                features={[
                    "Tres videos por semana",
                    "Interacciones",
                    "100 vistas diarias",
                ]}
                border="violet-700"
                />
            </div>
            </div>

            {/* ======== SLIDE 4: Instagram ======== */}
            <div className="w-full flex-shrink-0 px-5">
            <h2 className="font-bold text-4xl text-gray-700">Marketing Instagram</h2>

            <div className="flex justify-center py-3">
                <img src={instagram} className="w-10" alt="instagram" />
            </div>

            <div className="flex flex-col md:flex-row gap-5 justify-center py-10">
                <PricingCard
                title="Publicidad diaria"
                price="Desde 350.000 COP"
                features={[
                    "Creación página",
                    "Publicidad por un día",
                    "4 imágenes",
                ]}
                border="violet-600"
                />

                <PricingCard
                title="Publicidad semana"
                price="Desde 650.000 COP"
                features={[
                    "Dos publicaciones pagas",
                    "Una foto diaria",
                ]}
                border="blue-600"
                />

                <PricingCard
                title="Publicidad mensual"
                price="Desde 1.700.000 COP"
                features={[
                    "10 publicaciones pagas",
                    "Dos fotos al día",
                    "Interacciones",
                ]}
                border="violet-700"
                />
            </div>
            </div>
        </div>

        {/* CONTROLES */}
        <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow"
        >
            <ChevronLeft size={28} />
        </button>

        <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow"
        >
            <ChevronRight size={28} />
        </button>

        {/* INDICADORES */}
        <div className="flex justify-center mt-5 gap-2">
            {[0, 1, 2, 3].map((i) => (
            <button
                key={i}
                className={`w-3 h-3 rounded-full ${
                current === i ? "bg-gray-800" : "bg-gray-400"
                }`}
                onClick={() => setCurrent(i)}
            />
            ))}
        </div>
    </div>
    </div>

    <BannerDemo />

    <Footer />


    </>
  );
};

export default Prices;
