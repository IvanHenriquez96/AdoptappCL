import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  // const [inputEmail, setInputEmail] = useState("");
  // const [inputPassword, setInputPassword] = useState("");

  const [datosForm, setDatosForm] = useState({
    email: "",
    password: "",
  });

  const verificarLogin = (e) => {
    e.preventDefault();
    console.log(`Verifica login ${datosForm.email} ${datosForm.password}`);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);
    setDatosForm({ ...datosForm, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form onSubmit={verificarLogin}>
        <section className="text-gray-600 body-font fade-in">
          <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
            <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
              <h1 className="title-font font-medium text-3xl text-cyan-900">
                Slow-carb next level shoindcgoitch ethical authentic, poko
                scenester
              </h1>
              <p className="leading-relaxed mt-4">
                Poke slow-carb mixtape knausgaard, typewriter street art
                gentrify hammock starladder roathse. Craies vegan tousled etsy
                austin.
              </p>
            </div>
            <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
              <h2 className="text-cyan-900 text-lg font-medium title-font mb-5">
                Iniciar Sesión
              </h2>

              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-cyan-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  value={datosForm.email}
                  onChange={handleChange}
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="full-name"
                  className="leading-7 text-sm text-cyan-600"
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  value={datosForm.password}
                  onChange={handleChange}
                  name="password"
                  className="w-full bg-white rounded border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="text-white bg-cyan-700 border-0 py-2 px-8 focus:outline-none hover:bg-cyan-800 rounded text-lg font-medium">
                Aceptar
              </button>
              <p className="text-xs text-gray-500 mt-3">
                No tienes una cuenta?
                <span className="cursor-pointer text-cyan-700">
                  <Link to={"/AdoptappCL/registrarse"}> Registrate!.</Link>
                </span>
              </p>
            </div>
          </div>
        </section>
      </form>
    </>
  );
};

export default Login;
