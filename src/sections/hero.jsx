import hero from '../assets/hero.jpg';

const Hero = () => {
    return (
        <section
            id="hero"
            className="mt-38  relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center text-center px-6"
        >

            {/* Imagen de fondo */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${hero})` }}
            />

            {/* Overlay oscuro */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Contenido */}
            <div className="relative max-w-3xl mx-auto text-white">
                <h1 className="font-extrabold mb-6 text-3xl md:text-5xl leading-tight">
                    Consigue más clientes para tu negocio
                </h1>

                <p className="md:w-3/4 w-full mx-auto font-medium text-gray-200 
                              text-lg md:text-2xl mb-10 leading-relaxed">
                    Páginas web y aplicaciones para negocios en Cartagena y Colombia, enfocadas en generar contactos, pedidos y ventas desde el primer día integrandolos con WhatsApp.
                </p>

                <div className="flex justify-center">
                    <a href="#contacto" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-12 rounded-full shadow-lg transition-all duration-300 hover:scale-105 uppercase">
                        Quiero vender más!
                    </a>

                </div>
            </div>
        </section>
    );
};

export default Hero;
