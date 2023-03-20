import React from "react";

const FiltroMascotas = () => {
  const [datosFiltro, setDatosFiltro] = useState({
    nombre: "",
    especie: "Perro",
    sexo: "Macho",
    cuidados: "No",
  });

  const handleChange = (e) => {
    setDatosForm({ ...datosForm, [e.target.name]: e.target.value });
  };

  return (
    <div className=" md:h-full h-screen  md:w-1/5 w-1/2 fixed bg-sky-500 bg-opacity-90 text-white py-2 px-2 z-10">
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Nombre
        </label>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300  text-sm rounded-lg  block w-full p-2.5 text-sky-600"
          placeholder="Ingresa nombre"
        />
      </div>

      <div className="mt-5">
        <label
          htmlFor="countries"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Especie
        </label>
        <select className="bg-gray-50 border border-gray-300  text-sm rounded-lg  block w-full p-2.5 text-sky-600">
          <option value="todo" defaultValue>
            Todos
          </option>
          <option value="Perro">Perro</option>
          <option value="Gato">Gato</option>
        </select>
      </div>

      <div className="mt-5">
        <label
          htmlFor="countries"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Macho/Hembra
        </label>
        <select className="bg-gray-50 border border-gray-300  text-sm rounded-lg  block w-full p-2.5 text-sky-600">
          <option value="todo" defaultValue>
            Todos
          </option>
          <option value="Macho">Macho</option>
          <option value="Hembra">Hembra</option>
        </select>
      </div>

      <div className="mt-5">
        <label
          htmlFor="countries"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Cuidados Especiales
        </label>
        <select className="bg-gray-50 border border-gray-300  text-sm rounded-lg  block w-full p-2.5 text-sky-600">
          <option value="todo" defaultValue>
            Todos
          </option>
          <option value="Si">Si</option>
          <option value="No">No</option>
        </select>
      </div>
    </div>
  );
};

export default FiltroMascotas;
