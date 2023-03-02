import React from "react";
import Objetivo from "./Objetivo";

const SeccionObjetivos = () => {
  return (
    <section className=" px-4 md:px-32 bg-sky-600 text-white">
      {/* <div className="max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"> */}
      <div className="max-w-screen-xl py-20">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold sm:text-4xl text-center md:text-left">
            Razones para adoptar
          </h2>

          <p className="mt-4 text-gray-50  text-center md:text-left">
            Adoptar un animal es una experiencia que puede cambiar tu vida para
            siempre.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
          <Objetivo
            titulo="Salvas una vida"
            desc="Adoptar una mascota de un refugio o de una organización de rescate significa darle una segunda oportunidad de tener un hogar amoroso y evitar que sea sacrificado."
          />

          <Objetivo
            titulo="Amor y gratitud"
            desc="Las mascotas adoptadas a menudo muestran una gran gratitud y amor hacia sus nuevos dueños, ya que han pasado por situaciones difíciles antes de encontrar un hogar amoroso. Esta conexión especial puede fortalecer el vínculo entre el dueño y la mascota."
          />

          <Objetivo
            titulo="Conciencia social"
            desc="Al adoptar una mascota de un refugio o de una organización de rescate, estás ayudando a promover una cultura de adopción responsable y sensibilizando sobre la importancia de proteger y respetar a los animales."
          />

          <Objetivo
            titulo="Mascotas de todas las edades"
            desc="Las mascotas en los refugios vienen en todas las edades, tamaños y razas. Puedes encontrar desde cachorros hasta animales mayores, con diferentes personalidades y necesidades."
          />

          <Objetivo
            titulo="Mascotas entrenadas"
            desc="Muchas veces las mascotas en los refugios ya están entrenadas en habilidades básicas de comportamiento, lo que puede ahorrar tiempo y esfuerzo en la formación."
          />

          <Objetivo
            titulo="Costo"
            desc="Adoptar una mascota generalmente es más económico que comprar una. Los refugios y organizaciones de rescate suelen tener tarifas de adopción que cubren los gastos de vacunas, esterilización, microchip y otros cuidados médicos necesarios."
          />
        </div>
      </div>
    </section>
  );
};

export default SeccionObjetivos;
