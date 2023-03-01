import React from "react";
import { Link } from "react-router-dom";

const CardMascota = ({
  idMascota,
  nombre,
  imagen_perfil,
  descripcion,
  likes,
}) => {
  return (
    <div className="p-4 my-4 fade-in">
      <div className="w-full max-w-lg py-8 flex flex-row items-center justify-center mx-auto bg-[#FFFBFB] rounded-lg shadow-xl">
        <div className="flex flex-col md:flex-row w-3/4 md:w-5/6 space-x-0 md:space-x-8">
          <div className="w-full md:w-2/5 flex flex-col items-center justify-center">
            <figure className="w-1/2 md:w-full  rounded-full overflow-hidden">
              <img src={imagen_perfil} />
            </figure>
          </div>
          <div className="w-full md:w-3/5 space-y-4 flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center">
              <h1 className="text-center md:text-left text-2xl font-bold text-cyan-800 my-2">
                {nombre}
              </h1>
              <p className="inline text-gray-700 font-normal leading-6 w-full text-base">
                {descripcion}
              </p>
            </div>
            {/* <ul className="space-y-4  md:space-y-0 space-x-0 md:space-x-4 flex flex-col md:flex-row text-left justify-center">
              <li className="text-sm">NYC</li>
              <li className="text-sm">Member since 2019</li>
            </ul> */}

            <ul className="space-x-4 flex flex-row justify-center w-full mb-4">
              <li className="text-sm text-cyan-800">
                <strong className="text-cyan-900">{likes}</strong> Likes
              </li>
              {/* <li className="text-sm text-cyan-800">
                <strong className="text-cyan-900">100</strong> Following
              </li> */}
            </ul>
            <Link
              as={Link}
              to={idMascota.toString()}
              className="transition-colors text-center bg-cyan-700 hover:bg-cyan-800 p-2 rounded-xl w-full text-white font-medium text-hover shadow-md shadow-cyan-900"
            >
              Ver Más
            </Link>

            {/* <button className="flex mx-auto my-5 text-white font-bold bg-cyan-600 border-0 py-2 px-8 focus:outline-none hover:bg-cyan-700 rounded-2xl text-lg">
              ¡ADOPTA!
            </button> */}
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default CardMascota;
