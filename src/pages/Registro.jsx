import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import firebaseApp from "../firebaseConfig";

import { UserContext } from "../context/UserContext";

const auth = getAuth();

const db = getFirestore(firebaseApp);

const Registro = () => {
  //Hooks
  const navigate = useNavigate();

  //State
  const [datosForm, setDatosForm] = useState({
    nombre_completo: "",
    email: "",
    password: "",
    repeat_password: "",
  });

  const [errores, setErrores] = useState([]);

  //Context
  const { user, setUser } = useContext(UserContext);

  //Funciones
  const verificarRegistro = async (e) => {
    e.preventDefault();
    setErrores([]);

    //Validaciones
    const errores = [];

    datosForm.nombre_completo.trim().length <= 0 &&
      errores.push("Nombre Completo Obligatorio");
    datosForm.email.trim().length <= 0 && errores.push("Email Obligatorio");
    datosForm.password.trim().length <= 0 &&
      errores.push("Contraseña Obligatorio");
    datosForm.repeat_password.trim().length <= 0 &&
      errores.push("Repetir Contraseña Obligatorio");
    datosForm.password.trim() !== datosForm.repeat_password.trim() &&
      errores.push("Contraseñas no coinciden");

    await setErrores(errores);

    if (errores.length >= 0) {
      //crea cuenta de usuario
      await createUserWithEmailAndPassword(
        auth,
        datosForm.email,
        datosForm.password
      )
        .then((userCredential) => {
          // Usuario Creado
          const user = userCredential.user;
          setUser(user); //inicia sesión automaticamente
          console.log("usuario creado");

          //sube los datos del usuario a localStorage
          localStorage.setItem("userData", JSON.stringify(user));
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("error al crear el usuario", errorMessage);
        });
    }

    // Add a new document with a generated id
    const newUser = doc(collection(db, "usuarios"));

    // later...
    await setDoc(newUser, {
      nombre: datosForm.nombre_completo,
      email: datosForm.email,
    });
    console.log("agregado a la coleccion");

    navigate("/");
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
              <label
                htmlFor="nombre_completo"
                className="leading-7 text-sm text-sky-600"
              >
                Nombre Completo
              </label>
              <input
                type="nombre_completo"
                value={datosForm.nombre_completo}
                onChange={handleChange}
                name="nombre_completo"
                className="w-full bg-white rounded border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

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
                <Link to={"/login"}> Inicia Sesión!.</Link>
              </span>
            </p>
          </div>
        </section>
      </form>
    </>
  );
};

export default Registro;
