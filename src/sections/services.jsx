import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section id="services" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Servicios a la medida
          </h2>
          <p className="text-gray-600 text-lg mt-3">
            Soluciones diseñadas para llevar tu negocio al siguiente nivel
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-10 md:grid-cols-3 items-stretch text-start">

          {/* Páginas Web */}
          <article className="flex flex-col h-full bg-slate-100 p-7 rounded-2xl shadow-md border border-slate-200 hover:shadow-xl hover:border-blue-300 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-5">Páginas Web</h3>

            <div className="flex-grow">
              <ul className="space-y-4">
                {[
                  "Sitios modernos y administrables",
                  "Optimización SEO para aparecer en Google",
                  "Integración con WhatsApp",
                  "Hosting + dominio",
                  "Carrito de compras (según plan)",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-6 h-6 flex items-center justify-center rounded-full bg-green-200/60">
                      <Check className="w-4 h-4 text-green-600" />
                    </span>
                    <span className="ms-3 text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </article>

          {/* Aplicaciones Móviles */}
          <article className="flex flex-col h-full bg-slate-100 p-7 rounded-2xl shadow-md border border-slate-200 hover:shadow-xl hover:border-blue-300 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-5">Aplicaciones Móviles</h3>

            <div className="flex-grow">
              <ul className="space-y-4">
                {[
                  "Apps para Android/iOS",
                  "Inicio de sesión, base de datos, pagos, geolocalización",
                  "Publicación en Play Store / App Store",
                  "Panel de administración",
                  "Diseños profesionales",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-6 h-6 flex items-center justify-center rounded-full bg-green-200/60">
                      <Check className="w-4 h-4 text-green-600" />
                    </span>
                    <span className="ms-3 text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* Marketing Digital */}
          <article className="flex flex-col h-full bg-slate-100 p-7 rounded-2xl shadow-md border border-slate-200 hover:shadow-xl hover:border-blue-300 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-5">Marketing Digital</h3>

            <div className="flex-grow">
              <ul className="space-y-4">
                {[
                  "Gestión de redes sociales",
                  "Contenido profesional",
                  "Campañas pagas (Meta Ads, Google Ads)",
                  "Branding visual y estrategia",
                  "Campañas de TikTok, Facebook e Instagram",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-6 h-6 flex items-center justify-center rounded-full bg-green-200/60">
                      <Check className="w-4 h-4 text-green-600" />
                    </span>
                    <span className="ms-3 text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </article>

        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <Link
            to="/prices"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-10 rounded-full shadow-lg transition"
          >
            Ver planes y precios
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Services;
