import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SeccionFooter from "../components/SeccionFooter";

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
        <section className="text-gray-600 body-font  fade-in flex justify-center items-center">
          <div className=" bg-gray-100 rounded-lg p-8 md:w-1/2 my-24 mx-2">
            <h2 className="text-sky-600 text-2xl font-medium title-font mb-5">
              Iniciar Sesión
            </h2>

            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-sky-600">
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

            <div className="bg-red-300 text-white p-2 rounded mb-4 hidden">
              <ul>
                <li>* Error1</li>
                <li>* Error2</li>
              </ul>
            </div>
            <button className="text-white bg-sky-700 border-0 py-2 px-8 focus:outline-none hover:bg-sky-800 rounded text-lg font-medium">
              Aceptar
            </button>
            <p className="text-xs text-gray-500 mt-3">
              No tienes una cuenta?
              <span className="cursor-pointer text-cyan-700">
                <Link to={"/AdoptappCL/registrarse"}> Registrate!.</Link>
              </span>
            </p>
          </div>
        </section>
      </form>

      <SeccionFooter />
    </>
  );
};

export default Login;
