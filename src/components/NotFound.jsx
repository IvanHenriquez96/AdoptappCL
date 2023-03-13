import React from "react";
import { Link, useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <p>{error.data}</p>
      <Link className="cursor-pointer mt-5" to={"/"}>
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;
