import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

const Registro = () => {
  const [datosForm, setDatosForm] = useState({
    email: "",
    password: "",
    repeat_password: "",
  });

  const [errores, setErrores] = useState([]);

  const verificarRegistro = (e) => {
    e.preventDefault();
    setErrores([]);

    //Validaciones
    const errores = [];

    datosForm.email.trim().length <= 0 && errores.push("Email Obligatorio");
    datosForm.password.trim().length <= 0 &&
      errores.push("Contraseña Obligatorio");
    datosForm.repeat_password.trim().length <= 0 &&
      errores.push("Repetir Contraseña Obligatorio");
    datosForm.password.trim() !== datosForm.repeat_password.trim() &&
      errores.push("Contraseñas no coinciden");

    //Crea el usuario

    setErrores(errores);

    errores.length >= 0 &&
      createUserWithEmailAndPassword(auth, datosForm.email, datosForm.password)
        .then((userCredential) => {
          // Signed in
          console.log("usuario creado");
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("error al crear el usuario", errorMessage);
          // ..
        });
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);
    setDatosForm({ ...datosForm, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form onSubmit={verificarRegistro}>
        <section className="text-gray-600 body-font  fade-in flex justify-center items-center">
          <div className=" bg-gray-100 rounded-lg p-8 md:w-1/2 my-24 mx-4">
            <h2 className="text-sky-600 text-2xl font-medium title-font mb-5">
              Crea tu cuenta
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
                htmlFor="password"
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

            <div className="relative mb-4">
              <label
                htmlFor="repeat_password"
                className="leading-7 text-sm text-cyan-600"
              >
                Repetir Contraseña
              </label>
              <input
                type="password"
                value={datosForm.repeat_password}
                onChange={handleChange}
                name="repeat_password"
                className="w-full bg-white rounded border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            {errores.length > 0 && (
              <div className="bg-red-300 text-white p-2 rounded mb-4">
                <ul>
                  {errores.map((error, index) => (
                    <li key={index} className="text-sm">
                      - {error}
                    </li>
                  ))}
                  {/* <li>{errores}</li> */}
                </ul>
              </div>
            )}

            <button className="text-white bg-sky-700 border-0 py-2 px-8 focus:outline-none hover:bg-sky-800 rounded text-lg font-medium">
              Aceptar
            </button>
            <p className="text-xs text-gray-500 mt-3">
              Ya tienes una cuenta?
              <span className="cursor-pointer text-cyan-700">
                <Link to={"/AdoptappCL/login"}> Inicia Sesión!.</Link>
              </span>
            </p>
          </div>
        </section>
      </form>
    </>
  );
};

export default Registro;
