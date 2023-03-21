import React from "react";
import { Link } from "react-router-dom";

const CardMascota = ({
  idMascota,
  nombre,
  imagen_perfil,
  edad,
  raza,
  sexo,
  likes,
  especie,
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
            <div className="flex justify-center items-center">
              <img
                src={
                  especie == "Perro"
                    ? "https://cdn-icons-png.flaticon.com/512/1650/1650558.png"
                    : "https://cdn-icons-png.flaticon.com/512/1650/1650555.png"
                }
                className="h-7 mr-2"
              />

              <h1 className="text-center md:text-left text-2xl font-bold text-sky-600 my-2">
                {nombre}
              </h1>
            </div>
            <div className="text-gray-700 grid grid-cols-2 md:text-sm">
              <p>Edad: </p>
              {edad}
              <p>Raza:</p>
              {raza}
              <p>Sexo:</p>
              <img
                src={
                  sexo == "Macho"
                    ? "https://cdn-icons-png.flaticon.com/512/2404/2404394.png"
                    : "https://cdn-icons-png.flaticon.com/512/2404/2404324.png"
                }
                className="w-5"
              />
            </div>

            {/* <ul className="space-x-4 flex flex-row justify-center w-full mb-4">
              <li className="text-sm text-sky-600">
                <strong className="text-sky-600">{likes}</strong> Likes
              </li>
            </ul> */}
            <Link
              as={Link}
              to={idMascota.toString()}
              className="transition-colors text-center bg-yellow-500 hover:bg-yellow-600 p-2 rounded-xl w-full text-white font-medium text-hover shadow-md"
            >
              Ver Más
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMascota;
