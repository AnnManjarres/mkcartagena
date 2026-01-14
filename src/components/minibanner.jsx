const MiniBannerDemo = () => {
  return (
    <div className="bg-blue-600 text-white py-3 px-4 rounded-xl shadow-md flex flex-col md:flex-row items-center justify-between gap-3 my-4">
      
      <p className="text-center md:text-left text-sm md:text-base font-medium">
        ¿Quieres un demo gratis para tu página o app?
      </p>

      <a
        href="https://wa.me/573000000000?text=Hola!%20Quiero%20mi%20demo%20gratis"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-blue-700 font-semibold px-4 py-2 rounded-lg text-sm shadow hover:bg-gray-100 transition"
      >
        Quiero una demo GRATIS!
      </a>

    </div>
  );
};

export default MiniBannerDemo;
