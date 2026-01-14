import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Hero from '../sections/hero'
import MainProducts from '../sections/mainProducts'
import Portfolio from '../sections/portfolio'
import Services from '../sections/services'
import Industries from '../sections/industries'
import Contact from '../sections/contact'
import Footer from '../sections/footer'

const Home = () => {
  const location = useLocation();

  // Scroll automático si viene desde otra página
  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 150);
      }
    }
  }, [location]);

  return (
    <>
      <section id="hero">
        <Hero />
      </section>

      <section id="mainProducts">
        <MainProducts />
      </section>

      <section id="portafolio">
        <Portfolio />
      </section>

      <section id="servicios">
        <Services />
      </section>

      <section id="industrias">
        <Industries />
      </section>

      <section id="contacto">
        <Contact />
      </section>

      <Footer />

      {/* Si luego agregas industrias o contacto, solo las agregas así */}
      {/* <section id="industrias"><Industrias /></section> */}
      {/* <section id="contacto"><Contacto /></section> */}
    </>
  );
};

export default Home;
