import { FaCheckCircle } from "react-icons/fa";
import MiniBannerDemo from "../components/minibanner"

const Industries = () => {
  const industriesCol1 = [
    "Turismo",
    "Hotelería y Bienes Raices",
    "Peluquería, barbería y belleza",
  ];

  const industriesCol2 = [
    "Cafeterías y Restaurantes",
    "Emprendedores independientes",
    "Sector Salud",
  ];

  return (
    <div
      id="industrias"
      className="bg-gradient-to-b from-slate-600 to-slate-900 text-gray-100 pb-16"
    >
      <h1 className="font-bold text-4xl md:text-5xl pt-12 pb-6 text-center text-white">
        Industrias
      </h1>

      <div className="w-11/12 md:w-3/4 mx-auto p-4 md:p-8 flex flex-wrap justify-center md:justify-between gap-8">

        {/* Column 1 */}
        <div>
          {industriesCol1.map((item, index) => (
            <div key={index} className="flex items-center py-3">
              <FaCheckCircle className="text-blue-600 text-3xl" />
              <p className="text-xl md:text-2xl font-medium px-3">{item}</p>
            </div>
          ))}
        </div>

        {/* Column 2 */}
        <div>
          {industriesCol2.map((item, index) => (
            <div key={index} className="flex items-center py-3">
              <FaCheckCircle className="text-blue-600 text-3xl" />
              <p className="text-xl md:text-2xl font-medium px-3">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mini Banner CTA */}
      <div className="w-11/12 md:w-2/3 mx-auto mt-2">
        <MiniBannerDemo />
      </div>
    </div>
  );
};

export default Industries;
