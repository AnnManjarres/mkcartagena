import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MiniSlider = ({ images, autoPlay = true, interval = 4000 }) => {
  const [current, setCurrent] = useState(0);

  if (!images || images.length === 0) return null;

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [current, autoPlay, interval]);

  return (
    <div className="relative w-full max-w-md mx-auto overflow-hidden rounded-2xl shadow-lg">
      
      {/* Imagen */}
      <img
        src={images[current]}
        alt={`slide-${current}`}
        className="w-full h-64 object-cover transition-all duration-500"
      />

      {/* Flecha izquierda */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Flecha derecha */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition"
      >
        <ChevronRight size={20} />
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              current === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default MiniSlider;
