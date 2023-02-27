import React from "react";

const CardSkeleton = () => {
  return (
    <div className="p-4 my-4">
      <div className="w-full max-w-lg py-8 flex flex-row items-center justify-center mx-auto bg-gray-200 rounded-lg shadow-xl">
        <div className="flex flex-col md:flex-row w-3/4 md:w-5/6 space-x-0 md:space-x-8">
          <div className="w-full md:w-2/5 flex flex-col items-center justify-center">
            <figure className="w-1/2 md:w-full  rounded-full overflow-hidden">
              <img src="https://via.placeholder.com/300.png/D1D5DB?text=" />
            </figure>
          </div>
          <div className="w-full md:w-3/5 space-y-4 flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center">
              <div className="text-center md:text-left text-2xl font-bold bg-gray-300 text-gray-300 my-2 rounded-md">
                CARGANDO
              </div>
              <div className="inline bg-gray-300 rounded text-gray-300 font-normal leading-6 w-full text-base">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
                quidem expedita eum, harum animi earum natus alias vitae, porro
              </div>
            </div>

            <ul className="bg-gray-300 rounded space-x-4 flex flex-row justify-center w-full mb-4">
              <li className="text-sm text-gray-300">
                <strong className="text-gray-300">99</strong> Likes
              </li>
            </ul>

            <p className="transition-colors bg-gray-300 hover:bg-gray-300 p-2 rounded-xl w-full text-gray-300 font-medium text-hover shadow-md shadow-gray-300">
              Ver Más
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
