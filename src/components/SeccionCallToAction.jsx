import React from "react";
import { Link } from "react-router-dom";

const SeccionCallToAction = () => {
  return (
    <div className=" mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center gap-4 rounded-lg bg-sky-600 p-6 shadow-lg sm:flex-row sm:justify-between">
        <strong className="text-xl text-center md:text-3xl md:text-left text-white ">
          ¡Espera! No te vayas sin adoptar
        </strong>

        <Link to={"adopta"}>
          <button
            as={Link}
            to="adopta"
            className="inline-flex items-center gap-2 rounded-full border cursor-pointer border-white bg-white px-8 py-3 text-yellow-500 hover:bg-yellow-500 hover:text-white focus:outline-none focus:ring active:bg-white/90"
          >
            <span className="text-sm font-bold"> Mascotas </span>
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="{2}"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SeccionCallToAction;
