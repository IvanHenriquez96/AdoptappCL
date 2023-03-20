import React, { useEffect, useState } from "react";
import CardMascota from "../components/CardMascota";
import CardSkeleton from "../components/CardSkeleton";
import app from "../firebaseConfig";

// import mascotas from "../Controllers/MascotasController";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore";

const db = getFirestore(app);

const Adopta = () => {
  //States
  const [isLoading, setIsLoading] = useState(true);
  const [mascotas, setMascotas] = useState([]);
  const [filtroIsOpen, setFiltroIsOpen] = useState(false);

  //Effects
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);

    obtenerMascotas(db);
  }, []);

  //Funciones
  const obtenerMascotas = async function getCities(db) {
    const mascotasCol = collection(db, "mascotas");
    const mascotaSnapshot = await getDocs(mascotasCol);
    const mascotaList = await mascotaSnapshot.docs.map((doc) => doc.data());
    // console.log(mascotaList);
    setMascotas(mascotaList);
    setIsLoading(false);
  };

  const toggleFiltro = (e) => {
    e.preventDefault();
    setFiltroIsOpen(!filtroIsOpen);
  };

  if (isLoading) {
    return (
      <div className="grid md:grid-cols-2 xl:grid-cols-3 md:px-32 fade-in">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    );
  } else {
    return (
      <div className="fade-in relative">
        {filtroIsOpen && (
          <div className=" md:h-full h-screen  md:w-1/5 w-1/2 fixed bg-sky-500 bg-opacity-90 text-white py-2 px-2 z-10">
            <div>
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
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
        )}

        <br />
        <br />
        <div className="text-center text-3xl md:text-4xl font-bold text-sky-600  fade-in">
          Te presentamos a...
        </div>

        <div className="flex justify-end px-4  md:px-32">
          <button
            onClick={toggleFiltro}
            className="text-sky-600 border border-sky-600 rounded-lg py-1 px-2"
          >
            Filtrar búsqueda
          </button>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3  md:px-32 mt-10">
          {mascotas.map((mascota) => {
            return (
              <CardMascota
                key={mascota.id}
                edad={mascota.edad}
                raza={mascota.raza}
                idMascota={mascota.id}
                nombre={mascota.nombre}
                imagen_perfil={mascota.imagen_perfil}
                descripcion={mascota.descripcion}
                likes={mascota.likes}
                sexo={mascota.sexo}
                especie={mascota.especie}
              />
            );
          })}
        </div>
      </div>
    );
  }
};

export default Adopta;
