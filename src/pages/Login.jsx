import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useUserContext } from "../context/UserContext";

const auth = getAuth();

const Login = () => {
  const navigate = useNavigate();

  const { setUser } = useUserContext();

  const [datosForm, setDatosForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const verificarLogin = (e) => {
    e.preventDefault();
    // console.log(`Verifica login ${datosForm.email} ${datosForm.password}`);
    setError(null);

    signInWithEmailAndPassword(auth, datosForm.email, datosForm.password)
      .then((userCredential) => {
        const usuarioActivo = userCredential.user; // Signed in, setea el usuario en el context
        setUser(usuarioActivo);

        //sube los datos del usuario a localStorage
        localStorage.setItem("userData", JSON.stringify(usuarioActivo));
      })
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("no logueado, error", errorMessage);

        setError(errorMessage);
      });
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);
    setDatosForm({ ...datosForm, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form onSubmit={verificarLogin}>
        <section className="text-gray-600 body-font  fade-in flex justify-center items-center mt-10">
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

            {error && (
              <div className="bg-red-300 text-white p-2 rounded mb-4">
                <ul>
                  <li>{error}</li>
                </ul>
              </div>
            )}

            <button className="text-white bg-sky-700 border-0 py-2 px-8 focus:outline-none hover:bg-sky-800 rounded text-lg font-medium">
              Aceptar
            </button>
            <p className="text-xs text-gray-500 mt-3">
              No tienes una cuenta?
              <span className="cursor-pointer text-cyan-700">
                <Link to={"/registrarse"}> Registrate!.</Link>
              </span>
            </p>
          </div>
        </section>
      </form>
    </>
  );
};

export default Login;
