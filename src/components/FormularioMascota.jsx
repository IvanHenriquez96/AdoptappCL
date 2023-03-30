import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import firebaseApp from "../firebaseConfig";
import { UserContext } from "../context/UserContext";

const db = getFirestore(firebaseApp);

const FormularioMascota = ({
  setSeccionCitas,
  setSeccionMascotas,
  setSeccionFormMascota,
  mascotas,
  setMascotas,
  mascotaAEditar,
}) => {
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { user } = useContext(UserContext);
  console.log(user);

  const navigate = useNavigate();

  const [datosForm, setDatosForm] = useState({
    especie: mascotaAEditar.especie || "Perro",
    nombre: mascotaAEditar.nombre || "",
    descripcion: mascotaAEditar.descripcion || "",
    edad: mascotaAEditar.edad || "",
    raza: mascotaAEditar.raza || "",
    sexo: mascotaAEditar.sexo || "Macho",
    cuidados_especiales: mascotaAEditar.cuidados_especiales || "No",
    imagen_perfil: mascotaAEditar.imagen_perfil || "",
  });

  const handleChange = (e) => {
    console.log(e.target, e.target.value);
    setDatosForm({ ...datosForm, [e.target.name]: e.target.value });
  };

  const guardarMascota = () => {
    setErrors([]);
    setIsLoading(true);

    const errores = [];

    datosForm.nombre.trim() === "" && errores.push("Nombre es obligatorio");
    datosForm.descripcion.trim() === "" && errores.push("Descripción es obligatorio");
    datosForm.edad.trim() === "" && errores.push("Edad es obligatorio");
    datosForm.raza.trim() === "" && errores.push("Raza es obligatorio");
    datosForm.imagen_perfil.trim() === "" &&
      errores.push("URL para la imagen de perfil es obligatorio");

    if (errores.length > 0) {
      setErrors(errores);
      setIsLoading(false);
    } else {
      //Guarda la nueva mascota

      if (mascotaAEditar.id) {
        //Tiene ID, ya existe, hay que actualizarlo

        updateMascota();
      } else {
        //Es nuevo, agregarlo a la collection
        addMascota();
      }

      //Para prueba
      setTimeout(() => {
        setIsLoading(false);
        setSeccionCitas(false);
        setSeccionMascotas(true);
        setSeccionFormMascota(false);
      }, 2000);
    }
  };

  const addMascota = async () => {
    // Add a new document with a generated id
    const newMascota = doc(collection(db, "mascotas"));

    await setDoc(newMascota, {
      adoptado: false,
      cuidados_especiales: datosForm.cuidados_especiales,
      descripcion: datosForm.descripcion,
      discapacidad: datosForm.cuidados_especiales == "Si" ? true : false,
      edad: datosForm.edad,
      especie: datosForm.especie,
      fundacion: user.displayName,
      id_fundacion: user.iud,
      imagen_perfil: datosForm.imagen_perfil,
      nombre: datosForm.nombre,
      raza: datosForm.raza,
      sexo: datosForm.sexo,
      tipo: "Usuario",
      tamano: "N/A",
      tratos_especiales: [],
    });

    // setMascotas(mascotas);
    console.log("agregado a la coleccion");

    navigate("/adopta");
  };

  const updateMascota = async () => {
    const mascotaRef = doc(db, "mascotas", mascotaAEditar.id);

    await updateDoc(mascotaRef, {
      adoptado: false,
      cuidados_especiales: datosForm.cuidados_especiales,
      descripcion: datosForm.descripcion,
      discapacidad: datosForm.cuidados_especiales == "Si" ? true : false,
      edad: datosForm.edad,
      especie: datosForm.especie,
      fundacion: "ChileAdopta",
      id_fundacion: "e0646hPugJNgYMMCq33m5UUk51p1",
      imagen_perfil: datosForm.imagen_perfil,
      nombre: datosForm.nombre,
      raza: datosForm.raza,
      sexo: datosForm.sexo,
      tipo: "Usuario",
      tamano: "N/A",
      tratos_especiales: [],
    });

    console.log("se actualizó la mascota");

    navigate("/adopta");
  };

  return (
    <div className="min-h-screen fade-in">
      <h2 className="text-sky-600 text-2xl font-semibold my-5">Formulario Mascota</h2>

      <div className="relative my-10 grid grid-cols-2 gap-x-2">
        <label
          htmlFor="cuidadosEspeciales"
          className="leading-7 text-sm text-sky-600 col-span-2"
        >
          Especie
        </label>

        <button
          className={`border rounded-lg p-1 ${
            datosForm.especie === "Perro"
              ? "bg-sky-600 text-white"
              : "border-sky-600  text-sky-600"
          }`}
          onClick={() => setDatosForm({ ...datosForm, especie: "Perro" })}
        >
          Perro
        </button>

        <button
          className={`border rounded-lg p-1 ${
            datosForm.especie !== "Perro"
              ? "bg-sky-600 text-white"
              : "border-sky-600  text-sky-600"
          }`}
          onClick={() => setDatosForm({ ...datosForm, especie: "Gato" })}
        >
          Gato
        </button>
      </div>

      <div className="relative mb-4">
        <label htmlFor="nombre" className="leading-7 text-sm text-sky-600">
          Nombre
        </label>
        <input
          type="text"
          defaultValue={datosForm.nombre}
          onChange={handleChange}
          name="nombre"
          className="w-full bg-white rounded border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>

      <div className="relative mb-4">
        <label htmlFor="descripcion" className="leading-7 text-sm text-sky-600">
          Descripción
        </label>
        <textarea
          defaultValue={datosForm.descripcion}
          onChange={handleChange}
          name="descripcion"
          className="w-full bg-white rounded border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>

      <div className="relative mb-4">
        <label htmlFor="edad" className="leading-7 text-sm text-sky-600">
          Edad
        </label>
        <input
          type="text"
          defaultValue={datosForm.edad}
          onChange={handleChange}
          name="edad"
          placeholder="Ejemplo: 2 Años , 10 Meses, 1 Mes"
          className="w-full bg-white rounded border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>

      <div className="relative mb-4">
        <label htmlFor="raza" className="leading-7 text-sm text-sky-600">
          Raza
        </label>
        <input
          type="text"
          // value={datosForm.raza}
          onChange={handleChange}
          defaultValue={datosForm.raza}
          name="raza"
          placeholder="Ejemplo: Mezcla, Otro."
          className="w-full bg-white rounded border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>

      <div className="relative my-10 grid grid-cols-2 gap-x-2">
        <label htmlFor="raza" className="leading-7 text-sm text-sky-600 col-span-2">
          Sexo
        </label>

        <button
          className={`border rounded-lg p-1 ${
            datosForm.sexo === "Macho"
              ? "bg-sky-600 text-white"
              : "border-sky-600  text-sky-600"
          }`}
          onClick={() => setDatosForm({ ...datosForm, sexo: "Macho" })}
        >
          Macho
        </button>

        <button
          className={`border rounded-lg p-1 ${
            datosForm.sexo !== "Macho"
              ? "bg-sky-600 text-white"
              : "border-sky-600  text-sky-600"
          }`}
          onClick={() => setDatosForm({ ...datosForm, sexo: "Hembra" })}
        >
          Hembra
        </button>
      </div>

      <div className="relative my-10 grid grid-cols-2 gap-x-2">
        <label htmlFor="raza" className="leading-7 text-sm text-sky-600 col-span-2">
          ¿Necesita Cuidados Especiales?
        </label>

        <button
          className={`border rounded-lg p-1 ${
            datosForm.cuidados_especiales === "No"
              ? "bg-sky-600 text-white"
              : "border-sky-600  text-sky-600"
          }`}
          onClick={() => setDatosForm({ ...datosForm, cuidados_especiales: "No" })}
        >
          No
        </button>

        <button
          className={`border rounded-lg p-1 ${
            datosForm.cuidados_especiales !== "No"
              ? "bg-sky-600 text-white"
              : "border-sky-600  text-sky-600"
          }`}
          onClick={() => setDatosForm({ ...datosForm, cuidados_especiales: "Si" })}
        >
          Si
        </button>
      </div>

      <div className="relative my-10">
        <label
          htmlFor="imagen_perfil"
          className="leading-7 text-sm text-sky-600 col-span-2"
        >
          Imagen Perfil
        </label>

        <input
          type="text"
          // value={datosForm.raza}
          onChange={handleChange}
          defaultValue={datosForm.imagen_perfil}
          name="imagen_perfil"
          placeholder="Por ahora solo aceptamos URLS de imagenes"
          className="w-full bg-white rounded border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>

      {/* errors */}
      {errors.length > 0 && (
        <div className="bg-red-300 text-white p-2 rounded mb-4">
          <ul>
            {errors.map((error, index) => (
              <li key={index} className="text-sm">
                - {error}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex justify-center">
        <button
          onClick={guardarMascota}
          className={`bg-sky-600 text-white py-2 px-4 my-5 rounded-lg font-semibold w-full md:w-1/2 `}
        >
          {isLoading ? "GUARDANDO..." : "GUARDAR"}
        </button>
      </div>
    </div>
  );
};

export default FormularioMascota;
