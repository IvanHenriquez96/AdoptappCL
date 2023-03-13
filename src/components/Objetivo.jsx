import React from "react";
// import img from "../assets/pet.png";

const Objetivo = ({ titulo, desc, numero }) => {
  return (
    <div className="flex items-start gap-4">
      <span className="shrink-0 rounded-lg bg-yellow-500 p-4 my-auto">
        {/* <img src={img} className="w-10" alt="logo" /> */}
        <p className="text-3xl font-extrabold">{numero}</p>
      </span>

      <div>
        <h2 className="text-lg font-bold">{titulo}</h2>

        <p className="mt-1 text-sm text-gray-50 text-justify">{desc}</p>
      </div>
    </div>
  );
};

export default Objetivo;
