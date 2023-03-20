import React from "react";

const QuienesSomos = () => {
  return (
    <div className="fade-in">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          {/* <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col"> */}
          <div className="flex items-center lg:w-4/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <img
              src="https://ihenriquez.dev/assets/perfil2-6a832e08.png"
              alt="foto perfil"
              className=" sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 flex-shrink-0"
            />

            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-sky-600 text-2xl title-font font-medium mb-2">
                ¡Hola a todos!
              </h2>
              <p className="leading-relaxed text-base">
                Mi nombre es Iván Henríquez, tengo 27 años, nacionalidad
                chilena. Soy Desarrollador Web FullStack con 4+ años de
                experiencia, los invito a pasar por mi Web{" "}
                <a
                  href="http://ihenriquez.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-700 font-bold"
                >
                  ihenriquez.dev
                </a>{" "}
                para que puedan ver más de mis proyectos realizados
              </p>
              <a
                className="mt-3 text-yellow-500 inline-flex items-center"
                href="http://ihenriquez.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visita mi sitio web
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="flex items-center lg:w-4/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-sky-600 text-2xl title-font font-medium mb-2">
                Misión
              </h2>
              <p className="leading-relaxed text-base">
                La misión del sitio web es aprovechar de buena manera los
                recursos que tenemos el día de hoy e intentar conectar a todas
                las fundaciones de rescate de animales y facilitar la adopción
                de animales a través de una plataforma centralizada en línea,
                también poder ayudar a estas fundaciones a través de donaciones
                para que puedan seguir exististiendo y realizando la linda labor
                que hacen.
              </p>
            </div>
            <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 flex-shrink-0">
              <img
                src="https://cdn-icons-png.flaticon.com/512/8653/8653308.png"
                alt="icono mision"
                className="w-2/3"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuienesSomos;
