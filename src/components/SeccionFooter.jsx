import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const SeccionFooter = () => {
  return (
    <>
      <footer aria-label="Site Footer">
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
