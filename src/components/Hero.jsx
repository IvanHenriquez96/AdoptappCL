import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section className="overflow-hidden bg-[url(https://www.cdc.gov/healthypets/images/covid/dog-and-cat.jpg?_=46111)] bg-cover bg-center bg-no-repeat mt-16">
        <div className="bg-black/60 p-8 md:px-32 lg:py-24">
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-bold text-white text-center sm:text-3xl md:text-5xl">
              ENCUENTRA AL COMPAÑERO PERFECTO
            </h2>

            {/* <p className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
              Encuentra a tu compañero perfecto y brinda amor a un animal
              necesitado
            </p> */}

            <div className="mt-4 sm:mt-8 flex justify-center">
              <Link to={"adopta"}>
                <button className=" mx-auto my-5  text-white font-bold bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded-2xl text-lg">
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
