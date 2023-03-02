import React from "react";
import logo from "../assets/logo.png";

const SeccionFooter = () => {
  return (
    <>
      <footer aria-label="Site Footer">
        <div className=" mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4 rounded-lg bg-sky-500 p-6 shadow-lg sm:flex-row sm:justify-between">
            <strong className="text-xl text-white sm:text-xl">
              No te olvides de adoptar
            </strong>
            <a
              className="inline-flex items-center gap-2 rounded-full border border-white bg-white px-8 py-3 text-yellow-500 hover:bg-yellow-500 hover:text-white focus:outline-none focus:ring active:bg-white/90"
              href="/"
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
            </a>
          </div>
        </div>
        <div className="bg-sky-600 text-white text-center p-8">
          <div className="flex justify-center">
            <img src={logo} className="w-44 my-5" alt="logo" />
          </div>
          <p>© 2023. Desarrollado por Iván Henríquez.</p>
        </div>
      </footer>
    </>
  );
};

export default SeccionFooter;
