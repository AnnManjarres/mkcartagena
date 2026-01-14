const BannerDemo = () => {
  return (
    <div className="w-9/12 mx-auto bg-blue-600 text-white py-8 px-6 rounded-2xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-4 my-6">
      
      <div className="text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-bold">
          ¿Quieres pedir un demo gratis?
        </h2>
        <p className="text-white/90 mt-2 text-lg">
          Te muestro cómo se vería tu página web o aplicación antes de contratarme.
        </p>
      </div>

      <a
        href="https://wa.me/573000000000?text=Hola!%20Quiero%20mi%20demo%20gratis"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-gray-100 transition"
      >
        Pedir demo GRATIS!
      </a>

    </div>
  );
};

export default BannerDemo;
