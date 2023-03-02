import React from "react";

const CardServicio = ({ imagen, titulo, desc }) => {
  return (
    <div className="xl:w-1/3 md:w-1/2 py-4 md:p-4">
      <div className="border border-gray-200 p-6 rounded-lg">
        <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-sky-100 text-indigo-500 mb-4">
          <img src={imagen} alt="icono" />
        </div>
        <h2 className="text-lg text-sky-600 font-medium title-font mb-2">
          {titulo}
        </h2>
        <p className="leading-relaxed text-base">{desc}</p>
      </div>
    </div>
  );
};

export default CardServicio;
