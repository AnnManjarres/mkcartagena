import { useState } from "react";
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("mwpgbwbd");

  if (state.succeeded) {
    return <p className="w-2/3 mx-auto font-bold p-15 m-10 text-4xl text-slate-700 border border-gray-300 rounded-lg shadow-xl">Gracias por tu mensaje! Te contactare en un momento!</p>;
  }


  return (
    <section id="contacto" className="w-full flex justify-center py-12 bg-gray-50">
      <div className="w-3/4 md:w-1/2 bg-white p-10 rounded-2xl shadow-xl">

        {/* Título */}
        <h2 className="text-4xl font-bold text-gray-700 text-center mb-4">
          Contáctame
        </h2>

        <p className="text-gray-600 text-center mb-10">
          Cuéntame sobre tu proyecto y me pondré en contacto contigo lo antes posible.
        </p>



        {/* Formulario */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          {/* Nombre */}
          <div>
            <label for="name" className="block text-gray-700 font-semibold mb-1">Nombre</label>
            <input
              id="name"
              type="text"
              name="name"
              required
              className="w-full p-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-violet-500 outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label for="email" className="block text-gray-700 font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              id="id"
              required
              className="w-full p-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-violet-500 outline-none"
            />
          </div>

          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />

          {/* Mensaje */}
          <div>
            <label for="message" className="block text-gray-700 font-semibold mb-1">Mensaje</label>
            <textarea
              id="message"
              name="mensaje"
              rows={3}
              required
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-violet-500 outline-none"
            ></textarea>

            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
          </div>

          {/* Botón */}
          <button type="submit" className="inline-block bg-blue-600 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition">
            Enviar mensaje
          </button>

        </form>

        {/* Información adicional */}
        <div className="mt-10 text-center">
          <p className="text-gray-500 text-sm">
            O si prefieres, escríbeme directamente:
          </p>
          <a
            href="mailto:ann.manjarres91@ejemplo.com"
            className="text-violet-600 font-semibold hover:underline"
          >
            contacto@mkcartagena.com
          </a>
        </div>

      </div>
    </section>
  )
}

export default Contact