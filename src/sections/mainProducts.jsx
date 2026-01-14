import MiniSlider from "../components/miniSlider";

import menu1 from "../assets/menuxpress/menu1.png";
import menu2 from "../assets/menuxpress/menu2.png";
import menu3 from "../assets/menuxpress/menu3.png";

import agenda1 from "../assets/agendapro/agenda1.png"
import agenda2 from "../assets/agendapro/agenda2.png"

const menuxpressImages = [menu1, menu2, menu3];
const agendaProImages = [agenda1, agenda2];

const mainProducts = () => {

    return (
        <section id="portfolio" className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Productos Estrella</h2>
            </div>

            <div className="w-full p-10 mx-auto flex-wrap md:flex justify-evenly">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 my-10">MenuXpress</h2>
                    <MiniSlider images={menuxpressImages} />
                    <ul className="my-5 text-start">
                        <li>✅ Página web moderna para tu restaurante o cafetería</li>
                        <li>✅ Menú online</li>
                        <li>✅ Integración con WhatsApp para automatizar pedidos</li>
                    </ul>

                    <a href="" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105">Ver Demo</a>
                    
                </div>
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 my-10">Agenda Pro</h2>
                    <MiniSlider images={agendaProImages} />
                    <ul className="my-5 text-start">
                        <li>✅ Página web moderna para tu peluquería, barbería o tienda</li>
                        <li>✅ Control de agenda para ti o tu negocio</li>
                        <li>✅ Integración con Google Calendar</li>
                    </ul>

                    <a href="" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105">Ver Demo</a>
                    
                </div>

            </div>

        </section>
    )     

}

export default mainProducts