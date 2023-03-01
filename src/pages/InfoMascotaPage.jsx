import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Mascotas from "../Controllers/MascotasController";

const InfoMascotaPage = () => {
  let { idMascota } = useParams();

  const [mascota, setMascota] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    obtenerDatosMascota();
  }, []);

  const obtenerDatosMascota = () => {
    const mascota = Mascotas.find((mascota) => mascota.id == idMascota);
    setMascota(mascota);
    setIsLoading(false);
    console.log(mascota);
  };

  return (
    <section className="text-gray-600 body-font overflow-hidden fade-in">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-gray-600 tracking-widest">
              Fundación: {mascota.fundacion}
            </h2>
            <h1 className="text-cyan-800 text-3xl title-font font-medium mb-4">
              {mascota.nombre}
            </h1>
            <div className="flex mb-4">
              <a className="flex-grow text-cyan-700 border-b-2 border-cyan-700 py-2 text-lg px-1">
                Descripción
              </a>
              {/* <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
                Reviews
              </a>
              <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
                Details
              </a> */}
            </div>
            <p className="leading-relaxed mb-4">{mascota.descripcion}</p>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Edad</span>
              <span className="ml-auto text-gray-900">2 Meses</span>
            </div>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Tamaño</span>
              <span className="ml-auto text-gray-900">Pequeño</span>
            </div>
            <div className="flex border-t border-b mb-6 border-gray-200 py-2">
              <span className="text-gray-500">
                Cuidados especiales/Bajo tratamiento
              </span>
              <span className="ml-auto text-gray-900">SI</span>
            </div>
            <div className="flex">
              {/* <span className="title-font font-medium text-2xl text-gray-900">
                $58.00
              </span> */}
              <button className="flex ml-auto text-white bg-cyan-700 font-medium border-0 py-2 px-6 focus:outline-none hover:bg-cyan-600 rounded">
                Adoptar
              </button>
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </div>
          </div>
          {/* <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src="https://dummyimage.com/400x400"
          /> */}

          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={mascota.imagen_perfil}
          />
        </div>
      </div>
    </section>
  );
};

export default InfoMascotaPage;
