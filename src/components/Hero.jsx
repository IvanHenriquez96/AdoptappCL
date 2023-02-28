import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section className="overflow-hidden bg-[url(https://www.cdc.gov/healthypets/images/covid/dog-and-cat.jpg?_=46111)] bg-cover bg-center bg-no-repeat">
        <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
              HERO SECTION
            </h2>

            <p className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore officia corporis quasi doloribus iure architecto quae
              voluptatum beatae excepturi dolores.
            </p>

            <div className="mt-4 sm:mt-8">
              <Link to={"adopta"}>
                <button className=" mx-auto my-5 text-white font-bold bg-cyan-600 border-0 py-2 px-8 focus:outline-none hover:bg-cyan-700 rounded-2xl text-lg">
                  ¡ADOPTA!
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
