import React from "react";
import { Link, useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  console.log(error);
  return (
    // <div>
    //   <p>{error.data}</p>
    //   <Link className="cursor-pointer mt-5" to={"/"}>
    //     Volver al inicio
    //   </Link>
    // </div>

    <div className="grid h-screen px-4 bg-white place-content-center">
      <div className="text-center">
        <h1 className="font-black text-gray-200 text-9xl">404</h1>

        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Uh-oh!
        </p>

        <p className="mt-4 text-gray-500">Página no encontrada.</p>

        <Link
          to={"/"}
          className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-sky-600 rounded hover:bg-sky-700 focus:outline-none focus:ring"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
