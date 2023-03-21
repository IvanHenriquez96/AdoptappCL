import React, { useState } from "react";

const FiltroMascotas = ({ mascotas, setMascotas }) => {
  // const mascotas_original = JSON.parse(localStorage.getItem("ListadoMascotas"));
  const [datosFiltro, setDatosFiltro] = useState({
    nombre: "",
    especie: "",
    sexo: "",
    cuidados: "",
  });

  const handleChange = (e) => {
    console.log(e.target, e.target.value);
    setDatosFiltro({ ...datosFiltro, [e.target.name]: e.target.value });
  };

  const buscarMascota = (e) => {
    console.log("comienza la busqueda", datosFiltro, mascotas);

    let mascotas_initial = [
      ...JSON.parse(localStorage.getItem("ListadoMascotas")),
    ];

    if (datosFiltro.especie !== "") {
      console.log("entra filtro especie");

      mascotas_initial = mascotas.filter((mascota) => {
        return (
          mascota.especie.toLowerCase() == datosFiltro.especie.toLowerCase()
        );
      });
    }
    console.log(mascotas_initial);

    if (datosFiltro.sexo !== "") {
      console.log("entra filtro sexo");

      mascotas_initial = mascotas_initial.filter((mascota) => {
        return mascota.sexo.toLowerCase() == datosFiltro.sexo.toLowerCase();
      });
    }

    if (datosFiltro.cuidados !== "") {
      console.log("entra filtro cuidados");

      mascotas_initial = mascotas_initial.filter((mascota) => {
        return (
          mascota.cuidados_especiales.toLowerCase() ==
          datosFiltro.cuidados.toLowerCase()
        );
      });
    }

    if (datosFiltro.nombre !== "") {
      console.log("entra filtro nombre");
      mascotas_initial = mascotas_initial.filter((mascota) => {
        return mascota.nombre.toLowerCase().includes(datosFiltro.nombre.trim());
      });
    }

    console.log(mascotas_initial);
    setMascotas(mascotas_initial);
  };

  return (
    <div className=" md:h-full h-screen  md:w-1/5 w-1/2 fixed bg-sky-500 bg-opacity-90 text-white py-2 px-2 z-10 scale-in-hor-left">
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Nombre
        </label>
        <input
          type="text"
          name="nombre"
          className="bg-gray-50 border border-gray-300  text-sm rounded-lg  block w-full p-2.5 text-sky-600"
          placeholder="Ingresa nombre"
          onChange={handleChange}
        />
      </div>

      <div className="mt-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Especie
        </label>
        <select
          className="bg-gray-50 border border-gray-300  text-sm rounded-lg  block w-full p-2.5 text-sky-600"
          onChange={handleChange}
          name="especie"
        >
          <option value="" defaultValue>
            Todos
          </option>
          <option value="Perro">Perro</option>
          <option value="Gato">Gato</option>
        </select>
      </div>

      <div className="mt-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Macho/Hembra
        </label>
        <select
          className="bg-gray-50 border border-gray-300  text-sm rounded-lg  block w-full p-2.5 text-sky-600"
          onChange={handleChange}
          name="sexo"
        >
          <option value="" defaultValue>
            Todos
          </option>
          <option value="Macho">Macho</option>
          <option value="Hembra">Hembra</option>
        </select>
      </div>

      <div className="mt-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Cuidados Especiales
        </label>
        <select
          className="bg-gray-50 border border-gray-300  text-sm rounded-lg  block w-full p-2.5 text-sky-600"
          onChange={handleChange}
          name="cuidados"
        >
          <option value="" defaultValue>
            Todos
          </option>
          <option value="Si">Si</option>
          <option value="No">No</option>
        </select>
      </div>

      <button
        className="mt-5 px-2 py-1 rounded bg-yellow-500 font-bold"
        onClick={buscarMascota}
      >
        Filtrar
      </button>
    </div>
  );
};

export default FiltroMascotas;
