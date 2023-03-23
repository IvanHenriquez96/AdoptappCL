import React, { useState } from "react";

const FormularioMascota = () => {
  // const [isMacho, setIsMacho] = useState(true);
  // const [isCuidadosEspeciales, setIsCuidadosEspeciales] = useState(false);
  // const [isPerro, setIsPerro] = useState(false);

  const [datosForm, setDatosForm] = useState({
    especie: "Perro",
    nombre: "",
    descripcion: "",
    edad: "",
    raza: "",
    sexo: "Macho",
    cuidados_especiales: "No",
  });

  const handleChange = (e) => {
    console.log(e.target, e.target.value);
    setDatosForm({ ...datosForm, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen fade-in">
      <h2 className="text-sky-600 text-2xl font-semibold my-5">
        Formulario Mascota
      </h2>

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
          // value={datosForm.nombre}
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
          // value={datosForm.descripcion}
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
          // value={datosForm.edad}
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
        <label
          htmlFor="raza"
          className="leading-7 text-sm text-sky-600 col-span-2"
        >
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
        <label
          htmlFor="raza"
          className="leading-7 text-sm text-sky-600 col-span-2"
        >
          ¿Necesita Cuidados Especiales?
        </label>

        <button
          className={`border rounded-lg p-1 ${
            datosForm.cuidados_especiales === "No"
              ? "bg-sky-600 text-white"
              : "border-sky-600  text-sky-600"
          }`}
          onClick={() =>
            setDatosForm({ ...datosForm, cuidados_especiales: "No" })
          }
        >
          No
        </button>

        <button
          className={`border rounded-lg p-1 ${
            datosForm.cuidados_especiales !== "No"
              ? "bg-sky-600 text-white"
              : "border-sky-600  text-sky-600"
          }`}
          onClick={() =>
            setDatosForm({ ...datosForm, cuidados_especiales: "Si" })
          }
        >
          Si
        </button>
      </div>

      <div className="relative my-10">
        <label
          htmlFor="raza"
          className="leading-7 text-sm text-sky-600 col-span-2"
        >
          Imagen Perfil
        </label>

        <input
          type="file"
          className="w-full mt-2"
          accept="image/*"
          onChange={handleChange}
        />
      </div>

      <div className="flex justify-center">
        <button className="bg-sky-600 text-white py-2 px-4 my-5 rounded-lg font-semibold w-full md:w-1/2 ">
          GUARDAR
        </button>
      </div>
    </div>
  );
};

export default FormularioMascota;
